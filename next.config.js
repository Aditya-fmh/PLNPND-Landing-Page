/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use static export for Netlify
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable experimental features that might cause issues
  experimental: {
    // Needed on Netlify
    esmExternals: 'loose',
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
