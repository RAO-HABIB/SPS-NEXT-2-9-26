const db = require('./database');

const HERO_SLIDES = [
  { eyebrow: "What If", title: "Your Business", highlight: "Could Do More?", description: "Modernize legacy systems, enhance identity management, and secure your environment with a managed 24x7 SOC and automated compliance artifacts.", video: "/videos/hero-bg3-hero.avif", webmVideo: "/videos/hero-bg3-hero.webm", poster: "/images/posters/hero-bg3.webp", primaryCta: { label: "Request Consultation", href: "/" }, secondaryCta: { label: "How can we help you today", href: "/" } },
  { eyebrow: "Cybersecurity", title: "Defend. Detect.", highlight: "Respond.", description: "End-to-end protection across networks, identities & data — powered by 24x7 SOC, GRC and Threat Management.", video: "/videos/cybersecurity2-720.avif", webmVideo: "/videos/cybersecurity2.webm", poster: "/images/posters/cybersecurity2.webp", primaryCta: { label: "Explore Security", href: "/" }, secondaryCta: { label: "View Solutions", href: "/" } },
  { eyebrow: "Artificial Intelligence", title: "Smarter Decisions,", highlight: "Faster Outcomes.", description: "Harness AI, Data Science & Automation to unlock insights and accelerate business growth at scale.", video: "/videos/ai1-720.avif", webmVideo: "/videos/ai1.webm", poster: "/images/posters/ai1.webp", primaryCta: { label: "Discover AI", href: "/" }, secondaryCta: { label: "Learn More", href: "/" } },
  { eyebrow: "Cloud Solutions", title: "Scale Without", highlight: "Limits.", description: "Cloud migration, DevOps & modernization services designed for performance, security and cost efficiency.", video: "/videos/cloud1-720.avif", webmVideo: "/videos/cloud1.webm", poster: "/images/posters/cloud1.webp", primaryCta: { label: "View Cloud Services", href: "/" }, secondaryCta: { label: "Learn More", href: "/" } },
];

const SERVICE_TABS = [
  { id: "cybersecurity", icon: "lucide:shield", title: "Cybersecurity", description: "SPS Cybersecurity team has the following practices: Digital Trust (User Security, Data Security, Mobile Device Management), Threat Management (Cybersecurity Program, SIEM systems, Application Security, Network Security), Keysight (Professional Services, Help Desk Services, Security Operations), and SAP Security.", slides: [{ id: "network-security", icon: "lucide:network", title: "Network Security", description: "Network Visibility Operations Services, Network Visibility Design & Implementation Services, and Keysight IxNetwork Training.", href: "/" }, { id: "smaas", icon: "lucide:server", title: "SMaaS", description: "Service Management as a Service, including cloud monitoring and operations solutions.", href: "/" }, { id: "grc", icon: "lucide:shield-check", title: "GRC", description: "Governance, Risk & Compliance solutions for enterprise-wide policies and controls.", href: "/" }, { id: "iam", icon: "lucide:user-check", title: "Identity & Access", description: "Identity & Access Management solutions for secure authentication and authorization.", href: "/" }, { id: "threat-management", icon: "lucide:shield-alert", title: "Threat Management", description: "Threat Management solutions for proactive detection and mitigation of cyber threats.", href: "/" }] },
  { id: "cloud", icon: "lucide:cloud", title: "Cloud", description: "SPS Cloud team offers services in DevOps (CI/CD Pipelines, Automation, Containerization) and Migration Services (Cloud Strategy, Application Migration, Data Migration, Multi-cloud Solutions).", slides: [{ id: "devops", icon: "lucide:git-branch", title: "DevOps", description: "CI/CD pipelines, infrastructure-as-code, and automated release management for faster delivery.", href: "/" }, { id: "migration", icon: "lucide:move", title: "Migration Services", description: "Seamless workload migration to AWS, Azure, GCP, and IBM Cloud with minimal downtime.", href: "/" }, { id: "cloud-ops", icon: "lucide:layers", title: "Cloud Operations", description: "24/7 cloud infrastructure monitoring, cost optimization, and multi-cloud management solutions.", href: "/" }] },
  { id: "ai", icon: "lucide:sparkles", title: "AI & Automation", description: "SPS AI & Automation team offers solutions in Automation (Robotic Process Automation, Workflow Automation) and Data Science (Machine Learning, Predictive Analytics, AI Model Development).", slides: [{ id: "automation", icon: "lucide:zap", title: "Automation", description: "RPA and AI-agent driven automation for repetitive enterprise business workflows at scale.", href: "/" }, { id: "data-science", icon: "lucide:bar-chart-3", title: "Data Science", description: "Predictive analytics, machine learning models, and big data engineering for enterprise insights.", href: "/" }, { id: "gen-ai", icon: "lucide:bot", title: "Generative AI", description: "Custom LLM integrations, retrieval-augmented generation (RAG), and intelligent virtual assistants.", href: "/" }] },
  { id: "collaboration", icon: "lucide:users", title: "Collaboration", description: "Empower distributed teams with unified communication, corporate training, and virtual event platforms for seamless productivity.", slides: [{ id: "events", icon: "lucide:calendar", title: "Events", description: "Virtual, hybrid, and in-person events for product launches, conferences, and customer engagement.", href: "/" }, { id: "training", icon: "lucide:graduation-cap", title: "Training", description: "Enterprise learning and certification programs covering modern cloud and cybersecurity tracks.", href: "/" }] }
];

