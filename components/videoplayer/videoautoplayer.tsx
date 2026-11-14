import React from "react";

interface Props {
    url: string;
    width?: string;
    /** Proporción del video ("ancho / alto") para reservar su lugar antes de que cargue */
    aspectRatio?: string;
}

// Mismo truco que components/ui/Image: el video ocupa su tamaño real desde el principio
function reserveSize(aspectRatio: string): React.CSSProperties {
    const [w, h] = aspectRatio.split("/").map((n) => n.trim());
    return { aspectRatio, contain: "size", containIntrinsicSize: `${w}px ${h}px` };
}

/** Video de fondo: se reproduce solo, en loop y sin sonido. */
const VideoAutoPlayer: React.FC<Props> = ({ url, width, aspectRatio }) => {
    return (
        <video
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            src={url}
            width={width || "100%"}
            style={aspectRatio ? reserveSize(aspectRatio) : undefined}
        />
    );
};

export default VideoAutoPlayer;
