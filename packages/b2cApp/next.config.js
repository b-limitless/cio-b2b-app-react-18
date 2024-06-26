/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages:['three'], 
  // output: 'export', 
  images: {
    unoptimized: true
  }, 
  reactStrictMode:false, 
  // trailingSlash: true,
}

module.exports = nextConfig