const STARTUPS_INTRO = { eyebrow: "Our Startups", title: "Digital solutions we have built for ourselves and our customers", description: "We develop AI-based solutions for corporate & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT." };
const STARTUPS = [
  { name: "GateKeyper", description: "Dennis Beam, who held a patent on the safety of heavy equipment, wanted to build an app to ensure safety of professional operators.", image: "/images/startups/gatekeeper.webp", href: "/" },
  { name: "CREyield", description: "CREyield streamlines real estate investment analytics and reporting for better decision-making.", image: "/images/startups/creyield.webp", href: "/" },
  { name: "CSM", description: "CSM enables efficient customer service management with AI-driven insights and automation.", image: "/images/startups/csm.webp", href: "/" },
  { name: "MyHealthChart", description: "MyHealthChart provides patients with an integrated view of their health records and insights.", image: "/images/startups/myhealthcard.webp", href: "/" },
  { name: "Analytics Dashboard", description: "Analytics Dashboard provides actionable insights and visualizations for business decision-making.", image: "/images/startups/dashboard.webp", href: "/" },
  { name: "AIMY", description: "AIMY is an AI-driven personal assistant that helps businesses automate routine tasks efficiently.", image: "/images/startups/aimy.webp", href: "/" },
  { name: "HerDomain", description: "HerDomain is a platform empowering women entrepreneurs with digital tools and resources.", image: "/images/startups/herdomain.webp", href: "/" },
  { name: "Watch Over", description: "Watch Over monitors critical systems and processes, providing real-time alerts and insights.", image: "/images/startups/watchover.webp", href: "/" }
];

