const path = require('path'); // Importa o módulo path

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['satisfying-moonlight-12eaee0b32.media.strapiapp.com'],
        
      },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};

module.exports = nextConfig;
