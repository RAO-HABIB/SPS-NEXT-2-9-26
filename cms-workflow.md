# Complete Workflow — Next.js CMS + Node.js Backend + SQLite + OAuth Login

---

## Big Picture Architecture

```
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────┐
│  Next.js Front  │────▶│  Node.js Backend API  │────▶│  SQLite DB  │
│                 │     │                       │     │             │
│ - Homepage      │     │ - Auth Routes         │     │ - users     │
│ - Admin Panel   │     │ - Content Routes      │     │ - sessions  │
│ - OAuth Login   │     │ - Upload Routes       │     │ - hero      │
└─────────────────┘     └──────────────────────┘     │ - services  │
                                                       │ - etc...    │
                                                       └─────────────┘
```

---

## Folder Structure

```
your-project/
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   │   └── page.tsx                  # Homepage (Server Component — fetches from API)
│   │   ├── admin/
│   │   │   ├── login/page.tsx            # OAuth Login Page
│   │   │   ├── dashboard/page.tsx        # Admin Dashboard
│   │   │   ├── hero/page.tsx
│   │   │   ├── services/page.tsx
│   │   │   ├── startups/page.tsx
│   │   │   ├── products/page.tsx
│   │   │   ├── howitworks/page.tsx
│   │   │   ├── partners/page.tsx
│   │   │   ├── newsinsights/page.tsx
│   │   │   ├── customers/page.tsx
│   │   │   └── verticals/page.tsx
│   │   └── middleware.ts                 # Auth check on all /admin/* routes
│   │
│   ├── components/
│   │   └── (existing components — now accept props instead of hardcoded data)
│   │
│   └── features/
│       ├── Hero/                         # <Hero />
│       ├── Services/                     # <Services />
│       ├── Startups/                     # <Startups />
│       ├── Products/                     # <Products />
│       ├── HowItWorks/                   # <HowItWorks />
│       ├── Partners/                     # <Partners />
│       ├── NewsInsights/                 # <NewsInsights />
│       ├── Customers/                    # <Customers />
│       └── Verticals/                    # <Verticals />
│
├── backend/
│   ├── server.js                         # Express entry point
│   ├── database.js                       # SQLite connection + table creation + seeding
│   ├── middleware/
│   │   └── authMiddleware.js             # JWT verify middleware
│   ├── routes/
│   │   ├── auth.js                       # OAuth routes
│   │   ├── upload.js                     # Image upload
│   │   ├── hero.js
│   │   ├── services.js
│   │   ├── startups.js
│   │   ├── products.js
│   │   ├── howitworks.js
│   │   ├── partners.js
│   │   ├── newsinsights.js
│   │   ├── customers.js
│   │   └── verticals.js
│   ├── uploads/                          # Stored image files
│   └── .env                              # Secrets (Google Client ID/Secret, JWT Secret)
│
└── package.json
```

---

## PART 1 — Authentication Flow (Google OAuth)

### Step 1 — OAuth Provider Setup

- Go to **Google Cloud Console** → Create a new project
- Enable **Google OAuth 2.0**
- Get your **Client ID** and **Client Secret**
- Store them in `backend/.env`
- Register Redirect URI: `http://localhost:5000/api/auth/google/callback`

---

### Step 2 — Login Flow (Step by Step)

```
User visits /admin/*
      ↓
Next.js middleware.ts checks — is there a valid JWT cookie?
      ↓
NO → Redirect to /admin/login
      ↓
Login page shows "Login with Google" button
      ↓
Button click → hits backend GET /api/auth/google
      ↓
Backend generates Google OAuth consent URL
      ↓
User is redirected to Google → grants permission
      ↓
Google redirects back → GET /api/auth/google/callback
      ↓
Backend receives authorization code from Google
      ↓
Backend exchanges code for Access Token (with Google)
      ↓
Backend fetches user info from Google (email, name, picture)
      ↓
Check: Is this email in the SQLite `users` table?
      ↓
├── NO  → Create new user record (or reject if not whitelisted)
└── YES → Continue
      ↓
Backend creates a JWT Token (contains user id + role)
      ↓
JWT is set as an HttpOnly Cookie in the response
      ↓
User is redirected to /admin/dashboard ✅
```

---

### Step 3 — Protected Route Check (Every Admin Page)

