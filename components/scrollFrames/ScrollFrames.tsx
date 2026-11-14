"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./scrollFrames.css";

gsap.registerPlugin(ScrollTrigger);
// En celulares la barra de direcciones aparece/desaparece al scrollear y cambia
// el alto de la ventana: eso no debe recalcular nada.
ScrollTrigger.config({ ignoreMobileResize: true });

export type ScrollFramesVariant = "web" | "mobile";

interface ScrollFramesProps {
    /** Carpeta del producto dentro de /img/solerpalau (rls, tsa, tda) */
    product: string;
    /** Cantidad de frames que hay en cada carpeta (1.webp ... N.webp) */
    frameCount: Record<ScrollFramesVariant, number>;
    variant: ScrollFramesVariant;
    /** Clase extra del div de la "story" en desktop (se mantiene la del diseño original) */
    storyClassName?: string;
    /**
     * "cover": respeta la proporción de los frames (recorta un poco los bordes si la
     * pantalla no es 16:9). "stretch": los estira a toda la pantalla como la versión original.
     */
    fit?: "cover" | "stretch";
}

// La animación arranca cuando el borde superior de la sección llega a este punto
// de la pantalla (antes empezaba recién al quedar fija arriba de todo)
const START_AT = "top 60%";
// Desplazamiento vertical con el que se dibujaba cada frame en la versión original
const OFFSET_Y: Record<ScrollFramesVariant, number> = { web: 30, mobile: 50 };
const MAX_DPR = 2;
const CONCURRENT_LOADS = 6;

/**
 * Animación por frames sincronizada con el scroll (GSAP ScrollTrigger).
 *
 * - El canvas queda fijo (sticky) mientras se recorre la sección y el frame
 *   mostrado depende del progreso del scroll dentro de esa sección, en ambos sentidos.
 * - Los frames se cargan de a poco y en orden "grueso a fino" (cada 32, 16, 8...):
 *   si el usuario scrollea rápido se dibuja el frame cargado más cercano.
 * - Por defecto el dibujo respeta la proporción de la imagen ("cover"), sin deformarla.
 */
