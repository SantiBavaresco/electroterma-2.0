"use client";

import { Image } from "@nextui-org/image";
import { itemsNavSolerPalauHome } from "@/public/data/navbarData";
import CardDisplaySypHome from "@/components/navbar/cardDisplaySypHome";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { EscribinosButton } from "@/components/custonButtons/escribinos";
import { useIsDesktop } from "@/hooks/useIsDesktop";


export default function SolerPalauPage() {

    const BigScreen = useIsDesktop();


    return (
        <main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 bg-[url('/svg/ondasSolerPalau.svg')] bg-fill
        bg-[center_top_36vw] bg-no-repeat overflow-hidden">

            {/* ------------- 3 columnas diferenciales superiores ------------- */}
            <section className="w-full px-[3%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="/img/solerpalau/imgbanner/SolerPalauHome1.webp"
                    width="100%"
                />
            </section>
            <section className="relative w-full px-[3%] mt-10 mb-10 text-center font-lexend text-[3.0vw] lg:text-[1.6vw] overflow-hidden text-[#787878]     ">
                <article>
                    
                    <div className="absolute 
                        -top-[0%] xm:-top-[0%] sm:top-[6%] md:-top-[0%] lg:-top-[10%] xl:-top-[9%]  2xl:-top-[9%] 
                        left-[6%] lg:left-[26%] xl:left-[26%] 2xl:left-[25.5%]
                        w-[4vw] lg:w-[3vw] ">
                        <Image  
                            className=" mt-0"
                            alt="Background Tempomatic"
                            radius="none"
                            src="/img/solerpalau/imgbanner/comillas.png"
                            width="100%"
                        />

                    </div>

                    <span className="">Gracias a <span className=" text-livered-title">nuestra alianza</span>, garantizamos soluciones de </span><br/>
                    <span className="">ventilación innovadoras y eficientes para asegurar una</span><br/>
                    <span className=""> óptima calidad del aire en todos tus espacios&quot;</span><br/>

                </article>
                <div className="">
                        <div>

                        </div>

                    </div>
            </section>

            {/* ------------- Barra de navegacion S&P ------------- */}
            <section className="z-0  h-full w-[100%]  md:mt-2 overflow-hidden ">
                
                <div className="flex justify-center contain  w-max mx-auto mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                    {itemsNavSolerPalauHome?.map((item) => (
                            <a
                                className=""
                                color="foreground"
                                href={item.href}
                                key={item.key}
                            >
                                <CardDisplaySypHome data={item}  actual={""}/>

                            </a>
                        ))}  
                        </div>
                    </div>

            </section>

            {/* ------------- Asesoramiento ------------- */}

            <section className="md:w-3/4 mx-[3%] mb-10 mt-4 lg:mt-16  flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                    <section className=" w-full lg:w-2/3 ">
                        <div className="mx-[0%] md:mx-[3%] w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-2 gap-[14%] ">
                            
                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                            <EscribinosButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} />

                        </div>    
                    </section>
                        </section>

            {/* ------------- Imagenes presentacion ------------- */}
            {BigScreen ? <section className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/1.webp"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/2.webp"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/3.webp"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/4.webp"
                        width={450}
                    />
                </section>
            :
            <section className="w-full flex items-center justify-center mx-auto p-4 bg-transparent space-x-2">
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/3.webp"
                        width={450}
                    />
                    <Image
                        alt="Otam Logo"
                        src="/img/home/imgHome/4.webp"
                        width={450}
                    />
                </section>
            }
        </main>
    );
}
