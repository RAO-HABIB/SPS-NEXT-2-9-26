import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 75, 85],
  },
  async redirects() {
    return [
      {
        source: "/products/sps/myid-self-verify",
        destination: "https://www.myidselfverify.com/",
        permanent: false,
      },
      {
        source: "/products/sps/azalio",
        destination: "https://www.azal.io/",
        permanent: false,
      },
      {
        source: "/products/sps/fabrico",
        destination: "https://fabrico.spsnet.com/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
