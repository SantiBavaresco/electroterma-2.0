"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import Image from "next/image";
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

    useEffect(() => {
        require("./scrubbing");
        return () => {};
    }, []);

    return (
        <div className="" id="frame" ref={frameRef}>
            <section className="frames flex flex-col ">
                <div className="holder">
                    <canvas id="hero-lightpass" className="mb-16" />
                </div>

                <div className="story text-3xl mr-0 lg:text-5xl ">
                    <div>
                        <div className="">

                                <span className="text-end  ">
                                    {" "}
                                </span>

                        </div>
                    </div>
                    <div className="m-auto">

                            <span className="text-end  ">
                                {" "}
                            </span>

                    </div>
                    <div>

                            <span className="text-end  ">
                                {" "}
                            </span>
 
                    </div> 

                    <div>
                    </div>
                </div>
            </section>
        </div>
    );
}