const PRODUCTS_INTRO = { eyebrow: "Trusted Innovation", title: "Organization Trusted", highlight: "SPS Products", description: "Enterprise-grade products built on 20+ years of innovation — empowering organizations to secure, automate and accelerate their digital journey.", stat_value: 20, stat_suffix: "+", stat_label: "Years Driving Innovation", image: "/images/products/product.webp" };
const PRODUCTS = [
  { name: "Azalio", description: "Keep your frontline employees happy. Reward employees, track engagement, manage workforce operations.", icon: "lucide:users-round", image: "/images/products/azalio.webp", accentColor: "from-blue-500 to-cyan-400", href: "https://www.azal.io/" },
  { name: "MYID Self Verify", description: "MYID helps organizations allow their employees to manage their corporate identity through secure and easy-to-use mobile application.", icon: "lucide:fingerprint", image: "/images/products/myid.webp", accentColor: "from-cyan-500 to-teal-400", href: "https://www.myidselfverify.com/" },
  { name: "CSM", description: "Protect your business with SOC services, zero-trust security, endpoint defense, and SIEM/SOAR solutions.", icon: "lucide:shield-check", image: "/images/products/csm.webp", accentColor: "from-indigo-500 to-blue-400", href: "/products/sps/csm" },
  { name: "BMS", description: "Get real-time insights into every aspect of your company's performance. Optimize processes and streamline business with our Business Management System.", icon: "lucide:bar-chart-3", image: "/images/products/bms.webp", accentColor: "from-sky-500 to-blue-400", href: "/products/sps/bms" }
];

const HOW_INTRO = {
  title: "How It Works",
  description: "SPS helps organizations accelerate their Digital Transformation journey by adopting Cloud, AI, Cybersecurity, and other emerging technologies through a structured, scalable approach.",
  image: "/images/Hero/we-img1.webp",
  stat_value: 180,
  stat_suffix: "+",
  stat_label: "Expert Specialists",
  stat2_value: 45,
  stat2_suffix: "K",
  stat2_label: "Happy Clients",
  cta: { label: "Book Appointment", href: "/" }
};
const STEPS = [
  { number: "01", icon: "lucide:calendar-clock", title: "Schedule Consultation", description: "Book a free discovery call with our experts to discuss your goals.", image: "/images/Hero/we-img2.webp" },
  { number: "02", icon: "lucide:clipboard-list", title: "Plan & Strategize", description: "We craft a tailored roadmap aligned to your business outcomes.", image: "/images/products/strategy.jpeg" },
  { number: "03", icon: "lucide:rocket", title: "Execute Solutions", description: "Our specialists deliver, integrate and optimize the right technology.", image: "/images/products/ai.jpeg" },
  { number: "04", icon: "lucide:hand-coins", title: "Deliver Results & Payment", description: "Measure outcomes, hand over deliverables and transparent billing.", image: "/images/products/results.jpeg" }
];

const PARTNERS_INTRO = { eyebrow: "Strategic Alliances", title: "Our Technology", highlight: "Partners", description: "We work with world-class technology vendors to deliver secure, scalable, and innovative solutions across Cloud, AI, Cybersecurity, and Enterprise IT." };
const PARTNERS = [
  { name: "IBM Security", logo: "/images/partners/ibm.webp", tagline: "Identity • Access • Zero Trust", description: "Enterprise-grade identity, access management and zero trust security solutions for the modern hybrid workforce.", category: "Cybersecurity", href: "/" },
  { name: "Microsoft", logo: "/images/partners/microsoft.webp", tagline: "Cloud • Security • Productivity", description: "Azure cloud infrastructure, Microsoft 365 productivity and Defender security suite for end-to-end enterprise needs.", category: "Cloud & Productivity", href: "/" },
  { name: "Red Hat", logo: "/images/partners/redhat.webp", tagline: "Open Source Cloud", description: "OpenShift, RHEL and Ansible — open source platforms powering hybrid cloud and automation at scale.", category: "Open Source", href: "/" },
  { name: "SAP", logo: "/images/partners/sap.webp", tagline: "Enterprise Resource Planning", description: "S/4HANA, SuccessFactors and Ariba — intelligent enterprise applications unifying finance, HR and supply chain.", category: "ERP", href: "/" },
  { name: "Lenovo", logo: "/images/partners/lenovo.webp", tagline: "Devices • Infrastructure • Computing", description: "ThinkPad, ThinkSystem servers and edge computing devices powering the modern workplace.", category: "Hardware", href: "/" },
  { name: "Google Cloud", logo: "/images/partners/google.webp", tagline: "Cloud • AI • Data Analytics", description: "GCP, Vertex AI and BigQuery — accelerating cloud-native development and AI-driven analytics.", category: "Cloud & AI", href: "/" },
  { name: "AWS", logo: "/images/partners/aws.webp", tagline: "Scalable Cloud Infrastructure", description: "Amazon Web Services — the world's most comprehensive and broadly adopted cloud platform.", category: "Cloud", href: "/" },
  { name: "Cisco", logo: "/images/partners/cisco.webp", tagline: "Networking & Security", description: "Networking, collaboration and security solutions for connecting and protecting enterprises globally.", category: "Networking", href: "/" }
];

