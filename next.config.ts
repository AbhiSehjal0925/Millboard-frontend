/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/:path*', // Match any path
        destination: '/', // Redirect to root
      },
    ];
  },
};

export default nextConfig;