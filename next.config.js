/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    API_URL:'http://localhost:3000/api',
    SITE_URL:process.env.SITE_URL
  }
}

module.exports = nextConfig
