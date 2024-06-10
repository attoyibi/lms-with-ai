const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        config.resolve.alias['@'] = path.join(__dirname, 'src');
        return config;
    },
};

module.exports = nextConfig;
