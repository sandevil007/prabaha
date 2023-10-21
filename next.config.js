/** @type {import('next').NextConfig} */

const {
    NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
    NEXT_PUBLIC_EMAILJS_USER_ID
} = process.env;

const nextConfig = {
    env: {
        NEXT_PUBLIC_EMAILJS_SERVICE_NAME,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_NAME,
        NEXT_PUBLIC_EMAILJS_USER_ID
    },
    output: 'export'
};

module.exports = nextConfig