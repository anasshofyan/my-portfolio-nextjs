/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
    return [
      {
        source: '/assets/img/:path*',
        destination: '/assets/img/:path*',
      },
    ];
  },
}

module.exports = nextConfig
