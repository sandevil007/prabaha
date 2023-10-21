/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const {
    NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
    NEXT_PUBLIC_EMAILJS_USER_ID,
    ON_GITHUB_PAGES
} = process.env;

const basePath = ON_GITHUB_PAGES ? '/prabaha_react' : '';
const assetPrefix = ON_GITHUB_PAGES ? '/prabaha_react/' : '';

const env = {
    NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
    NEXT_PUBLIC_EMAILJS_USER_ID
};

const output = { output: 'export' };

module.export = withPlugins([
    [optimizedImages, {
        mozjpeg: {
            quality: 80,
        },
        pngquant: {
            speed: 3,
            strip: true,
            verbose: true,
        },
    }],
    {
        env,
        output,
        basePath,
        assetPrefix
    },
]);
