import React from "react";

interface ImgLable {
    textLable?: string;
    textColor?: string;
}

interface ImgData {
    imgName?: string;
    imgLable?: ImgLable[];
}

interface Props {
    url?: string;
    imgInfo?: ImgData[];
}

// Las imágenes del banner son de 1280×500
const IMG_WIDTH = 1280;
const IMG_HEIGHT = 500;
// Velocidad del carrusel original (react-slick): 10 segundos por imagen
const SECONDS_PER_IMAGE = 10;

/**
 * Banner con imágenes que se desplazan de forma continua hacia la izquierda.
 *
 * Antes era react-slick con `variableWidth`, que recalculaba anchos a medida que
 * cargaban las imágenes y daba tirones. Ahora es una animación CSS (transform,
 * acelerada por GPU) sobre dos copias de la tira de imágenes, con el tamaño de
 * cada imagen reservado desde el principio.
 */
const SimpleSlider: React.FC<Props> = ({ url, imgInfo = [] }) => {
    const slides = (copy: number) =>
        imgInfo.map((item, index) => (
            <div key={`${copy}-${index}-${item.imgName}`} aria-hidden={copy === 1 || undefined}>
                {/* inline-block como lo hacía react-slick: mantiene el mismo alto total */}
                <div className="relative max-h-[80%]" style={{ width: "100%", display: "inline-block" }}>
                    <div className="z-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            className="block m-auto w-auto max-w-none h-[min(500px,42vh)] md:h-[min(500px,82vh)]"
                            alt={copy === 0 ? `Imagen ${index}` : ""}
                            src={`${url}${item.imgName}.webp`}
                            width={IMG_WIDTH}
                            height={IMG_HEIGHT}
                            loading={index < 2 && copy === 0 ? "eager" : "lazy"}
                            fetchPriority={index === 0 && copy === 0 ? "high" : undefined}
                            decoding="async"
                        />

                        <div className="absolute px-6 z-10 bottom-[0%] rounded-tl-[42px] flex flex-col justify-start items-center bg-white p-1">
                            <div className="flex flex-col justify-start items-start text-sm lg:text-3xl py-4 lg:py-6 2xl:py-10">
                                {item.imgLable?.map((label, i) => (
                                    <h1
                                        className={`text-${label.textColor || "livered-title"} font-bold font-lexend`}
                                        key={`${i}-${label.textLable}`}
                                    >
                                        {label.textLable}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="overflow-hidden flex flex-grow min-h-full pointer-events-none">
            <div className="banner-marquee" style={{ animationDuration: `${imgInfo.length * SECONDS_PER_IMAGE}s` }}>
                {slides(0)}
                {slides(1)}
            </div>
        </div>
    );
};

export default SimpleSlider;
