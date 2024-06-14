const path = require("path"); // Add this line at the top

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};
module.exports = nextConfig;
