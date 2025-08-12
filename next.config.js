const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    domains: [
      "www.7rfatk.com",
      "comio-artifacts.s3.us-east-1.amazonaws.com",
      "pro-get.camion-app.com",
    ],
  },
};

module.exports = withNextIntl(nextConfig);
