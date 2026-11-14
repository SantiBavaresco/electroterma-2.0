"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
}

/** Aparece con un fade + desplazamiento cuando entra en pantalla (y se oculta al salir). */
export const Reveal: React.FC<Props> = ({ children, width = "fit-content", delay, duration }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: "some" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start({
                opacity: 0,
                translateY: "10%",
                transition: { duration: 0.3, ease: "easeInOut" },
            });
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, scale: 1, translateY: "10%" },
                    visible: { opacity: 1, scale: 1, translateY: "0%" },
                }}
                exit="hidden"
                initial="hidden"
                animate={controls}
                transition={{ duration, delay, ease: "easeIn" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