const NEWS_INTRO = { eyebrow: "Insights", title: "Stay Updated With", highlight: "Our Latest News & Insights", cta: { label: "View All", href: "/" } };
const NEWS_ITEMS = [
  { category: "News Update", title: 'Hash Malik at a cloud partner panel discussion — "Succeeding with IBM"', href: "/", image: "/images/news/news1.webp", date: "2026-06-20", readTime: "2 min read", featured: true },
  { category: "IoT Summit", title: "SPS makes a push into IoT through Mars rover demo", href: "/", image: "/images/news/news2.webp", date: "2026-06-12", readTime: "3 min read", featured: false },
  { category: "Expert Opinion", title: "How to Secure & Monitor Your AI Models", href: "/", image: "/images/news/news3.webp", date: "2026-06-05", readTime: "5 min read", featured: false }
];

const CUSTOMERS_INTRO = {
  eyebrow: "Our Clients",
  title: "We have an award-winning team that includes IBM-certified inventors and champions who have won multiple worldwide competitions.",
  highlight: "Trusted by Industry Leaders",
  description: "As an enterprise-class innovator and solution creator with expertise across all phases of product design, development, deployment, security, operations, monitoring, and support, we have been helping our clients build, deploy and secure applications. Our development, quality, cybersecurity, training, operations, monitoring, and support teams work in tandem to create high-performance, secure, reliable, scalable, and manageable systems."
};
const CUSTOMERS = [
  { name: "UNLV", src: "/images/customers/unlv.webp" },
  { name: "IBM", src: "/images/customers/ibm1.webp" },
  { name: "Altria", src: "/images/customers/altria.webp" },
  { name: "County of Spotsylvania", src: "/images/customers/county-of-spotsylvania.webp" },
  { name: "Maryland Judiciary", src: "/images/customers/maryland-judiciary.webp" },
  { name: "Telenor", src: "/images/customers/telenor.webp" },
  { name: "TransUnion", src: "/images/customers/transunion.webp" },
  { name: "Avnet", src: "/images/customers/avnet.webp" },
  { name: "Askari Bank", src: "/images/customers/Askari-Bank4.webp" },
  { name: "Highmark Health", src: "/images/customers/highmark-health.webp" },
  { name: "Virginia", src: "/images/customers/virginia.webp" },
  { name: "Keysight", src: "/images/customers/Keysight.webp" }
];

