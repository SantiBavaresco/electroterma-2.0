"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import { Image } from "@nextui-org/image";
import "./styles1.css";

import { Chip } from "@nextui-org/chip";

import Lottie from "lottie-react";
import animationData from "../../public/lottie/ventilador.json";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { useScroll } from "framer-motion";

import { ConstruccionDuradera } from "@/public/svg/construccionDuradera";
import { EficienciaEnergetica } from "@/public/svg/eficienciaEnergetica";
import { FacilInstalacion } from "@/public/svg/facilInstalacion";
import { VersatilidadAplicacion } from "@/public/svg/versatilidadAplicacion";
import { DiferencialMaterialGalvanizado } from "../diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "../diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "../diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "../diferenciales/diferencialStockPermanente";

export default function FrameScrubber() {

    const frameRef = useRef(null);

    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const ventElement = document.getElementById("vent");
    let keyAttribute = ventElement.accessKey;
    console.log(keyAttribute);
    
    useEffect(() => {
        require("./scrubbingWeb");
        return () => {};
    }, []);

    return (
        <div className="" id="frame" ref={frameRef}>
            <section className="frames flex flex-col ">
                <div className="holder">
                    <canvas id="hero-lightpass" className="mb-0" />
                </div>
                
                <div className="story text-3xl mr-0 lg:text-5xl ">
                  
                    <div className={`relative ${keyAttribute === "tda" || "pt-32"} `}>

                   { (keyAttribute === "home") ? 
                   <div className="fixed ">
                        <Image  
                        classNames={{ wrapper: "z-100 min-w-full h-full -translate-y-[42.60vw] "} }
                        alt="Diagonal de diferenciales naranjas"
                        src="../../img/home/home.png"
                        width={"100%"}
                    /></div>
                    : <></>
                    }
                    </div>

                </div>
            </section>
        </div>
    );
}
