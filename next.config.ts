import type { NextConfig } from 'next';

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
      'react-data-table-component'
    ],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 294, 350, 380, 440],
    qualities: [50, 60, 75, 85],
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
      {
        source: '/products/sps/myid-self-verify',
        destination: 'https://www.myidselfverify.com/',
        permanent: false,
      },
      {
        source: '/products/sps/azalio',
        destination: 'https://www.azal.io/',
        permanent: false,
      },
      {
        source: '/products/sps/fabrico',
        destination: 'https://fabrico.spsnet.com/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
