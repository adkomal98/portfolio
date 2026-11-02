import { useEffect, useRef, useState } from 'react';
import {
  profile, workedWith, about, languages, services, work, experience, skills,
} from './data.js';
import PortfolioPage from './PortfolioPage.jsx';

const Icon = ({ name, slot }) => <md-icon slot={slot}>{name}</md-icon>;

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
          <md-filled-tonal-button href="#contact">Contact</md-filled-tonal-button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <p className="label">{profile.role} · {profile.city}</p>
      <h1 className="display">{profile.headline}</h1>
      <p className="lead">{profile.intro}</p>
      <div className="row">
        <md-filled-button href="#work" trailing-icon>
          See my work<Icon name="arrow_downward" slot="icon" />
        </md-filled-button>
        <md-filled-tonal-button href="#contact">Get in touch</md-filled-tonal-button>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="proof wrap" aria-label="Worked with">
      <span className="label">Worked with</span>
      {workedWith.map((n) => <span className="pill" key={n}>{n}</span>)}
    </section>
  );
}

function About() {
  return (
    <section className="wrap section about" id="about">
      <div className="avatar">
        {profile.photo ? <img src={profile.photo} alt={profile.name} /> : profile.name.split(' ').map((w) => w[0]).join('')}
      </div>
      <div>
        <p className="label">About</p>
        <h2 className="headline">Clear, on-brand, and built to convert.</h2>
        {about.map((p) => <p className="body" key={p}>{p}</p>)}
        <p className="body muted">{languages}</p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="wrap section">
      <p className="label">What I do</p>
      <h2 className="headline">Key services</h2>
      <div className="services">
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

function Work() {
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

  const tones = ['primary', 'secondary', 'tertiary'];

  return (
    <section className="wrap section" id="work">
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
        {work.map((w, i) => {
          const Tag = w.url ? 'a' : 'div';
          const props = w.url ? { href: w.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          const hasImage = !!w.image;
          return (
            <Tag
              className={`slide ${hasImage ? 'slide-img' : `tone-${tones[i % 3]}`}`}
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
    <section className="wrap section" id="experience">
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

function Contact() {
  return (
    <section className="wrap" id="contact">
      <div className="contact">
        <h2 className="headline">Have a project in mind?</h2>
        <p className="body">Let's talk about what your brand needs to say.</p>
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
      <span>© {new Date().getFullYear()} {profile.name}</span>
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
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Proof />
        <About />
        <Services />
        <Work />
        <Experience />
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
