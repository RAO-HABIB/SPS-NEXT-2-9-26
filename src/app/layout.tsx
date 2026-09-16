import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Swiper CSS is loaded dynamically by components that use it
// import { LoadingScreen } from "@/components/ui/loadingscreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
      className={`${poppins.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          as="image"
          href="/images/logo/logo-nav.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/posters/hero-bg3.webp"
          fetchPriority="high"
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