const VERTICALS_INTRO = { eyebrow: "SPS Verticals", title: "Comprehensive Industry Solutions", highlight: "& Digital Transformation", description: "Tailored, industry-specific solutions built on deep domain expertise — empowering organizations across every sector to lead their digital transformation." };
const VERTICALS = [
  { icon: "lucide:landmark", title: "Public Sector", description: "Now more than ever, governments need to adapt with secure, citizen-centric digital services.", items: ["Government", "Public Safety", "Education", "Healthcare – Mid Atl", "County Government"], href: "/verticals/public-sector", image: "/images/verticals/public.jpg" },
  { icon: "lucide:factory", title: "Industrials", description: "Many industrial enterprises are prime for analytics and automation to drive efficiency.", items: ["Manufacturing", "Textile", "Utilities"], href: "/verticals/industrials", image: "/images/verticals/industrial.jpg" },
  { icon: "lucide:heart-pulse", title: "Healthcare", description: "We support healthcare providers transforming patient experience with secure digital systems.", items: ["Telehealth & Remote Monitoring", "Multi-Clinic Consolidation", "Compliance Requirements", "Patient Experience", "Health Systems Interoperability", "Retail"], href: "/verticals/healthcare", image: "/images/verticals/health.jpg" },
  { icon: "lucide:shopping-bag", title: "Retail", description: "The challenges facing retailers can be overwhelming — we simplify omnichannel transformation.", items: ["Supply Chain", "Marketing / Merchandising", "Personalization & Localization", "Omni-channel Operations", "Convenience Stores"], href: "/verticals/retail", image: "/images/verticals/retail.jpg" },
  { icon: "lucide:bolt", title: "Energy", description: "In today's changing energy landscape, business leaders need agile, data-driven operations.", items: ["Electric", "Oil & Gas"], href: "/verticals/energy", image: "/images/verticals/energy.jpg" },
  { icon: "lucide:banknote", title: "Financial", description: "Financial services firms require real-time modernization to stay competitive and secure.", items: ["Insurance", "Banking"], href: "/verticals/financial", image: "/images/verticals/financial.jpg" },
  { icon: "lucide:radio-tower", title: "Telecommunications", description: "Telecommunications is experiencing a seismic shift — we power next-gen network transformation.", items: ["Telcos"], href: "/verticals/telecom", image: "/images/verticals/telecom.jpg" }
];

