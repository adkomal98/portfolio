// All site content lives here.

export const profile = {
  name: 'Komal Bhatia',
  role: 'Content Writer & Copywriter',
  city: 'Delhi',
  headline: 'Words that make complex ideas easy to act on.',
  intro:
    '5+ years writing brand, PR, SEO and UX content for humanitarian, tech, health and consumer brands. Currently Marketing Copywriter at UNICEF India.',
  email: 'ad.komal98@gmail.com',
  linkedin: 'https://linkedin.com/in/komaladlakha',
  deck: 'https://docs.google.com/presentation/d/1nbeDPmXqfvIKYQK660XIuxquLniyN-wuIVbexbqglC4/edit?usp=sharing',
  // Put a photo in /public (e.g. photo.jpg) and set photo: '/photo.jpg'
  photo: '/photo.jpg',
};

export const workedWith = ['UNICEF India', 'BCW', 'MSL · Publicis', 'Sagacious IP'];

export const about = [
  "I turn everything from financial products to cybersecurity into stories people actually want to read. My work spans campaign strategy, SEO content, PR, UX microcopy and tone-of-voice systems.",
  "I've worked in agencies, newsrooms and in-house teams, so I'm comfortable with briefs, clients, deadlines and cross-functional collaboration.",
];
export const languages = 'Hindi (native) · English · French';

export const services = [
  { icon: 'campaign', title: 'Brand & PR content', text: 'Campaign messaging, leadership articles, social content, and tone-of-voice guides.' },
  { icon: 'search', title: 'SEO & web copy', text: 'Website copy, blogs and search ads written to rank, read well and convert.' },
  { icon: 'edit_note', title: 'UX writing', text: 'CTAs, onboarding flows, tooltips and microcopy that guide users clearly.' },
];

export const work = [
  { tag: 'META Ad', title: 'UNICEF India — Fundraising campaign', desc: 'Copy for META ad creatives supporting UNICEF India fundraising and donor engagement.', url: 'https://drive.google.com/file/d/1PXb2FgtNU9bJxFJpdo00DlM1V2nBNHLX/view?usp=sharing', image: '/work/unicef-1.jpg' },
  { tag: 'Social', title: 'BMGF — Twitter content', desc: 'Social posts for the Gates Foundation India handle on public health topics.', url: 'https://x.com/GatesIndia/status/1500109020061143040', image: '/work/bmgf-1.jpg' },
  { tag: 'LinkedIn', title: 'Sagacious IP — Thought leadership', desc: 'LinkedIn content positioning Sagacious IP in intellectual property services.', url: 'https://lnkd.in/p/dq4-wPnz', image: '/work/sagacious_ip_though_leadership.png' },
  { tag: 'LinkedIn', title: 'Hero Electric — Executive comms', desc: 'Ghostwritten LinkedIn posts on EV policy, partnerships and industry vision.', url: 'https://www.linkedin.com/posts/nmunjal_battrixx-partners-with-hero-electric-launches-activity-7001100388443541504-3KLw', image: '/work/hero_electric.jpeg' },
  { tag: 'LinkedIn', title: 'NDA — Legal insights', desc: 'LinkedIn content on media, entertainment and regulatory developments.', url: 'https://www.linkedin.com/posts/nishith-desai-associates_mediaandentertainment-entertainmentindustry-activity-7061996177902247936-wX8k', image: '/work/nishith_desai-1.jpeg' },
];

export const experience = [
  { when: 'Feb 2026 – Present', title: 'Marketing Copywriter', org: 'UNICEF India', text: 'Fundraising campaigns, donor communications and digital content, plus landing page copy and UX microcopy.' },
  { when: 'Oct 2023 – Mar 2024', title: 'Senior Business Content Writer', org: 'Sagacious IP', text: 'Social content, capability decks, SOPs and editorial trackers.' },
  { when: 'Apr 2022 – Oct 2023', title: 'Senior Copywriter', org: 'Genesis BCW', text: 'PR content, social campaigns, leadership articles and messaging frameworks for top-tier clients.' },
  { when: 'Aug 2021 – Mar 2022', title: 'Management Trainee', org: 'MSL India (Publicis Groupe)', text: 'BTL and PR content, digital sentiment monitoring and trend research.' },
  { when: 'Freelance', title: 'Brand, UX & editorial writing', org: 'SecureLayer7 · Sensfrx.ai · Inkspeak Creative · Firstpost · Proactive For Her', text: 'Cybersecurity and AI messaging, brand and UX copy, tech journalism, and SEO health-tech blogs.' },
];

