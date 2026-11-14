"use client";
import dynamic from "next/dynamic";
import animationData from "@/public/lottie/ventilador.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
