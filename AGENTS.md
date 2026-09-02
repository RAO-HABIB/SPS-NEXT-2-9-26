<!-- BEGIN:nextjs-agent-rules -->

# SPS Website - Next.js 2026 Architecture & Coding Guidelines

You are an expert Next.js developer building the SPS website. You must strictly adhere to the following architecture and design rules for all future code generation.

## 1. Directory Structure & Domain-Driven Design
We use a strict Domain-Driven folder structure. Do not dump components into a global folder.
* **`src/features/`**: All major page sections (Hero, Products, Services, Startups) and domain-specific logic MUST go here (e.g., `src/features/products/components/ProductCard.tsx`).
* **`src/components/ui/`**: Strictly for reusable dumb primitives (Buttons, Unframer/Lucide icons, Lottie players, Swiper wrappers, animated unlumen-ui elements).
* **`src/components/layout/`**: Global layouts only (Navbar, Footer, LoadingScreen).

## 2. Routing Rules (App Router)
* **Kebab-Case Only:** All folders and files inside `src/app` must use lowercase kebab-case (e.g., `src/app/(marketing)/services/[card-slug]/page.tsx`).
* **Route Groups:** Use route groups like `(marketing)`, `(company)`, and `(resources)` to organize the app directory logically without affecting URL paths.

## 3. Data vs. Utilities
* **Static Data:** Never hardcode large arrays of data (mock products, navigation links, services) inside components. Always place and export them from `src/data/` (e.g., `src/data/products-data.ts`).
* **Core Utilities:** The `src/lib/` folder is strictly reserved for pure utility functions (like Tailwind `cn` merges, formatting, or backend API configs). Do not put static mock data here.

## 4. Components & Animations
* **Server by Default:** Build Server Components by default for optimal performance. 
* **Isolate Client Logic:** Only use `"use client"` when absolutely necessary (e.g., for Framer Motion, state hooks, or Swiper). Keep interactive client components as small and isolated as possible before importing them into server pages.
* **Aesthetic Standard:** Maintain a luxury, minimalist, and dark-themed cinematic aesthetic. Ensure Tailwind classes reflect this, and keep Framer Motion animations smooth and premium.
<!-- END:nextjs-agent-rules -->