export const skills = [
  'Content strategy', 'Copywriting', 'Brand storytelling', 'PR content', 'SEO', 'UX writing',
  'Technical writing', 'Social media', 'Tone of voice', 'WordPress', 'Figma', 'Meltwater',
];

// Full portfolio grouped by brand, shown on the /portfolio page.
// 41 items from the portfolio deck.
export const portfolio = [
  {
    brand: 'UNICEF India',
    desc: 'Digital fundraising and donor engagement campaigns.',
    items: [
      { type: 'META Ad', title: 'Fundraising campaign creative — Ad 1', desc: 'Copy for META ad creatives supporting fundraising and donor engagement.', url: 'https://drive.google.com/file/d/1PXb2FgtNU9bJxFJpdo00DlM1V2nBNHLX/view?usp=sharing', image: '/work/unicef-1.jpg' },
      { type: 'META Static', title: 'Fundraising static — 1', image: '/work/unicef-static-1.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 2', image: '/work/unicef-static-2.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 3', image: '/work/unicef-static-3.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 4', image: '/work/unicef-static-4.png', static: true },
      { type: 'META Static', title: 'Fundraising static — 5', image: '/work/unicef-static-5.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 6', image: '/work/unicef-static-6.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 7', image: '/work/unicef-static-7.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 8', image: '/work/unicef-static-8.jpeg', static: true },
      { type: 'META Static', title: 'Fundraising static — 9', image: '/work/unicef-static-9.jpeg', static: true },
    ],
  },
  {
    brand: 'Bill & Melinda Gates Foundation',
    desc: 'Social media content on public health and development.',
    items: [
      { type: 'Twitter', title: 'Public health awareness post', desc: 'Social post on health and development topics.', url: 'https://x.com/GatesIndia/status/1500109020061143040', image: '/work/bmgf-1.jpg' },
      { type: 'Twitter', title: 'Development sector engagement', desc: 'Post highlighting development initiatives.', url: 'https://x.com/GatesIndia/status/1492345258239475714', image: '/work/bmgf-2.jpg' },
      { type: 'Twitter', title: 'Impact storytelling', desc: 'Post connecting policy outcomes with progress.', url: 'https://x.com/GatesIndia/status/1485479603632488448', image: '/work/bmgf-3.jpg' },
    ],
  },
  {
    brand: 'Sagacious IP',
    desc: 'Thought leadership and brand positioning on LinkedIn.',
    items: [
      { type: 'LinkedIn', title: 'Thought leadership — IP services', desc: 'LinkedIn content on intellectual property services.', url: 'https://lnkd.in/p/dq4-wPnz', image: '/work/sagacious_ip_though_leadership.png' },
      { type: 'LinkedIn', title: 'Industry insights post', desc: 'Post showcasing sector expertise.', url: 'https://lnkd.in/p/dzyq5thh', image: '/work/sagacious-2.jpeg' },
    ],
  },
  {
    brand: 'Hero Electric',
    desc: 'Executive communications and EV industry thought leadership.',
    items: [
      { type: 'LinkedIn', title: 'Partnership announcement — Battrixx', desc: 'Post on Battrixx partnership and EV battery launches.', url: 'https://www.linkedin.com/posts/nmunjal_battrixx-partners-with-hero-electric-launches-activity-7001100388443541504-3KLw', image: '/work/hero_electric.jpeg' },
      { type: 'LinkedIn', title: 'EV policy update — Haryana', desc: 'Post on Haryana EV policy notification.', url: 'https://www.linkedin.com/posts/nmunjal_haryana-shares-notification-on-ev-policy-activity-7001469993456427008-ZcL9', image: '/work/hero_electric-2.png' },
      { type: 'LinkedIn', title: 'India EV potential', desc: 'Post positioning India as a global EV leader.', url: 'https://www.linkedin.com/posts/nmunjal_india-has-the-potential-to-become-a-world-activity-7003225903216377856-nMZC', image: '/work/hero_electric-3.png' },
    ],
  },
  {
    brand: 'Nishith Desai Associates',
    desc: 'Legal and regulatory content on LinkedIn.',
    items: [
      { type: 'LinkedIn', title: 'Media & entertainment insights', desc: 'Content on media and regulatory developments.', url: 'https://www.linkedin.com/posts/nishith-desai-associates_mediaandentertainment-entertainmentindustry-activity-7061996177902247936-wX8k', image: '/work/nishith_desai-1.jpeg' },
      { type: 'LinkedIn', title: 'AI regulatory insights', desc: 'Post on AI and regulatory implications.', url: 'https://www.linkedin.com/posts/nishith-desai-associates_ai-artificialintelligence-generativeai-activity-7062299060342300672-HPKF', image: '/work/nisith_desai-2.jpeg' },
    ],
  },
  {
    brand: 'Amdocs',
    desc: 'Leadership voice articles in national business publications.',
    items: [
      { type: 'Feature Article', title: 'Employee-centric workplaces', desc: 'How employee-centric workplaces define the future of work.', url: 'https://hr.economictimes.indiatimes.com/news/workplace-4-0/employee-engagement/how-employee-centric-workplace-will-define-the-future-of-work/95391050', image: '/work/amdocs-1.jpg' },
      { type: 'Feature Article', title: 'OTT streaming evolution', desc: 'How OTT platforms evolve through a streaming slowdown.', url: 'https://www.financialexpress.com/business/brandwagon-streaming-slowdown-how-otts-are-expected-to-go-through-an-evolution-2776183/', image: '/work/amdocs-2.jpg' },
      { type: 'Feature Article', title: 'Paradox of choices', desc: 'Are too many choices a good thing for consumers?', url: 'https://archive.adgully.com/paradox-of-choices-are-too-many-choices-a-good-thing-129349.html', image: '/work/amdocs-3.jpg' },
      { type: 'Feature Article', title: 'Green telecom networks', desc: 'Building sustainable telecom operations.', url: 'https://cxotoday.com/corner-office/building-green-telecom-networks-sustainable-operations-can-we-achieve-both/' },
    ],
  },
  {
    brand: 'Cornerstone',
    desc: 'Leadership voice on talent development architecture.',
    items: [
      { type: 'Feature Article', title: 'Future-proof talent development', desc: 'Reimagining talent development for scale and stability.', url: 'https://timesofindia.indiatimes.com/blogs/voices/reimagine-a-future-proof-talent-development-architecture-that-is-built-for-scale-stability-and-reliability/', image: '/work/cornerstone.jpg' },
    ],
  },
  {
    brand: 'realme',
    desc: 'Leadership articles on tech, innovation and digital trends.',
    items: [
      { type: 'Feature Article', title: 'India\'s creator economy', desc: 'The forces driving India\'s creator economy.', url: 'https://everythingexperiential.com/article/india%E2%80%99s-creator-economy-and-the-forces-that-drive-it-456085', image: '/work/realme-1.jpg' },
      { type: 'Feature Article', title: 'Union Budget 2023 and smartphones', desc: 'What the Union Budget may bring for smartphones.', url: 'https://www.businesstoday.in/union-budget/opinion/story/union-budget-2023-may-bring-hope-for-indias-smartphone-industry-heres-why-368369-2023-02-01', image: '/work/realme-2.jpg' },
      { type: 'Feature Article', title: 'ChatGPT and digital transformation', desc: 'How ChatGPT transforms the digital landscape.', url: 'https://telecom.economictimes.indiatimes.com/news/internet/why-is-chatgpt-set-to-transform-the-current-digital-landscape/99436956', image: '/work/realme-3.jpg' },
      { type: 'Feature Article', title: 'Smartphone innovation', desc: 'Next-level innovations in the smartphone space.', url: 'https://www.socialnews.xyz/2023/05/23/realme-transforming-smartphone-landscape-with-next-level-innovations/', image: '/work/realme-4.jpg' },
    ],
  },
  {
    brand: 'Rotary International',
    desc: 'Opinion articles on immunisation and education inclusivity.',
    items: [
      { type: 'Opinion Article', title: 'Partnerships for global immunisation', desc: 'Why partnerships are essential to public health.', url: 'https://www.financialexpress.com/life/headline-partnerships-essential-to-immunization-global-public-health-3069483/lite/', image: '/work/rotary-1.jpg' },
      { type: 'Opinion Article', title: 'Education inclusivity', desc: 'Creating access for underserved learners.', url: 'https://www.news18.com/news/opinion/education-inclusivity-creating-access-for-underserved-and-unreached-learners-6908125.html', image: '/work/rotary-2.jpg' },
    ],
  },
  {
    brand: 'SAP',
    desc: 'Leadership voice on automotive and sustainability.',
    items: [
      { type: 'Feature Article', title: 'Indian automotive\'s green lane', desc: 'Indian automotives driving in the green lane.', url: 'https://www.financialexpress.com/business/express-mobility-will-2023-be-the-year-for-indian-automotives-drive-to-change-gears-and-drive-in-the-green-lane-2993172/', image: '/work/sap.jpg' },
    ],
  },
  {
    brand: 'Kiran Nadar (Shiv Nadar)',
    desc: 'Feature article on bridge as a sport.',
    items: [
      { type: 'Feature Article', title: 'Bridge — pastime to sport', desc: 'Bridge bridging generations as a recognised sport.', url: 'https://www.forbesindia.com/blog/life/bridge-ing-generations-from-old-gen-pastime-to-a-recognised-sport-329507.html', image: '/work/kiran-nadar.jpg' },
    ],
  },
  {
    brand: 'Lohia Global',
    desc: 'Real estate sector entry and investment coverage.',
    items: [
      { type: 'Feature Article', title: 'Rs 1,000 crore real estate entry', desc: 'Entering real estate with Rs 1,000 crore investment.', url: 'https://realty.economictimes.indiatimes.com/news/industry/lohia-global-enters-into-real-estate-sector-with-rs-1000-crore-investment/109626441', image: '/work/lohia.jpg' },
    ],
  },
  {
    brand: 'UClean',
    desc: 'Founder stories and brand features in national media.',
    items: [
      { type: 'Feature Article', title: 'Founder story — CNBCTV18', desc: 'How UClean\'s founder built a laundry startup.', url: 'https://www.cnbctv18.com/startup/ucleans-arunabh-sinha-on-how-he-hit-on-the-idea-of-a-laundry-startup-growth-plans-and-his-biggest-competitor-4612631.htm', image: '/work/uclean-1.jpg' },
      { type: 'Feature Article', title: 'Founder story — The Better India', desc: 'The founders behind UClean laundromat.', url: 'https://thebetterindia.com/323269/arunabh-sinha-gunjan-taneja-started-uclean-laundromat-iron-dhobi-washing-service/', image: '/work/uclean-2.jpg' },
      { type: 'News Feature', title: 'Drone delivery — Skye Air', desc: 'The future of drone delivery in urban India.', url: 'https://www.businesstoday.in/technology/news/story/from-sky-to-doorstep-discussing-the-future-of-drone-delivery-in-urban-india-with-skye-air-ceo-ankit-kumar-432833-2024-06-11', image: '/work/uclean-3.jpg' },
      { type: 'News Feature', title: 'Skye Air traffic management', desc: 'India\'s first traffic management for drones.', url: 'https://yourstory.com/2023/02/gurugram-startup-skye-air-india-first-traffic-management-system-drones' },
    ],
  },
  {
    brand: 'NAREDCO',
    desc: 'Social media content and real estate industry features.',
    items: [
      { type: 'Social Media', title: 'Social campaign — Post 1', desc: 'Multi-platform content on Instagram, LinkedIn and X.', url: 'https://www.instagram.com/p/DWZM5Y_k79x/' },
      { type: 'Social Media', title: 'Social campaign — Post 2', desc: 'Multi-platform content on Instagram, LinkedIn and X.', url: 'https://www.instagram.com/p/DV0yKm2Ewn-/' },
      { type: 'Social Media', title: 'Social campaign — Reel', desc: 'Video content on Instagram, LinkedIn and Facebook.', url: 'https://www.instagram.com/reel/DVfrAKEEeIN/' },
      { type: 'Feature', title: 'Gulf war impact on real estate', desc: 'Real estate feeling the Gulf war impact.', url: 'https://www.fortuneindia.com/amp/story/economy/real-estate-sector-beginning-to-feel-the-impact-of-gulf-war/131397', image: '/work/naredco-feature.jpg' },
    ],
  },
  {
    brand: 'Proactive For Her',
    desc: 'SEO health-tech blogs in a doctor\'s voice.',
    items: [
      { type: 'Blog', title: 'Secrets to ageing gracefully', desc: 'Skincare and ageing, in a doctor\'s voice.', url: 'https://www.proactiveforher.com/blogs/Hair%20and%20Skin%20Care/the-secrets-to-ageing-gracefully/', image: '/work/proactive_her-1.webp' },
      { type: 'Blog', title: 'Foods for healthy skin', desc: 'Foods that contribute to healthy skin.', url: 'https://www.proactiveforher.com/blogs/Hair%20and%20Skin%20Care/foods-that-contribute-to-a-healthy-skin/', image: '/work/proactive_her-2.png' },
    ],
  },
  {
    brand: 'DU Express',
    desc: 'Campus journalism and editorial features.',
    items: [
      { type: 'Feature Article', title: 'DU colleges and salary crisis', desc: '12 DU colleges unable to pay staff salaries.', url: 'https://duexpress.in/12-du-colleges-might-not-be-able-to-pay-salaries-to-staff-members-due-to-the-rift-between-university-delhi-government/', image: '/work/du-1.jpg' },
      { type: 'Feature Article', title: 'UPSC results — DCAC graduate', desc: 'DCAC graduate secures All India Rank 610.', url: 'https://duexpress.in/upsc-results-declared-dcac-graduate-shubham-gupta-secures-all-india-rank-610-women-in-top-25-rank-holders/', image: '/work/du-2.jpg' },
    ],
  },
];
