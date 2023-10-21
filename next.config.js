/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const basePath = ON_GITHUB_PAGES ? '/prabaha_react' : '';
const assetPrefix = ON_GITHUB_PAGES ? '/prabaha_react/' : '';

const {
    NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
    NEXT_PUBLIC_EMAILJS_USER_ID,
    ON_GITHUB_PAGES
} = process.env;

const nextConfig = {
    env: {
        output: 'export',
        NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
        NEXT_PUBLIC_EMAILJS_USER_ID
    },
    basePath: basePath,
    assetPrefix: assetPrefix
};

module.exports = withPlugins([
    [optimizedImages], nextConfig
]);
