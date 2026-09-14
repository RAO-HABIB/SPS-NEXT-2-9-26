import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Swiper CSS is loaded dynamically by components that use it
// import { LoadingScreen } from "@/components/ui/loadingscreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spsnet.com"),
  title: "SPS Digital Solutions",
  description: "Comprehensive Digital Transformation Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          as="image"
          href="/images/logo/logo-nav.webp"
          fetchPriority="high"
          {...{ fetchpriority: "high" }}
        />
        <link
          rel="preload"
          as="image"
          href="/images/posters/hero-bg3.webp"
          fetchPriority="high"
          {...{ fetchpriority: "high" }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full m-0 p-0">
        <main className="flex-1 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}