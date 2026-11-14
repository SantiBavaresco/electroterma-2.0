"use client";
import { useEffect, useState, UIEvent, useRef } from "react";
import Image from "next/image";
import "./styles1.css";

import { Chip } from "@nextui-org/chip";

export default function FrameScrubber() {

    const frameRef = useRef(null);

    useEffect(() => {
        require("./scrubbing");
        return () => {};
    }, []);

    return (
        <div className="" id="frame" ref={frameRef}>
            <section class="frames flex flex-col ">
                <div class="holder">
                    <canvas id="hero-lightpass" className="mb-16" />
                </div>

                <div class="story text-3xl mr-0 lg:text-5xl ">
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
