/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/checks',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
