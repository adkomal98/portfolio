import { useEffect, useRef, useState } from 'react';
import {
  profile, workedWith, about, services, selectedWork, work, experience, skills,
  education, certification, publications,
} from './data.js';
import PortfolioPage from './PortfolioPage.jsx';

const Icon = ({ name, slot }) => <md-icon slot={slot}>{name}</md-icon>;

/* ---------- scroll-reveal observer ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-scale, .stagger');
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- simple path-based router ---------- */
function useRoute() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

function navigate(to) {
  window.history.pushState(null, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo(0, 0);
}

/* ---------- sections ---------- */

function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>{profile.name}</a>
        <nav>
          <md-text-button href="#about">About</md-text-button>
          <md-text-button href="#work">Work</md-text-button>
          <md-text-button onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}>Full Portfolio</md-text-button>
          <md-text-button href="#experience">Experience</md-text-button>
          <md-filled-tonal-button href="#contact" class="hide-mobile">Contact</md-filled-tonal-button>
          <md-filled-tonal-button class="show-mobile" onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}>Full Portfolio</md-filled-tonal-button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <p className="label">{profile.role} · {profile.tagline} · {profile.city}</p>
          <h1 className="display">{profile.headline}</h1>
          <p className="lead">{profile.intro}</p>
          <div className="row">
            <md-filled-button href="#work" trailing-icon>
              See my work<Icon name="arrow_downward" slot="icon" />
            </md-filled-button>
            <md-filled-tonal-button href="#contact">Get in touch</md-filled-tonal-button>
          </div>
        </div>
        <div className="hero-photo">
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof wrap reveal" aria-label="Worked with">
      <span className="label">Worked with</span>
      {workedWith.map((n) => <span className="pill" key={n}>{n}</span>)}
    </section>
  );
}

function About() {
  return (
    <section className="wrap section reveal" id="about">
      <p className="label">About</p>
      <h2 className="headline">{about.heading}</h2>
      <div className="about-text">
        {about.paragraphs.map((p) => <p className="body" key={p}>{p}</p>)}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="wrap section reveal" id="services">
      <p className="label">What I do</p>
      <h2 className="headline">Services</h2>
      <div className="services stagger">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <div className="card-header">
              <div className="card-icon"><Icon name={s.icon} /></div>
              <h3 className="title">{s.title}</h3>
            </div>
            <p className="body muted">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="wrap section reveal">
      <p className="label">How I work</p>
      <h2 className="headline">Work in detail</h2>
      <div className="case-studies stagger">
        {selectedWork.map((sw) => (
          <div className="case-study" key={sw.brand}>
            <div className="case-study-num">{sw.num}</div>
            <div className="case-study-content">
              <p className="case-study-tags">{sw.tags}</p>
              <h3 className="case-study-brand">{sw.brand}</h3>
              <p className="case-study-summary">{sw.summary}</p>
              <p className="body muted">{sw.desc}</p>
              <ul className="case-study-bullets">
                {sw.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkCarousel() {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const t = track.current;
    if (!t) return;
    setEdge({
      start: t.scrollLeft < 4,
      end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4,
    });
  };
  useEffect(() => {
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const scroll = (dir) => {
    const t = track.current;
    const card = t.firstElementChild;
    t.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: 'smooth' });
  };

  return (
    <section className="wrap section reveal" id="work">
      <div className="work-head">
        <div>
          <p className="label">Portfolio</p>
          <h2 className="headline">Selected work</h2>
        </div>
        <div className="row">
          <md-filled-tonal-icon-button aria-label="Previous" disabled={edge.start || undefined} onClick={() => scroll(-1)}>
            <Icon name="arrow_back" />
          </md-filled-tonal-icon-button>
          <md-filled-tonal-icon-button aria-label="Next" disabled={edge.end || undefined} onClick={() => scroll(1)}>
            <Icon name="arrow_forward" />
          </md-filled-tonal-icon-button>
        </div>
      </div>

      <div className="track" ref={track} onScroll={update}>
        {work.map((w) => {
          const Tag = w.url ? 'a' : 'div';
          const props = w.url ? { href: w.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          const hasImage = !!w.image;
          return (
            <Tag
              className={`slide ${hasImage ? 'slide-img' : 'tone-primary'}`}
              key={w.title}
              {...props}
              style={hasImage ? { backgroundImage: `url(${w.image})` } : undefined}
            >
              <md-ripple />
              <md-focus-ring />
              {hasImage ? (
                <div className="slide-overlay">
                  <div>
                    <span className="slide-tag">{w.tag}</span>
                    <h3 className="slide-title">{w.title}</h3>
                    <p className="body">{w.desc}</p>
                  </div>
                  {w.url && <span className="slide-go">View work <Icon name="arrow_outward" /></span>}
                </div>
              ) : (
                <>
                  <div>
                    <span className="slide-tag">{w.tag}</span>
                    <h3 className="slide-title">{w.title}</h3>
                    <p className="body">{w.desc}</p>
                  </div>
                  {w.url && <span className="slide-go">View work <Icon name="arrow_outward" /></span>}
                </>
              )}
            </Tag>
          );
        })}
      </div>

      <div className="row" style={{ marginTop: 24 }}>
        <md-filled-button trailing-icon onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}>
          View full portfolio<Icon name="arrow_forward" slot="icon" />
        </md-filled-button>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="wrap section reveal" id="experience">
      <p className="label">Experience</p>
      <h2 className="headline">Where I've worked</h2>
      <div className="exp">
        {experience.map((r) => (
          <div key={r.when + r.org}>
            <md-divider />
            <div className="role">
              <span className="body muted">{r.when}</span>
              <div>
                <h3 className="title">{r.title} <span className="muted">· {r.org}</span></h3>
                <p className="body muted">{r.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <md-chip-set style={{ marginTop: 32 }}>
        {skills.map((s) => <md-assist-chip key={s} label={s} />)}
      </md-chip-set>
    </section>
  );
}

function Education() {
  return (
    <section className="wrap section reveal" id="education">
      <div className="edu-grid">
        <div>
          <p className="label">Education</p>
          <h2 className="headline">Academic background</h2>
          <ul className="edu-list">
            {education.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <div>
          <p className="label">Certification</p>
          <h2 className="headline">Professional development</h2>
          <ul className="edu-list">
            {certification.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
        <div>
          <p className="label">Publications</p>
          <h2 className="headline">Books</h2>
          <ul className="edu-list">
            {publications.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="wrap reveal-scale" id="contact">
      <div className="contact">
        <h2 className="headline">Let's work together.</h2>
        <p className="body">Have a project, a campaign, or a brief that needs the right words? I'd love to hear from you.</p>
        <md-filled-button href={`mailto:${profile.email}`} trailing-icon>
          Email me<Icon name="mail" slot="icon" />
        </md-filled-button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap footer">
      <span>&copy; {new Date().getFullYear()} {profile.name}</span>
      <span>
        <md-text-button href={`mailto:${profile.email}`}>
          <Icon name="mail" slot="icon" />Email
        </md-text-button>
        <md-text-button href={profile.linkedin} target="_blank">
          <Icon name="open_in_new" slot="icon" />LinkedIn
        </md-text-button>
      </span>
    </footer>
  );
}

function HomePage() {
  useReveal();
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Proof />
        <About />
        <Services />
        <WorkCarousel />
        <CaseStudies />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = useRoute();

  if (path === '/portfolio') return <PortfolioPage />;
  return <HomePage />;
}
