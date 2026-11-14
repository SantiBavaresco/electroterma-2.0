"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import { Image } from "@nextui-org/image";
import "./styles1.css";

import { Chip } from "@nextui-org/chip";

export default function FrameScrubber() {

    const frameRef = useRef(null);

    const html = document.documentElement;
    const canvas = document.getElementById("hero-lightpass");
    const ventElement = document.getElementById("vent");
    let keyAttribute = ventElement.accessKey;

    useEffect(() => {
        require("./scrubbingWeb");
        return () => {};
    }, []);

    return (
        <div className="w-[99vw]" id="frame" ref={frameRef}>
            <section class="frames flex flex-col ">
                <div class="holder">
                    <canvas id="hero-lightpass" className="mb-0" />
                </div>
                
                <div class="story text-3xl mr-0 lg:text-5xl ">

                </div>
            </section>
        </div>
    );
}