export default function ScrollFrames({ product, frameCount, variant, storyClassName = "pt-32", fit = "cover" }: ScrollFramesProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const total = frameCount[variant];

    useEffect(() => {
        const section = sectionRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!section || !canvas || !ctx) return;

        const src = (i: number) => `/img/solerpalau/${product}/frames/${variant}/${i + 1}.webp`;
        const images: (HTMLImageElement | null)[] = new Array(total).fill(null);
        const pending: HTMLImageElement[] = [];
        let current = 0;
        let drawn = -1;
        let disposed = false;

        // ---------- dibujo ----------
        // tamaño de la "pantalla" del canvas: se fija al cargar y sólo cambia si cambia
        // el ancho (rotar el celular, achicar la ventana), no con la barra del navegador
        let viewW = 0;
        let viewH = 0;
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
            if (window.innerWidth === viewW && viewH) return;
            viewW = window.innerWidth;
            viewH = window.innerHeight;
            const w = viewW;
            const h = viewH;
            // mismo tamaño "lógico" que la versión original (ancho x alto de la ventana);
            // el CSS (max-width / max-height) lo ajusta igual que antes
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            canvas.style.width = `${w}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            drawn = -1;
            draw(current);
        };

        const nearestLoaded = (i: number) => {
            if (images[i]) return i;
            for (let d = 1; d < total; d++) {
                if (i - d >= 0 && images[i - d]) return i - d;
                if (i + d < total && images[i + d]) return i + d;
            }
            return -1;
        };

        const draw = (i: number) => {
            const idx = nearestLoaded(i);
            if (idx < 0 || idx === drawn) return;
            const img = images[idx]!;
            const cw = viewW;
            const ch = viewH;
            ctx.clearRect(0, 0, cw, ch);
            if (fit === "stretch") {
                ctx.drawImage(img, 0, OFFSET_Y[variant], cw, ch);
            } else {
                const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
                const dw = img.naturalWidth * scale;
                const dh = img.naturalHeight * scale;
                ctx.drawImage(img, (cw - dw) / 2, OFFSET_Y[variant] + (ch - dh) / 2, dw, dh);
            }
            drawn = idx;
            canvas.dataset.frame = String(idx + 1);
        };

        // ---------- carga progresiva ----------
        const order: number[] = [];
        const queued = new Set<number>();
        for (let step = 32; step >= 1; step /= 2) {
            for (let i = 0; i < total; i += step) {
                if (!queued.has(i)) {
                    queued.add(i);
                    order.push(i);
                }
            }
        }
        if (!queued.has(total - 1)) order.splice(1, 0, total - 1);

        let next = 0;
        let started = false;
        const loadNext = () => {
            if (disposed || next >= order.length) return;
            const i = order[next++];
            const img = new Image();
            img.decoding = "async";
            pending.push(img);
            const done = () => {
                pending.splice(pending.indexOf(img), 1);
                loadNext();
            };
            img.onload = () => {
                if (disposed) return;
                images[i] = img;
                // redibujar si este frame queda más cerca del que corresponde
                if (drawn < 0 || Math.abs(i - current) < Math.abs(drawn - current)) {
                    drawn = -1;
                    draw(current);
                }
                done();
            };
            img.onerror = done;
            img.src = src(i);
        };
        const startLoading = () => {
            if (started) return;
            started = true;
            for (let k = 0; k < CONCURRENT_LOADS; k++) loadNext();
        };

        // el primer frame siempre, para que el canvas nunca quede vacío
        const first = new Image();
        first.onload = () => {
            if (disposed) return;
            images[0] = images[0] || first;
            draw(current);
        };
        first.src = src(0);
        queued.delete(0);
        order.splice(order.indexOf(0), 1);

        resize();

        // ---------- scroll ----------
        const trigger = ScrollTrigger.create({
            trigger: section,
            start: START_AT,
            end: "bottom bottom",
            scrub: 0.4,
            onUpdate: (self) => {
                current = Math.round(self.progress * (total - 1));
                draw(current);
            },
        });

        // empezar a bajar el resto cuando la sección se acerca a la pantalla
        const preload = ScrollTrigger.create({
            trigger: section,
            start: "top bottom+=150%",
            end: "bottom top-=100%",
            onToggle: (self) => self.isActive && startLoading(),
        });
        if (preload.isActive) startLoading();

        // la página carga imágenes y carruseles después: recalcular posiciones si cambia el alto
        let refreshTimer: ReturnType<typeof setTimeout> | undefined;
        const ro = new ResizeObserver(() => {
            clearTimeout(refreshTimer);
            refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
        });
        ro.observe(document.body);

        let resizeRaf = 0;
        const onResize = () => {
            cancelAnimationFrame(resizeRaf);
            resizeRaf = requestAnimationFrame(resize);
        };
        window.addEventListener("resize", onResize);

        return () => {
            disposed = true;
            trigger.kill();
            preload.kill();
            ro.disconnect();
            clearTimeout(refreshTimer);
            cancelAnimationFrame(resizeRaf);
            window.removeEventListener("resize", onResize);
            first.onload = null;
            pending.forEach((img) => {
                img.onload = img.onerror = null;
                img.src = "";
            });
        };
    }, [product, variant, total, fit]);

    return (
        <div>
            <section ref={sectionRef} className="frames flex flex-col">
                <div className="holder">
                    <canvas
                        ref={canvasRef}
                        className={variant === "web" ? "mb-0" : "mb-16"}
                        role="img"
                        aria-label={`Animación del ventilador ${product.toUpperCase()}`}
                    />
                </div>
                {/* Los bloques de la "story" mantienen el alto/espaciado del diseño original */}
                {variant === "web" ? (
                    <div className="story text-3xl mr-0 lg:text-5xl">
                        <div className={`relative ${storyClassName}`} />
                    </div>
                ) : (
                    <div className="story text-3xl mr-0 lg:text-5xl">
                        <div>
                            <div />
                        </div>
                        <div className="m-auto" />
                        <div />
                        <div />
                    </div>
                )}
            </section>
        </div>
    );
}
