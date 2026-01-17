/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // This allows the build to succeed even if there are type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows the build to succeed even if there are linting errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
