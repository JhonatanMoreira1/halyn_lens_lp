import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "cdn.easyfrontend.com",
      },
    ],
  },
};

export default nextConfig;
