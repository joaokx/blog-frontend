const path = require('path'); // Importa o módulo path

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
