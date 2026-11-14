/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                // Frames de las animaciones de scroll (cientos de .webp): que el navegador
                // los reutilice entre visitas en lugar de revalidar uno por uno.
                source: "/img/solerpalau/:product/frames/:path*",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
