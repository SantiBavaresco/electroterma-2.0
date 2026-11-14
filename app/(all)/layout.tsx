// "use client"
import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";



import clsx from "clsx";
import Footer from "../../components/footer";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    
        // ],
    icons: {
        icon: "/electroterma-logo.png",
        shortcut: "/electroterma-logo.ico",
        apple: "/electroterma-logo.png",
    },
};

export default function RootLayout({
    children, 
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="es" suppressHydrationWarning style={{scrollbarColor: "#EF771C #ffedd5",   backgroundColor:"white"  }}>
            <head>
            </head> 
            <meta name="theme-color" content="white" />
            <body   
                id="home" accessKey="home"
                className={clsx(
                    "min-h-screen bg-background font-lexend   ",
                    fontSans.variable,
                    "light-mode"
                )}
            >

                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light", }}
                >
                    <GoogleAnalytics gaId="G-YVFJLBCL2C" />

                    <div className="relative flex flex-col h-screen">
                        <main className="container mx-auto max-w-full">
                            {children}

                            <Script id="clarity-script" type="text/javascript" strategy="afterInteractive">
                            {`
                                (function(c,l,a,r,i,t,y){
                                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                                })(window, document, "clarity", "script", "ojjh5gdoug");
                            `}
                            </Script>

                        </main>
                        
                       <Footer/>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
