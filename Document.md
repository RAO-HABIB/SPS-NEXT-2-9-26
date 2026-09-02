# Software Productivity Strategists (SPS) - Project Documentation

## 📌 Project Overview
This project is a modern, highly responsive, and performance-optimized web application for **Software Productivity Strategists (SPS)**. It serves as the primary digital footprint for SPS, highlighting its core products, services, verticals, startups, and news insights. 

The application is built using the latest modern web development stack with a strong emphasis on **performance, SEO, accessibility, and dynamic UI/UX animations**.

---

## 🛠️ Tech Stack & Dependencies
- **Framework:** Next.js 16.3.3 (App Router, Turbopack)
- **Library:** React 19.2.8
- **Styling:** Tailwind CSS v4 & DaisyUI 5.7.22
- **Animations:** Framer Motion (`framer-motion`), Lottie (`lottie-react`), and `tw-animate-css`
- **Icons:** Iconify (`@iconify-icon/react`), Lucide React
- **UI Components:** Shadcn, Base UI
- **Other:** Swiper (for carousels), Styled Components

---

## 📁 Folder Structure & Architecture
The project follows a component-centric and content-driven architecture:

```text
c:\New folder\sps\
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable UI components
│   ├── Customers/        # Customer logos and testimonials
│   ├── Footer/           # Global Footer
│   ├── Hero/             # Dynamic hero section with video backgrounds
│   ├── HowItWorks/       # Process explanation section
│   ├── Navbar/           # Global responsive navigation menu
│   ├── NewsInsights/     # Latest news and articles section
│   ├── Partners/         # Technology partners
│   ├── Products/         # Core SPS products
│   ├── Services/         # Service offerings
│   ├── Startups/         # Startup incubator/ventures section
│   ├── Verticals/        # Industry verticals
│   └── UI/               # Reusable small UI pieces (e.g., LottiePlayer)
├── lib/                  # Data definition files (Content is driven from here)
│   ├── footer.ts         # Footer links and data
│   ├── hero.ts           # Hero slide definitions
│   └── ...               # (Other content data files)
├── public/               # Static assets (images, videos, logo)
│   ├── logo/             # Logo files (logo.png, etc.)
│   └── videos/           # Heavy background videos (e.g., hero-bg2.mp4)
├── Document.md           # This documentation file
└── package.json          # Project metadata and dependencies
```

---

## 🚀 Key Features & Architectural Decisions

### 1. Data-Driven Content (`/lib` directory)
Instead of hardcoding text into the React components, all the content (like Hero slides, Footer links, Service descriptions) is exported from TypeScript files inside the `lib/` folder.
- **Why?** This makes it incredibly easy to update the website's text, links, or images without touching the complex React UI code.

### 2. High Performance & Lighthouse Optimization
The project has been aggressively optimized for Google Lighthouse:
- **Videos:** Large MP4 videos (like `hero-bg2.mp4` and `cybersecurity1.mp4`) use `preload="none"` to prevent enormous initial network payloads, ensuring rapid First Contentful Paint (FCP).
- **Accessibility:** Text colors have been carefully adjusted against backgrounds (`text-white/90`, `text-gray-300`) to guarantee high contrast ratios. All interactive elements (links, buttons) have proper `aria-label` attributes.
- **Images:** Image `alt` texts avoid redundant phrases to comply with screen-reader best practices, and Next.js `<Image>` component is used extensively for automatic WebP conversion and responsive sizing.

### 3. Responsive Design
The entire application is completely responsive:
- Uses Tailwind CSS breakpoint prefixes extensively (`sm:`, `md:`, `lg:`, `xl:`).
- Complex grid layouts gracefully degrade to stacked single-column layouts on mobile devices.
- The Navbar switches between a complex desktop Mega-Menu (using `framer-motion`) and a slide-out mobile drawer.

### 4. Advanced Animations
- **Framer Motion:** Used for smooth mount/unmount animations, mega-menu reveals, and scroll-linked animations.
- **Lottie:** Uses `lottie-react` (via the `LottiePlayer` component) to render lightweight JSON-based vector animations seamlessly.

---

## 💻 Developer Scripts
To run the project locally or build for production:

- **Development Server:**
  ```bash
  npm run dev
  ```
  Runs the app in development mode with Turbopack. Open `http://localhost:3000` to view it in the browser.

- **Production Build:**
  ```bash
  npm run build
  ```
  Compiles the application for production deployment, generating static assets and server-side logic.

- **Start Production Server:**
  ```bash
  npm start
  ```
  Starts the Next.js production server (requires `npm run build` first).

---

## 🔧 Maintenance Notes
1. **Adding New Links:** If you need to add a new page, make sure to update the corresponding data array in the `lib/` folder. All links currently point to `#` by default to prevent 404s until actual pages are built.
2. **Logo Updates:** The logo is currently referenced as `/logo/logo.png`. If a new format is uploaded, update the `src` attribute in `components/Navbar/navbar.tsx`.
3. **Lottie Dependencies:** The project relies on the named export `{ Lottie }` from `"lottie-react"`, using the `src` prop instead of `animationData` due to recent library updates. Keep this in mind when upgrading `lottie-react`.
