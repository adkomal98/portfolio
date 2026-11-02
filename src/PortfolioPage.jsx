import { profile, portfolio } from './data.js';

const Icon = ({ name, slot }) => <md-icon slot={slot}>{name}</md-icon>;



export default function PortfolioPage() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href="/">{profile.name}</a>
          <nav>
            <md-text-button href="/">Home</md-text-button>
            <md-filled-tonal-button href="/#contact">Contact</md-filled-tonal-button>
          </nav>
        </div>
      </header>

      <main>
        <section className="wrap portfolio-hero">
          <md-text-button href="/" className="back-link">
            <Icon name="arrow_back" slot="icon" />Back to home
          </md-text-button>
          <h1 className="display">Full portfolio</h1>
          <p className="lead">
            A collection of work across brands, platforms and content types — from META ads and Twitter campaigns to LinkedIn thought leadership.
          </p>
        </section>

        {portfolio.map((group, gi) => (
          <section className="wrap portfolio-section" key={group.brand}>
            <div className="portfolio-section-head">
              <div>
                <h2 className="headline">{group.brand}</h2>
                <p className="body muted">{group.desc}</p>
              </div>
            </div>

            <div className="portfolio-grid">
              {group.items.map((item, ii) => {
                const Tag = item.url ? 'a' : 'div';
                const linkProps = item.url
                  ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
                  : {};
                const hasImage = !!item.image;
                return (
                  <Tag
                    className={`portfolio-card ${hasImage ? 'slide-img' : 'card-neutral'}`}
                    key={item.title}
                    {...linkProps}
                    style={hasImage ? { backgroundImage: `url(${item.image})` } : undefined}
                  >
                    <md-ripple />
                    <md-focus-ring />
                    {hasImage ? (
                      <div className="slide-overlay">
                        <div>
                          <span className="slide-tag">{item.type}</span>
                          <h3 className="portfolio-card-title">{item.title}</h3>
                          <p className="body">{item.desc}</p>
                        </div>
                        {item.url && (
                          <span className="slide-go">View work <Icon name="arrow_outward" /></span>
                        )}
                      </div>
                    ) : (
                      <>
                        <div>
                          <span className="slide-tag">{item.type}</span>
                          <h3 className="portfolio-card-title">{item.title}</h3>
                          <p className="body">{item.desc}</p>
                        </div>
                        {item.url && (
                          <span className="slide-go">View work <Icon name="arrow_outward" /></span>
                        )}
                      </>
                    )}
                  </Tag>
                );
              })}
            </div>
          </section>
        ))}
      </main>

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
    </>
  );
}