function seed() {
  db.exec('DELETE FROM hero_intro');
  db.exec('DELETE FROM hero_slides');
  db.exec('DELETE FROM services');
  db.exec('DELETE FROM startups');
  db.exec('DELETE FROM products');
  db.exec('DELETE FROM howitworks');
  db.exec('DELETE FROM partners');
  db.exec('DELETE FROM newsinsights');
  db.exec('DELETE FROM customers');
  db.exec('DELETE FROM verticals');
  db.exec('DELETE FROM section_intros');

  // Insert Hero Intro
  const heroIntro = db.prepare('INSERT INTO hero_intro (id, eyebrow, title, highlight, description, primary_cta_label, primary_cta_href, secondary_cta_label, secondary_cta_href) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?)');
  heroIntro.run(HERO_SLIDES[0].eyebrow, HERO_SLIDES[0].title, HERO_SLIDES[0].highlight, HERO_SLIDES[0].description, HERO_SLIDES[0].primaryCta.label, HERO_SLIDES[0].primaryCta.href, HERO_SLIDES[0].secondaryCta.label, HERO_SLIDES[0].secondaryCta.href);

  // ✅ Hero Slides — s.video use karo (videos chalengi)
  const insertHeroSlide = db.prepare('INSERT INTO hero_slides (category_label, title, highlight, description, background_image, order_index) VALUES (?, ?, ?, ?, ?, ?)');
  HERO_SLIDES.forEach((s, i) => {
    insertHeroSlide.run(s.eyebrow, s.title, s.highlight, s.description, s.video, i);
  });

  // Services
  const insertService = db.prepare('INSERT INTO services (tab_name, tab_description, slides, order_index) VALUES (?, ?, ?, ?)');
  SERVICE_TABS.forEach((s, i) => {
    insertService.run(s.title, s.description, JSON.stringify(s.slides), i);
  });

  // Startups
  const insertStartup = db.prepare('INSERT INTO startups (name, description, image, href, order_index) VALUES (?, ?, ?, ?, ?)');
  STARTUPS.forEach((s, i) => insertStartup.run(s.name, s.description, s.image, s.href, i));

  // Products
  const insertProduct = db.prepare('INSERT INTO products (name, description, icon, image, accentColor, href, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)');
  PRODUCTS.forEach((p, i) => insertProduct.run(p.name, p.description, p.icon, p.image, p.accentColor, p.href, i));

  // HowItWorks
  const insertHowItWorks = db.prepare('INSERT INTO howitworks (number, icon, title, description, image, order_index) VALUES (?, ?, ?, ?, ?, ?)');
  STEPS.forEach((s, i) => insertHowItWorks.run(s.number, s.icon, s.title, s.description, s.image, i));

  // Partners
  const insertPartner = db.prepare('INSERT INTO partners (name, logo, tagline, description, category, href, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)');
  PARTNERS.forEach((p, i) => insertPartner.run(p.name, p.logo, p.tagline, p.description, p.category, p.href, i));

  // News
  const insertNews = db.prepare('INSERT INTO newsinsights (category, title, href, image, date, readTime, featured, order_index) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
  NEWS_ITEMS.forEach((n, i) => insertNews.run(n.category, n.title, n.href, n.image, n.date, n.readTime, n.featured ? 1 : 0, i));

  // Customers
  const insertCustomer = db.prepare('INSERT INTO customers (name, src, order_index) VALUES (?, ?, ?)');
  CUSTOMERS.forEach((c, i) => insertCustomer.run(c.name, c.src, i));

  // Verticals
  const insertVertical = db.prepare('INSERT INTO verticals (icon, title, description, items, href, image, order_index) VALUES (?, ?, ?, ?, ?, ?, ?)');
  VERTICALS.forEach((v, i) => insertVertical.run(v.icon, v.title, v.description, JSON.stringify(v.items), v.href, v.image, i));

  // Section Intros — with stat2 columns
  const insertIntro = db.prepare(`
    INSERT INTO section_intros
      (section, eyebrow, title, highlight, description, stat_value, stat_suffix, stat_label, stat2_value, stat2_suffix, stat2_label, image, cta_label, cta_href)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertIntro.run('startups', STARTUPS_INTRO.eyebrow, STARTUPS_INTRO.title, null, STARTUPS_INTRO.description, null, null, null, null, null, null, null, null, null);
  insertIntro.run('products', PRODUCTS_INTRO.eyebrow, PRODUCTS_INTRO.title, PRODUCTS_INTRO.highlight, PRODUCTS_INTRO.description, PRODUCTS_INTRO.stat_value, PRODUCTS_INTRO.stat_suffix, PRODUCTS_INTRO.stat_label, null, null, null, PRODUCTS_INTRO.image, null, null);
  insertIntro.run('howitworks', null, HOW_INTRO.title, null, HOW_INTRO.description, HOW_INTRO.stat_value, HOW_INTRO.stat_suffix, HOW_INTRO.stat_label, HOW_INTRO.stat2_value, HOW_INTRO.stat2_suffix, HOW_INTRO.stat2_label, HOW_INTRO.image, HOW_INTRO.cta.label, HOW_INTRO.cta.href);
  insertIntro.run('partners', PARTNERS_INTRO.eyebrow, PARTNERS_INTRO.title, PARTNERS_INTRO.highlight, PARTNERS_INTRO.description, null, null, null, null, null, null, null, null, null);
  insertIntro.run('newsinsights', NEWS_INTRO.eyebrow, NEWS_INTRO.title, NEWS_INTRO.highlight, null, null, null, null, null, null, null, null, NEWS_INTRO.cta.label, NEWS_INTRO.cta.href);
  insertIntro.run('customers', CUSTOMERS_INTRO.eyebrow, CUSTOMERS_INTRO.title, CUSTOMERS_INTRO.highlight, CUSTOMERS_INTRO.description, null, null, null, null, null, null, null, null, null);
  insertIntro.run('verticals', VERTICALS_INTRO.eyebrow, VERTICALS_INTRO.title, VERTICALS_INTRO.highlight, VERTICALS_INTRO.description, null, null, null, null, null, null, null, null, null);

  console.log("Database seeded successfully!");
}

seed();