/** @type {import('next').NextConfig} */
const {
    NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
    NEXT_PUBLIC_EMAILJS_USER_ID,
    ON_GITHUB_PAGES
} = process.env;
const basePath = ON_GITHUB_PAGES ? '/prabaha_react' : '';
const assetPrefix = ON_GITHUB_PAGES ? '/prabaha_react/' : '';

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

module.exports = nextConfig;
