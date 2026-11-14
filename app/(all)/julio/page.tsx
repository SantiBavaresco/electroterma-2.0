"use client";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/ventilador.json";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10">

            Julio
            <div className="w-[200px w-2/3 lg:w-[350px">
                    <Lottie
                        animationData={animationData}
                    />
                </div>
            
        </section>
    );
}
