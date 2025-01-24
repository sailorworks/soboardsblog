import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdn.sanity.io", // Existing Sanity domain
      "soboards.vercel.app", // Your Vercel domain
    ],
  },
};

export default nextConfig;
