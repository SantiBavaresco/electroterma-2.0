"use client";

import { useEffect, useState } from "react";

export const DESKTOP_QUERY = "(min-width: 768px)";

/**
 * `true` en pantallas de 768px o más. En el render del servidor (y el primero
 * del cliente) devuelve `false`, igual que la lógica que tenía cada página.
 */
export function useIsDesktop(): boolean {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(DESKTOP_QUERY);
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

        setIsDesktop(mediaQuery.matches);
        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return isDesktop;
}
