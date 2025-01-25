/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io", // Existing Sanity domain
      "soboards.vercel.app", // Your Vercel domain
    ],
  },
};

export default nextConfig;
