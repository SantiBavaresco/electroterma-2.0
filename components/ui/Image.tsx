import { forwardRef, type CSSProperties, type ImgHTMLAttributes } from "react";
import { image } from "@nextui-org/theme";
import clsx from "clsx";
import imageSizes from "@/lib/imageSizes.json";

const SIZES = imageSizes as unknown as Record<string, [number, number]>;

type Radius = "none" | "sm" | "md" | "lg" | "full";
type Shadow = "none" | "sm" | "md" | "lg";

export interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
    src?: string;
    width?: number | string;
    height?: number | string;
    radius?: Radius;
    shadow?: Shadow;
    isZoomed?: boolean;
    removeWrapper?: boolean;
    classNames?: { wrapper?: string; img?: string; zoomedWrapper?: string };
}

/** Tamaño real de una imagen de /public, si está en lib/imageSizes.json */
export function getImageSize(src?: string): [number, number] | undefined {
    if (!src) return undefined;
    const path = src.replace(/^https?:\/\/[^/]+/, "").split(/[?#]/)[0];
    return SIZES[path] ?? SIZES[decodeURI(path)];
}

/**
 * Reemplazo de `Image` de NextUI que genera las mismas clases y estructura,
 * pero:
 *  - no espera a que React hidrate para mostrar la imagen (NextUI la tenía en
 *    opacity-0 hasta confirmar la carga por JS, y mostraba un "skeleton" gris);
 *  - reserva el alto de la imagen antes de que cargue (ancho/alto reales desde
 *    lib/imageSizes.json), así el resto de la página no se mueve;
 *  - carga diferida (`loading="lazy"`) por defecto para lo que está más abajo.
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
    {
        src,
        width,
        height,
        radius,
        shadow,
        isZoomed,
        removeWrapper,
        className,
        classNames,
        style,
        loading = "lazy",
        decoding = "async",
        ...rest
    },
    ref,
) {
    const slots = image({ radius, shadow, isZoomed, showSkeleton: false });
    const imgClass = slots.img({ class: clsx(className, classNames?.img) });
    const size = getImageSize(src);
    // Con padding/borde en la imagen, `aspect-ratio` se aplicaría a la caja entera
    // (border-box) y no a la foto: ahí sólo se usa la proporción natural ("auto").
    const hasBox = /(^|\s)([\w-]+:)*(p[xytrbl]?|border(-[xytrbl])?)-\S/.test(imgClass);

    // `contain-intrinsic-size` + `contain: size` hacen que el navegador use el tamaño
    // real de la imagen desde antes de bajarla (también dentro de flex/columnas que se
    // ajustan al contenido), y `aspect-ratio` calcula el alto a partir del ancho.
    const imgStyle: CSSProperties | undefined = !size
        ? style
        : hasBox
          ? { aspectRatio: `auto ${size[0]} / ${size[1]}`, ...style }
          : {
                aspectRatio: `${size[0]} / ${size[1]}`,
                containIntrinsicSize: `${size[0]}px ${size[1]}px`,
                contain: "size",
                ...style,
            };

    const img = (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            ref={ref}
            src={src}
            data-loaded="true"
            className={imgClass}
            width={width ?? size?.[0]}
            height={height ?? size?.[1]}
            loading={loading}
            decoding={decoding}
            style={imgStyle}
            {...rest}
        />
    );

    if (removeWrapper) return img;

    const maxWidth = width ? (typeof width === "number" ? `${width}px` : width) : "fit-content";

    return (
        <div className={slots.wrapper({ class: classNames?.wrapper })} style={{ maxWidth }}>
            {" "}
            {isZoomed ? <div className={slots.zoomedWrapper({ class: classNames?.zoomedWrapper })}>{img}</div> : img}
        </div>
    );
});

export default Image;
