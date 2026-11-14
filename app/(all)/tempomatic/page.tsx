"use client";

import { Image } from "@nextui-org/image";
import { itemsNavTempomatic } from "@/public/data/navbarData";
import CardDisplaySypHome from "@/components/navbar/cardDisplaySypHome";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { EscribinosButton } from "@/components/custonButtons/escribinos";
import { Divider } from "@nextui-org/react";
import { useIsDesktop } from "@/hooks/useIsDesktop";

interface ItemsNavbar {
    key: string;
    label: string[];
    labelShort: string;
    img: string;
    href: string;
}

export default function TempomaticPage() {

    const BigScreen = useIsDesktop();

    const handleEmailClick = () => {
        const email = 'info@electroterma.com.ar';
        const subject = 'Consulta sobre equipamiento';
        const body = 'Hola! Me gustaria hacer una consulta sobre equipamiento de Electroterma';
    
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    
        window.open(mailtoLink, '_blank');
    };

    return (
        <main className="flex flex-col h-full items-center justify-center gap-4 pb-4 md:pb-10 bg-[url('/svg/ondasTempomatic.svg')] bg-fill
        bg-[center_top_-64vw] md:bg-[center_top_-32vw] lg:bg-[center_top_20vw] bg-no-repeat overflow-hidden">

            {/* ------------- 3 columnas diferenciales superiores ------------- */}
            <section className="w-full px-[3%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="../img/tempomatic/imgbanner/SolerPalauHome1.webp"
                    width="100%"
                />
            </section>
            {/* -------------PARRAFO CON COMILLAS ------------- */}

            <section className="relative w-full pt-6 px-[3%] lg:mt-24 lg:mb-20 text-center font-lexend text-[2.9vw] lg:text-[1.6vw] overflow-hidden text-[#787878]">
                {/* -------------PARRAFO CON COMILLAS WEB ------------- */}

                {BigScreen ? 
                    <article>
                        
                        <div className="z-20 absolute 
                            top-[26%] xm:top-[24%] sm:top-[8%] md:top-[12%] lg:top-[5%] xl:top-[1%]  2xl:top-[0%] 
                            left-[0%] lg:left-[20%] xl:left-[20%] 2xl:left-[20.5%]
                            w-[4vw] 
                            ">
                        <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="../../img/tempomatic/imgbanner/comillas.png"
                                width="100%"
                            />

                        </div>

                        <span className="">TEMPOMATIC es nuestra línea de productos HVAC, estándar como </span><br/>
                        <span className="">personalizado, que ofrece soluciones eficientes para diversas </span><br/>
                        <span className="">industrias, respaldadas por la confiabilidad y solidez de </span><br/>
                        <span className="">nuestro equipo de ingeniería&quot;</span><br/>

                    </article>
                :
                
                    <article className="text-[3.0vw]">
                {/* -------------PARRAFO CON COMILLAS MOBILE------------- */}
                        
                        <div className="z-20 absolute 
                            top-[23%] xm:top-[24%] sm:top-[8%] md:top-[12%] lg:top-[5%] 
                            left-[8.5%] lg:left-[20%] 
                            w-[5vw] 
                            ">
                        <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="../../img/tempomatic/imgbanner/comillas.png"
                                width="100%"
                            />

                        </div>

                        <span className="">TEMPOMATIC es nuestra línea de productos HVAC, </span><br/>
                        <span className="">estándar como personalizado, que ofrece </span><br/>
                        <span className="">soluciones eficientes para diversas industrias,  </span><br/>
                        <span className="">respaldadas por la confiabilidad y solidez de </span><br/>
                        <span className="">nuestro equipo de ingeniería&quot;</span><br/>

                    </article>
                }
                <div className="">
                        <div>

                        </div>

                    </div>
            </section>

            {/* ------------- Barra de navegacion S&P ------------- */}
            <section className="z-0  h-full w-[100%]  md:mt-2 overflow-hidden ">
                
                <div className="flex justify-center contaainn  w-max mx-auto mt-6 lg:mt-14 gap-2  rounded-[38px] border-1 border-gray-100 bg-[#FFFFFF]  p-4">
                    
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4   "> 
                    {itemsNavTempomatic?.map((item) => (
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

            {/* ------------- Botonera ------------- */}

            <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-4/5 ">
					<div className=" px-auto  flex h-[150px] lg:h-[250px] items-center mt-10 md:mt-2 space-x-2 lg:space-x-10  text-[12px] lg:text-3xl text-center text-[#4C4B4B]">
						<div>
							<h1 className="w-mx px-1">Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información."}
                            // Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion
                            />
						</div>

						<Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="w-mx px-1">Comprá en</h1>
							<h1>nuestra tienda</h1><br/>

                            <TiendaButton size={BigScreen ? 40 : 15} screen={BigScreen ? "xl" : "xs"}/>
						</div>
                        <Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
							<h1 className="w-max px-0.5">Escribinos a través</h1>
							<h1>de nuestro mail</h1><br/>

                            <EscribinosButton size={BigScreen ? 42 : 15} screen={BigScreen ? "xl" : "xs"} />
						</div>

					</div>
                        
                </section>
            </section>

            {/* ------------- Asesoramiento ------------- */}

            {/* ------------- Imagenes presentacion ------------- */}
            <section className="w-full flex items-center justify-center mx-auto p-0 bg-transparent space-x-0">
                    <Image
                        alt="Otam Logo"
                        radius="none"
                        src="../img/tempomatic/home/1.webp"
                        width={1285}
                    />
                    <Image
                        alt="Otam Logo"
                        radius="none"
                        src="../img/tempomatic/home/2.webp"
                        width={870}
                    />
                </section>
        </main>
    );
}

