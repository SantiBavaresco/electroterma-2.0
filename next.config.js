/**
 * El sitio oficial se publica como archivos estáticos en un hosting común (Apache):
 *   npm run export  →  genera la carpeta out/ lista para subir a public_html
 * `npm run build` / `npm run dev` siguen funcionando igual (y el preview de Vercel).
 *
 * @type {import('next').NextConfig}
 */
const isExport = process.env.NEXT_EXPORT === "1";

const nextConfig = {
    reactStrictMode: true,
    ...(isExport
        ? {
              output: "export",
              // cada página queda como carpeta/index.html, que Apache sirve sin configuración
              trailingSlash: true,
          }
        : {
              // en el hosting este caché lo da public/.htaccess
              async headers() {
                  return [
                      {
                          source: "/img/solerpalau/:product/frames/:path*",
                          headers: [
                              { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
                          ],
                      },
                  ];
              },
          }),
};

module.exports = nextConfig;
