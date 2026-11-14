"use client";
import { useEffect, useState, UIEvent } from "react";
import Image from "next/image";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./styles.css";

import { Chip } from "@nextui-org/chip";
import { Reveal } from "@/components/revealFramemotion";

import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.cjs.jsx";

import Lottie from "lottie-react";
import animationData from "../../public/lottie/ventilador.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useScroll } from "framer-motion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";

//       lottieObj,
//       ],

export default function VideoScrubber() {

    useEffect(() => {
    require("./scrubbing"); 
    return () => {};
    }, []);

    return (
        <div className="">
                <section class="vid" id="video-ventilador"  >
                    <div class="holder">
                        <video
                            playsinline
                            muted
                            loop
                            autoplay="autoplay"
                            autobuffer
                            preload="auto"
                            id="video"
                        >
                            <source
                                src="../img/solerpalau/rls/video/rls.mkv"

                            />
                        </video>
                    </div>

                    <div class="story text-5xl">
                    </div>
                </section>
        </div>
    );
}
