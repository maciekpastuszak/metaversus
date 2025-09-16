/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    eslint: {
      ignoreDuringBuilds: true,
    },
    appDir: true,
  },
};

module.exports = nextConfig;
