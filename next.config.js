const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [new URL("https://img.alicdn.com/bao/**")],
  },
};

module.exports = withNextIntl(nextConfig);
