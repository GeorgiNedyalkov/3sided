/** @type {import('next').NextConfig} */
const nextConfig = {
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
