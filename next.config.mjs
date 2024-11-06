/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [], // No external domains to optimize images for
        unoptimized: true, //diabling image optimization
    },
};

export default nextConfig;
