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
      {
        protocol: "https",
        hostname: "logodownload.org",
      },
      {
        protocol: "https",
        hostname: "images.weare365.io",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "brunorezende.com.br",
      },
      {
        protocol: "https",
        hostname: "www.linx.com.br",
      },
      {
        protocol: "https",
        hostname: "logonoid.com",
      },
      {
        protocol: "https",
        hostname: "logopng.com.br",
      },
      {
        protocol: "https",
        hostname: "arquivos-brb.infra.gopoints.com.br",
      },
    ],
  },
};

export default nextConfig;
