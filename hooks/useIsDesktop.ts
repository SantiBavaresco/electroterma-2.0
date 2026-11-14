"use client";

import { useSyncExternalStore } from "react";

export const DESKTOP_QUERY = "(min-width: 768px)";

const subscribe = (onChange: () => void) => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
};

const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;
// El HTML del servidor se genera con la versión mobile (igual que antes)
const getServerSnapshot = () => false;

/**
 * `true` en pantallas de 768px o más.
 *
 * Al hidratar arranca en `false` (como el HTML del servidor) y se corrige enseguida;
 * en las navegaciones dentro del sitio ya arranca con el valor correcto, así que
 * no se ve la versión mobile por un instante al cambiar de página.
 */
export function useIsDesktop(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
