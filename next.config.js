/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
});
const nextConfig = {};

if (process.env == 'PRODUCTION') {
    module.exports = withPWA(nextConfig);
} else {
    module.exports = nextConfig;
}
