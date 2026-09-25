# CMS Workflow - Homepage Conversion Guide

This document outlines the exact process used to convert the static Next.js homepage into a dynamic, CMS-driven architecture. 
Use this document as a blueprint when building out CMS capabilities for other pages in the project.

## 1. Architecture Overview

The system follows a decoupled Full-Stack architecture:
- **Frontend**: Next.js (App Router, Server Components).
- **Backend**: Node.js with Express (running on port 5000).
- **Database**: SQLite (via `better-sqlite3`).
- **Auth**: Google OAuth 2.0 & JWT (HttpOnly Cookies).
- **Proxy**: Next.js configured to proxy `/api/*` to the Express backend to resolve CORS and Client-Side fetching issues.

---

## 2. Backend Implementation (Express & SQLite)

### A. Database Design
1. Analyze the original static data structure (e.g., `HERO_SLIDES`, `SERVICES_DATA`).
2. Create SQLite tables in `backend/database.js`. Typically, sections require two tables:
   - **Intro Table**: For static section headers (e.g., `eyebrow`, `title`, `description`).
   - **Items Table**: For repeating lists (e.g., slides, cards, tabs).
3. Use `JSON` strings inside text columns for deeply nested data (e.g., bullet points, sub-items) when a dedicated relational table is overkill.

### B. API Routes
1. Create dedicated route files for each section (e.g., `routes/hero.js`).
2. **Public `GET` Route**: Fetches both the intro and the items, returning them in a structured JSON object (`{ intro, items }`).
3. **Protected `POST/PUT/DELETE` Routes**: Guarded by `authenticateToken` middleware. Used by the Admin Panel to update data.
4. **Image Uploads**: Provide a `/api/upload` endpoint using `multer` to handle local file uploads and return the public URL.

---

## 3. Authentication Flow

1. **Google OAuth**: Handled via `passport-google-oauth20`.
2. **JWT Generation**: On successful login, the backend generates a JWT and sets it as an `HttpOnly` cookie (`token`).
3. **Middleware Protection**: The `authenticateToken` middleware verifies the cookie on all mutating API routes.
4. **Logout**: A dedicated route clears the cookie.

---

## 4. Frontend Admin Panel (Next.js & DaisyUI)

### A. Layout & Routing
1. All admin pages are nested under `src/app/admin/...`.
2. **Layout Structure**: 
   - A globally applied `data-theme="light"` prevents DaisyUI from conflicting with Shadcn/Tailwind default colors on OS dark mode.
   - **Scroll Management**: The layout wrapper uses `h-screen overflow-hidden` to lock the document, while the main content area (`drawer-content`) uses `overflow-y-auto`. This keeps the sidebar fixed and only the right-side content scrolls.

### B. Admin Pages (Client Components)
1. Use React `useState` and `useEffect` to fetch data from `/api/[section]`.
2. **Intro Form**: Simple inputs mapped to state, submitted via `PUT`.
3. **Items Management**: 
   - A data table displaying existing items.
   - An "Add/Edit" Modal containing a form.
   - File inputs for image/video uploads, hitting the `/api/upload` route before saving the item payload.

### C. API Proxy (Crucial)
To allow client-side fetching in the Admin Panel without hardcoding `http://localhost:5000` (which breaks in production and causes CORS issues), `next.config.ts` must include an API rewrite:
```typescript
async rewrites() {
  return [
    { source: '/api/:path*', destination: 'http://127.0.0.1:5000/api/:path*' }
  ];
}
```

---

## 5. Main Frontend Integration (Next.js Server Components)

### A. Data Fetching
1. Convert the main page (`src/app/page.tsx`) to an `async` Server Component.
2. Fetch data from the backend using standard `fetch` calls.
3. **Optimization**: Use `Promise.all` to fetch all section APIs concurrently rather than awaiting them one by one.
4. **Caching**: Use `{ cache: 'no-store' }` to ensure the frontend always shows the latest data from the CMS.

### B. Component Refactoring
1. Update UI Components (e.g., `<Hero />`, `<Services />`) to accept a `data` prop instead of importing static files.
2. Ensure graceful fallbacks (e.g., `data?.intro?.title || "Default Title"`).
3. **Asset Handling**: 
   - Standard images use Next.js `<Image>`.
   - **Videos (`.mp4`, `.webm`)**: Rendered using `<video autoPlay loop muted>`.
   - **Animated AVIFs (`.avif`)**: Browsers reject AVIFs inside `<video>` tags. They must be rendered using standard `<img>` tags to preserve their video-like animation.
