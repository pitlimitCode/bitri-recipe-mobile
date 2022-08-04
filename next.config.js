/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    domains: 
    [
      'http://localhost:8000',
      'localhost:8000',
      'http://localhost',
      'localhost',
    ],
    loader: 'imgix',
    path: 'http://localhost:8000',
  },
}

module.exports = nextConfig
