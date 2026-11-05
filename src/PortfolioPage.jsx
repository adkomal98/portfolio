import { profile, portfolio } from './data.js';

const Icon = ({ name, slot }) => <md-icon slot={slot}>{name}</md-icon>;

function PortfolioCard({ item }) {
  if (item.static) {
    return (
      <div className="portfolio-card portfolio-card-static" key={item.title}>
        <img className="portfolio-card-static-img" src={item.image} alt={item.title} loading="lazy" />
      </div>
    );
  }
  const Tag = item.url ? 'a' : 'div';
  const linkProps = item.url
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  return (
    <Tag className="portfolio-card" {...linkProps}>
      <md-ripple />
      <md-focus-ring style={{ '--md-focus-ring-shape': '20px' }} />
      {item.image && (
        <img className="portfolio-card-thumb" src={item.image} alt={item.title} loading="lazy" style={item.imgPos ? { objectPosition: item.imgPos } : undefined} />
      )}
      <div className="portfolio-card-body">
        <div>
          <span className="slide-tag">{item.type}</span>
          <h3 className="portfolio-card-title">{item.title}</h3>
          <p className="body">{item.desc}</p>
        </div>
        {item.url && (
          <span className="slide-go">View work <Icon name="arrow_outward" /></span>
        )}
      </div>
    </Tag>
  );
}

function PortfolioSection({ group, compact }) {
  return (
    <div className={compact ? 'portfolio-section-compact' : 'wrap portfolio-section'} key={group.brand}>
      <div className="portfolio-section-head">
        <div>
          <h2 className={compact ? 'title' : 'headline'}>{group.brand}</h2>
          <p className="body muted">{group.desc}</p>
        </div>
      </div>
      <div className="portfolio-grid">
        {group.items.map((item) => (
          <PortfolioCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

function buildLayout(groups) {
  const layout = [];
  let i = 0;
  while (i < groups.length) {
    const g = groups[i];
    if (g.items.length <= 2 && i + 1 < groups.length && groups[i + 1].items.length <= 2) {
      const pair = [g, groups[i + 1]];
      layout.push({ type: 'pair', groups: pair });
      i += 2;
    } else {
      layout.push({ type: 'single', group: g });
      i += 1;
    }
  }
  return layout;
}

export default function PortfolioPage() {
  const layout = buildLayout(portfolio);

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
          <h1 className="display">Full portfolio</h1>
          <p className="lead">
            A collection of work across brands, platforms and content types — from META ads and Twitter campaigns to LinkedIn thought leadership.
          </p>
        </section>

        {layout.map((entry, i) => {
          if (entry.type === 'pair') {
            return (
              <section className="wrap portfolio-pair" key={entry.groups[0].brand}>
                {entry.groups.map((g) => (
                  <PortfolioSection group={g} compact key={g.brand} />
                ))}
              </section>
            );
          }
          return (
            <PortfolioSection group={entry.group} key={entry.group.brand} />
          );
        })}
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
