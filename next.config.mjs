/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Generates static HTML/CSS/JS in 'out' folder
    trailingSlash: true,
    images: {
        unoptimized: true, // Required for static export (no Node server for image optimization)
    },
};

export default nextConfig;