```
User visits any /admin/* page
      ↓
Next.js middleware.ts intercepts the request
      ↓
Reads JWT from cookie
      ↓
Sends token to backend → GET /api/auth/me (verify)
      ↓
├── Valid Token   → Allow access, render page
└── Invalid/Expired → Clear cookie, redirect to /admin/login
```

---

### Step 4 — Logout Flow

```
Admin clicks "Logout"
      ↓
Frontend hits → POST /api/auth/logout
      ↓
Backend clears the session from SQLite sessions table
      ↓
Cookie is cleared from browser
      ↓
User redirected to /admin/login ✅
```

---

### Step 5 — SQLite Auth Tables

```
TABLE: users
─────────────────────────────────────
id               INTEGER PRIMARY KEY
email            TEXT UNIQUE
name             TEXT
profile_picture  TEXT
role             TEXT  (admin / viewer)
created_at       DATETIME

TABLE: sessions
─────────────────────────────────────
id               INTEGER PRIMARY KEY
user_id          INTEGER (FK → users.id)
token            TEXT
expires_at       DATETIME
```

---

## PART 2 — Content Management Flow

### Sections from Your Project

| Page Order | Section      | DB Table      | Type       |
|------------|--------------|---------------|------------|
| 1          | Hero         | hero          | Single Row |
| 2          | Services     | services      | Multi Row  |
| 3          | Startups     | startups      | Multi Row  |
| 4          | Products     | products      | Multi Row  |
| 5          | HowItWorks   | how_it_works  | Multi Row  |
| 6          | Partners     | partners      | Multi Row  |
| 7          | NewsInsights | news_insights | Multi Row  |
| 8          | Customers    | customers     | Multi Row  |
| 9          | Verticals    | verticals     | Multi Row  |

> **Single Row** = Only one record exists. Admin can only UPDATE, not INSERT.
> **Multi Row** = Multiple records. Admin can CREATE, READ, UPDATE, DELETE.

---

### Homepage Data Fetch Flow

```
User visits Homepage (/)
      ↓
Next.js page.tsx runs as Server Component
      ↓
Parallel API calls go to backend:
  GET /api/hero
  GET /api/services
  GET /api/startups
  GET /api/products
  GET /api/howitworks
  GET /api/partners
  GET /api/newsinsights
  GET /api/customers
  GET /api/verticals
      ↓
Backend receives each request
      ↓
Auth NOT required for GET on public routes
      ↓
Backend queries SQLite for each section's data
      ↓
Returns JSON responses
      ↓
Each section component receives its data as props
      ↓
Homepage renders with fresh database data ✅
```

---

### Content Update Flow (Admin Panel)

```
Admin navigates to /admin/hero
      ↓
Page loads → GET /api/hero is called
      ↓
Current DB data populates the form fields
      ↓
Admin edits heading / subheading / button text / image
      ↓
Admin clicks "Save Changes"
      ↓
IF new image was selected:
  → POST /api/upload (multipart/form-data)
  → Image saved in backend/uploads/ with UUID filename
  → Image URL returned from backend
      ↓
PUT /api/hero called with updated fields + new image URL
      ↓
Backend middleware verifies JWT token
      ↓
Backend runs UPDATE query on SQLite hero table
      ↓
Success response returned
      ↓
Admin sees success message ✅
      ↓
Homepage now shows updated content on next visit ✅
```

---

## PART 3 — Image Upload Flow

```
Admin selects an image file in the form
      ↓
Frontend sends → POST /api/upload
Content-Type: multipart/form-data
      ↓
Backend Multer middleware receives the file
      ↓
Generates unique filename: UUID + original extension
  e.g.  a3f9c21b-4d88-4e1a-b3c2-abc123def456.jpg
      ↓
Saves file to: backend/uploads/
      ↓
Returns full URL:
  http://localhost:5000/uploads/a3f9c21b-....jpg
      ↓
Frontend stores this URL
      ↓
When form is submitted, this URL is saved in SQLite
      ↓
Homepage uses this URL in <img src="..." /> ✅
```

---

## PART 4 — Backend API Routes (Full Plan)

