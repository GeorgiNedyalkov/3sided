import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        // protocol: "https",
        // port: "",
        // pathname: "/account123/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
