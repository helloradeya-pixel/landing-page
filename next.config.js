/* eslint-disable import/no-extraneous-dependencies */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },

  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);