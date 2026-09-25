// next.config.ts
import type { NextConfig } from 'next';

// ✅ Backend URL — Vercel pe env var se aayega
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5000';
const isProd = process.env.NODE_ENV === 'production';

// Derive hostname for images.remotePatterns
let backendPattern: {
  protocol: 'http' | 'https';
  hostname: string;
  port?: string;
  pathname: string;
} | null = null;

try {
  const u = new URL(BACKEND_URL);
  if (u.hostname !== '127.0.0.1' && u.hostname !== 'localhost') {
    backendPattern = {
      protocol: u.protocol.replace(':', '') as 'http' | 'https',
      hostname: u.hostname,
      ...(u.port ? { port: u.port } : {}),
      pathname: '/uploads/**',
    };
  }
} catch {
  // ignore
}

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
      '@iconify/react',
      '@iconify-icon/react',
      'react-icons',
      'date-fns',
      'lodash',
      'swiper',
      'lottie-react',
      'react-data-table-component',
    ],
  },
  compiler: {
    removeConsole: isProd ? { exclude: ['error', 'warn'] } : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 294, 350, 380, 440],
    qualities: [50, 60, 75, 85],

    // ✅ Sirf dev mein local IP allow karo (prod mein SSRF guard on rahe)
    dangerouslyAllowLocalIP: !isProd,

    remotePatterns: [
      // Dev
      { protocol: 'http', hostname: '127.0.0.1', port: '5000', pathname: '/uploads/**' },
      { protocol: 'http', hostname: 'localhost', port: '5000', pathname: '/uploads/**' },
      // Prod — Render backend (agar absolute URLs store hui ho)
      ...(backendPattern ? [backendPattern] : []),
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/products/sps/myid-self-verify', destination: 'https://www.myidselfverify.com/', permanent: false },
      { source: '/products/sps/azalio', destination: 'https://www.azal.io/', permanent: false },
      { source: '/products/sps/fabrico', destination: 'https://fabrico.spsnet.com/', permanent: false },
    ];
  },
  async rewrites() {
    // ✅ Env-based backend proxy — Vercel pe Render URL use karega
    return [
      { source: '/api/:path*', destination: `${BACKEND_URL}/api/:path*` },
      { source: '/uploads/:path*', destination: `${BACKEND_URL}/uploads/:path*` },
    ];
  },
};

export default nextConfig;