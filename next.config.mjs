/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home"
      }
    ]
  },
  reactStrictMode: true,
  transpilePackages: ["ui"],
  i18n: {
    locales: ["it", "en"],
    defaultLocale: "en"
  },
  images: {
    domains: ["www.datocms-assets.com"]
  }
}

export default nextConfig
