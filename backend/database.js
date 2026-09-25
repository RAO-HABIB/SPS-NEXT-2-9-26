const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// ✅ Env-based DB path — Render disk mount pe point karega
const DB_PATH = process.env.DB_PATH || path.resolve(__dirname, 'database.sqlite');

// Ensure directory exists (Render disk mount fresh ho sakta hai)
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(DB_PATH, { verbose: console.log });

db.pragma('foreign_keys = ON');

function initDb() {
  // Users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      name TEXT,
      profile_picture TEXT,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Sessions
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      token TEXT UNIQUE NOT NULL,
      expires_at DATETIME,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );
  `);

  // Hero (single row)
  db.exec(`
    CREATE TABLE IF NOT EXISTS hero (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      heading TEXT,
      subheading TEXT,
      button_text TEXT,
      image_url TEXT
    );
  `);

  // Section Intros
  db.exec(`
    CREATE TABLE IF NOT EXISTS section_intros (
      section TEXT PRIMARY KEY,
      eyebrow TEXT,
      title TEXT,
      highlight TEXT,
      description TEXT,
      stat_value INTEGER,
      stat_suffix TEXT,
      stat_label TEXT,
      image TEXT,
      cta_label TEXT,
      cta_href TEXT
    );
  `);

  // ✅ Safe migration: stat2 columns
  try { db.exec(`ALTER TABLE section_intros ADD COLUMN stat2_value INTEGER`); } catch (e) { }
  try { db.exec(`ALTER TABLE section_intros ADD COLUMN stat2_suffix TEXT`); } catch (e) { }
  try { db.exec(`ALTER TABLE section_intros ADD COLUMN stat2_label TEXT`); } catch (e) { }

  // Hero Static Left
  db.exec(`
    CREATE TABLE IF NOT EXISTS hero_intro (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      eyebrow TEXT,
      title TEXT,
      highlight TEXT,
      description TEXT,
      primary_cta_label TEXT,
      primary_cta_href TEXT,
      secondary_cta_label TEXT,
      secondary_cta_href TEXT
    );
  `);

  // Hero Slides
  db.exec(`
    CREATE TABLE IF NOT EXISTS hero_slides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_label TEXT,
      title TEXT,
      highlight TEXT,
      description TEXT,
      background_image TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Services
  db.exec(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tab_name TEXT,
      tab_description TEXT,
      slides TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Startups
  db.exec(`
    CREATE TABLE IF NOT EXISTS startups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      image TEXT,
      href TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Products
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      icon TEXT,
      image TEXT,
      accentColor TEXT,
      href TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // How It Works
  db.exec(`
    CREATE TABLE IF NOT EXISTS howitworks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number TEXT,
      icon TEXT,
      title TEXT,
      description TEXT,
      image TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Partners
  db.exec(`
    CREATE TABLE IF NOT EXISTS partners (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      logo TEXT,
      tagline TEXT,
      description TEXT,
      category TEXT,
      href TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // News & Insights
  db.exec(`
    CREATE TABLE IF NOT EXISTS newsinsights (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT,
      title TEXT,
      href TEXT,
      image TEXT,
      date TEXT,
      readTime TEXT,
      featured BOOLEAN DEFAULT 0,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Customers
  db.exec(`
    CREATE TABLE IF NOT EXISTS customers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      src TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Verticals
  db.exec(`
    CREATE TABLE IF NOT EXISTS verticals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      icon TEXT,
      title TEXT,
      description TEXT,
      items TEXT,
      href TEXT,
      image TEXT,
      order_index INTEGER DEFAULT 0
    );
  `);

  // Default Hero row
  const heroCount = db.prepare('SELECT COUNT(*) AS count FROM hero').get();
  if (heroCount.count === 0) {
    db.prepare(`
      INSERT INTO hero (id, heading, subheading, button_text, image_url)
      VALUES (1, 'Welcome to SPS', 'Empowering your business', 'Get Started', '')
    `).run();
  }

  console.log('Database initialized at:', DB_PATH);
}

initDb();

module.exports = db;