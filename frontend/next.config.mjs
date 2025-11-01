/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/studies/internet-marketing',
  assetPrefix: '/studies/internet-marketing',
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
        protocol: 'https',
        hostname: 'marlenamakosza.com',
        pathname: '/api/uploads/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337',
  },
  output: 'standalone',
};

export default nextConfig;
