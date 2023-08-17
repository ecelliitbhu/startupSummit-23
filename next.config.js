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
    webpack(config, { isServer }) {
        const prefix = config.assetPrefix ?? config.basePath ?? '';
        config.module.rules.push({
          test: /\.mp4$/,
          use: [{
            loader: 'file-loader',
            options: {
              publicPath: `${prefix}/_next/static/media/`,
              outputPath: `${isServer ? '../' : ''}static/media/`,
              name: '[name].[hash].[ext]',
            },
          }],
        });
    
        return config;
      },
    };


module.exports = nextConfig;
