import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

import { siteConfig } from "@/config/site";
import { Providers } from "@/components/layout/providers";
import Footer from "@/components/footer";

const GA_ID = "G-YVFJLBCL2C";

/**
 * Las páginas eligen entre versión mobile y desktop con JavaScript, y el HTML del
 * servidor sale con la mobile. En desktop, ocultamos el contenido hasta hidratar
 * para que no se vea la versión mobile un instante y "salte" el layout.
 * (Si el JS fallara, globals.css lo vuelve a mostrar a los 3 segundos.)
 */
const PRE_DESKTOP_SCRIPT = `if(window.matchMedia("(min-width: 768px)").matches)document.documentElement.classList.add("pre-desktop")`;
const CLARITY_ID = "ojjh5gdoug";

export const rootMetadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/electroterma-logo.png",
        shortcut: "/electroterma-logo.ico",
        apple: "/electroterma-logo.png",
    },
};

export const rootViewport: Viewport = {
    themeColor: "white",
};

interface RootShellProps {
    children: React.ReactNode;
}

/** Estructura común (html, body, footer, analytics) de los dos layouts raíz. */
export default function RootShell({ children }: RootShellProps) {
    return (
        <html lang="es" suppressHydrationWarning style={{ scrollbarColor: "#EF771C #ffedd5", backgroundColor: "white" }}>
            <head>
                <script dangerouslySetInnerHTML={{ __html: PRE_DESKTOP_SCRIPT }} />
            </head>
            <body className="min-h-screen bg-background font-lexend light-mode">
                <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
                    <GoogleAnalytics gaId={GA_ID} />
                    <Script id="clarity-script" strategy="afterInteractive">
                        {`(function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "${CLARITY_ID}");`}
                    </Script>

                    <div className="relative flex flex-col h-screen">
                        <main className="container mx-auto max-w-full">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