```
AUTH ROUTES (No JWT required)
──────────────────────────────────────────────────
GET  /api/auth/google              → Redirect to Google OAuth
GET  /api/auth/google/callback     → Handle Google callback, set JWT cookie
POST /api/auth/logout              → Clear session + cookie
GET  /api/auth/me                  → Return current user info (JWT required)

UPLOAD ROUTE (JWT required)
──────────────────────────────────────────────────
POST /api/upload                   → Upload image, return URL

HERO (JWT required for write, public for read)
──────────────────────────────────────────────────
GET  /api/hero                     → Get hero data
PUT  /api/hero                     → Update hero data

SERVICES (JWT required for write, public for read)
──────────────────────────────────────────────────
GET    /api/services               → Get all services
POST   /api/services               → Add new service
PUT    /api/services/:id           → Update a service
DELETE /api/services/:id           → Delete a service

(Same CRUD pattern for all multi-row sections:)
/api/startups
/api/products
/api/howitworks
/api/partners
/api/newsinsights
/api/customers
/api/verticals
```

---

## PART 5 — Admin Panel Pages

```
/admin/login          → Google OAuth login page
/admin/dashboard      → All sections listed with Edit buttons
/admin/hero           → Edit Hero section (single form — heading, subheading, image)
/admin/services       → List all services + Add / Edit / Delete
/admin/startups       → List all startups + Add / Edit / Delete
/admin/products       → List all products + Add / Edit / Delete
/admin/howitworks     → List all steps + Add / Edit / Delete
/admin/partners       → List all partners + Add / Edit / Delete
/admin/newsinsights   → List all articles + Add / Edit / Delete
/admin/customers      → List all customers + Add / Edit / Delete
/admin/verticals      → List all verticals + Add / Edit / Delete
```

---

## PART 6 — SQLite Database Tables (Full Plan)

### Auth Tables
```
users        → id, email, name, profile_picture, role, created_at
sessions     → id, user_id, token, expires_at
```

### Single Row Tables (UPDATE only)
```
hero          → id, heading, subheading, button_text, image_url
```

### Multi Row Tables (Full CRUD)
```
services      → id, title, description, icon_url, order_index
startups      → id, name, description, logo_url, order_index
products      → id, name, description, image_url, order_index
how_it_works  → id, step_number, title, description, image_url
partners      → id, name, logo_url, website_url, order_index
news_insights → id, title, excerpt, image_url, link, published_at
customers     → id, name, logo_url, order_index
verticals     → id, title, description, icon_url, order_index
```

> Table order matches the component order in page.tsx

---

## PART 7 — Security Checklist

```
✅ All /admin/* Next.js routes protected by middleware.ts
✅ All write API routes protected by JWT authMiddleware
✅ Public GET routes (homepage data) do NOT require JWT
✅ Only whitelisted emails get admin access (check on OAuth callback)
✅ Image uploads restricted to image MIME types only
✅ CORS configured to allow only localhost:3000 (or your domain)
✅ JWT stored in HttpOnly cookie (not localStorage — XSS safe)
✅ All secrets in .env — never hardcoded
✅ JWT has expiry time (e.g. 7 days)
```

---

## PART 8 — Backend Dependencies (Node.js)

```
express          → HTTP server + routing
better-sqlite3   → SQLite database
cors             → Cross-origin requests
multer           → Image/file upload handling
passport         → OAuth strategy handler
passport-google-oauth20 → Google OAuth 2.0
jsonwebtoken     → JWT creation + verification
cookie-parser    → Read cookies from requests
dotenv           → Environment variables
uuid             → Unique filenames for uploads
```

---

## PART 9 — Environment Variables (.env)

```
# Server
PORT=5000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# JWT
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

# Frontend URL (for CORS + redirects)
FRONTEND_URL=http://localhost:3000
```

---

## PART 10 — Complete System Flow Summary

```
1. SETUP
   Google Cloud Console → OAuth credentials → .env

2. LOGIN
   /admin → middleware check → /admin/login
   → Google OAuth → callback → JWT cookie set
   → /admin/dashboard

3. CONTENT EDIT (Admin)
   /admin/hero → load current data from DB
   → edit fields → upload image if needed
   → save → backend updates SQLite

4. HOMEPAGE (Public)
   / → Server Component → fetch all sections from backend
   → backend reads SQLite → returns JSON
   → components render with live data

5. LOGOUT
   Click logout → backend clears session
   → cookie cleared → back to /admin/login
```

---

*Generated for: Next.js + Node.js + SQLite + Google OAuth CMS Workflow*
*Sections based on page.tsx: Navbar → Hero → Services → Startups → Products → HowItWorks → Partners → NewsInsights → Customers → Verticals → Footer*
