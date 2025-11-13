/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/projects/internet-marketing',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/projects/internet-marketing',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '5.175.140.38',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'marlenamakosza.com',
        pathname: '/projects/internet-marketing/uploads/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api',
  },
  output: 'standalone',
};

export default nextConfig;
