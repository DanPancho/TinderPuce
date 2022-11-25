/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  // next.js config
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
})