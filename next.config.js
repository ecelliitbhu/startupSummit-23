/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: [
      "firebase-admin",
      "@next-auth",
      "@aws-sdk/client-ses",
    ],
  },
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.openart.ai",
      "firebasestorage.googleapis.com",
      "cdn-icons-png.flaticon.com",
      "flowbite.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
