"use client";

import { Image } from "@nextui-org/image";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { EscribinosButton } from "@/components/custonButtons/escribinos";
import { Divider } from "@nextui-org/react";
import { VinietaNaranjaSVG } from "@/public/svg/vinietaNaranja";
import { DiferencialDisenioPersonalizado } from "@/components/diferenciales/diferencialDisenioPersonalizado";
import { DiferencialDistribucionHomogenea } from "@/components/diferenciales/diferencialDistribucionHomogenea";
import { DiferencialLavable } from "@/components/diferenciales/diferencialLavable";
import { DiferencialBajoCosto } from "@/components/diferenciales/diferencialBajoCosto";
import { DiferencialTratamientoAntibacterial } from "@/components/diferenciales/diferencialTratamientoAntibacterial";
import { DiferencialResistenteFuego } from "@/components/diferenciales/diferencialResistenteFuego";
import { DiferencialAmbienteCorrosivo } from "@/components/diferenciales/diferencialAmbienteCorrosivo";
import { DiferencialEficienciaEnergetica } from "@/components/diferenciales/diferencialEficienciaEnergetica";
import { DiferencialMaterialesInmunes } from "@/components/diferenciales/diferencialMaterialesInmunes";
import { useIsDesktop } from "@/hooks/useIsDesktop";


export default function DTIPage() {

    const TamanioDiferenciales = 100;
    const TamanioDiferencialesMobile = 70;

    const BigScreen = useIsDesktop();


    return (
        <main className="flex flex-col h-full items-center justify-center gap-0 pb-4 md:pb-10 
        overflow-hidden">

            {/* ------------- Banner Inicial ------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src="/img/dti/DtiDuctosTextilesBanner.webp"
                    width="100%"
                />
            </section>

            {/* ------------- Electroterma-DTI ------------- */}
            <section className="w-full flex justify-between px-[3%] mt-4">
                <Image
                    alt="Home banner 1"
                    className=" pt-8 lg:pt-24 pr-4 lg:pl-[12%]"
                    radius="none"
                    src="/img/electrotermalogoletrasNoPadding.png"
                    width={`${BigScreen ? 80 : 80}%`}
                />
                <Image
                    alt="Home banner 1"
                    className=" "
                    radius="none"
                    src="/img/dti/DtiDuctosTextilesLogo.png"
                    width={`${BigScreen ? 80 : 80}%`}
                />
            </section>

            {/* ------------- Distribución de aire ------------- */}
            <section className="w-full flex justify-between pl-[11%] lg:pl-[9%] mb-2 lg:mb-0 mt-0 lg:mt-4">
                <h1 className="text-[2.5vw] lg:text-[2.0vw] font-lexend-bold">Distribución de aire</h1>
            </section>

            {/* ------------- DUCTOS TEXTILES ------------- */}
            <section className="w-full flex flex-row items-center justify- pl-[5vw] -mt-4">
                <VinietaNaranjaSVG css=" h-[20px] w-[10px] md:h-[50px] md:h-[30px] lg:h-[60px] lg:w-[55px]"/>
                <h1 className="text-[7.5vw]  lg:text-[5.0vw] font-nunito-bolder text-livered-title ml-3">DUCTOS TEXTILES</h1>
            </section>

            {/* -------------PARRAFO CON COMILLAS ------------- */}

            <section className="relative w-full pt-6 px-[3%] lg:mt-10 lg:mb-20 text-center font-lexend text-[2.9vw] lg:text-[1.6vw] overflow-hidden text-[#4C4B4B]">
                {/* -------------PARRAFO CON COMILLAS WEB ------------- */}

                {BigScreen ? 
                    <div>
                        
                        <div className="z-20 absolute 
                            top-[26%] xm:top-[24%] sm:top-[8%] md:top-[12%] lg:top-[5%] xl:top-[2.5%]  2xl:top-[0.5%] 
                            left-[0%] lg:left-[21%] xl:left-[20%] 2xl:left-[20.5%]
                            w-[4vw] 
                            ">
                        <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="/img/dti/comillas.png"
                                width="100%"
                            />

                        </div>

                        <span className="">En Electroterma, hemos formado una alianza estratégica con <span className="font-nunito-bolder">DTI</span>,</span><br/>
                        <span className="">líder en ductos textiles, para ofrecer soluciones de distribución</span><br/>
                        <span className="">de aire que marcan la diferencia.</span><br/>
                        <br/>
                        <span className="">Nuestros equipos de diseño e ingeniería crean en conjunto <span className="font-nunito-bolder">sistemas de HVAC</span></span><br/>
                        <span className="">personalizados que responden a las necesidades más exigentes.</span><br/>

                    </div>
                :
                
                    <div className="text-[3.0vw]">
                {/* -------------PARRAFO CON COMILLAS MOBILE------------- */}
                        
                        <div className="z-20 absolute 
                            top-[15%] xm:top-[10%] sm:top-[6%] md:top-[12%] lg:top-[5%] 
                            left-[3.5%] lg:left-[20%] 
                            w-[5vw] 
                            ">
                         <Image  
                                className="z-20 mt-0"
                                alt="Background Tempomatic"
                                radius="none"
                                src="/img/dti/comillas.png"
                                width="100%"
                            />

                        </div>

                        <span className="">En Electroterma, hemos formado una alianza estratégica </span><br/>
                        <span className=""> con <span className="font-nunito-bolder">DTI</span>, líder en ductos textiles, para ofrecer soluciones </span><br/>
                        <span className="">de distribución de aire que marcan la diferencia.</span><br/>
                        <br/>
                        <span className="">Nuestros equipos de diseño e ingeniería crean </span><br/>
                        <span className=""> en conjunto <span className="font-nunito-bolder">sistemas de HVAC</span> personalizados</span><br/>
                        <span className=""> que responden a las necesidades más exigentes.</span><br/>
                    </div>
                }
                <div className="">
                        <div>

                        </div>

                    </div>
            </section>

            {/* ------------- IMG ------------- */}
            <section className="w-full px-[0%] mt-4">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`/img/dti/DtiDuctos${BigScreen ? "Textiles01.webp" : "Textiles01Mobile.png"}`}
                    width="100%"
                />
            </section>

            {/* ------------- Columna de diferenciales ------------- */}
            {BigScreen ? <>
            <section className=" w-[75%] grid grid-cols-2 gap-4 -mt-14 z-10">
                <div className="space-y-8">
                    <DiferencialDisenioPersonalizado size={TamanioDiferenciales} customWith={10} />
                    <DiferencialDistribucionHomogenea size={TamanioDiferenciales} customWith={10} />
                    <DiferencialLavable size={TamanioDiferenciales} customWith={10} />
                    <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="/img/dti/DtiDuctosTextiles02.png"
                        width="100%"
                    />
                </div>
                <div className="space-y-8 ">
                    <DiferencialBajoCosto size={TamanioDiferenciales} customWith={10} />
                    <DiferencialTratamientoAntibacterial size={TamanioDiferenciales} customWith={10} />
                    <DiferencialResistenteFuego size={TamanioDiferenciales} customWith={10} />
                    <DiferencialAmbienteCorrosivo size={TamanioDiferenciales} customWith={10} />
                    <DiferencialEficienciaEnergetica size={TamanioDiferenciales} customWith={10} />
                    <DiferencialMaterialesInmunes size={TamanioDiferenciales} customWith={10} />

                </div>

            </section>

            </>
            :<>
            <section className="w-full px-[5%] z-10 -mt-8 mb-4 space-y-4">
                <DiferencialDisenioPersonalizado size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialDistribucionHomogenea size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialLavable size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialBajoCosto size={TamanioDiferencialesMobile} customWith={10} />

            </section>
                <Image
                alt="Home banner 1 w-1/2"
                className=""
                radius="none"
                src="/img/dti/DtiDuctosTextiles02Mobile.png"
                width="100%"
                />
             <section className="w-full px-[5%] z-10 -mt-8 mb-4 space-y-4">
                <DiferencialTratamientoAntibacterial size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialResistenteFuego size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialAmbienteCorrosivo size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialEficienciaEnergetica size={TamanioDiferencialesMobile} customWith={10} />
                <DiferencialMaterialesInmunes size={TamanioDiferencialesMobile} customWith={10} />

            </section>
            </>
            }       
            {/* ------------- IMG ------------- */}
            <section className="w-full px-[5%] lg:px-[15%] mt-12">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`/img/dti/DtiDuctos${BigScreen ? "Textiles03" : "Textiles03Mobile"}.png`}
                    width="100%"
                />
            </section>

            {/* ------------- Electroterma ------------- */}
            <section className="w-full pl-[5%] pr-auto mt-12">
                <a href="/" target="_top">
                    <Image
                        alt="Home banner 1"
                        className=""
                        radius="none"
                        src="/img/electrotermalogoletrasNoPadding.png"
                        width={BigScreen ? "40%" : "50%"}
                    />
                </a>
            </section>

            {/* ------------- IMG ------------- */}
            <section className="w-full px-[0%] mt-4 lg:mt-12">
                <Image
                    alt="Home banner 1"
                    className="rounded-[44-px]"
                    radius="none"
                    src={`/img/dti/DtiDuctos${BigScreen ? "Textiles04.webp" : "Textiles04Mobile.png"}`}
                    width="100%"
                />
            </section>

            {/* ------------- Botonera ------------- */}

            <section className="w-full 2xl:w-2/3 mx-auto 2xl:mx-[3%] 2xl:-translate-x-10 lg:mb-10 lg:mt-10 font-nunito flex flex-col items-center lg:flex-row justify-center md:justify-around
                overflow-hidden">
                    
                <section className=" 2xl:w-1/2 ">
					<div className=" px-auto  flex h-[150px] lg:h-[250px] items-center mt-10 md:mt-2 space-x-2 lg:space-x-10  text-[12px] lg:text-3xl text-center text-[#4C4B4B]">
						<div>
							<h1 className="w-mx px-1">Contactá</h1>
							<h1>a un vendedor</h1><br/>

							<AsesoramietoButton size={BigScreen ? 42 : 14} screen={BigScreen ? "xl" : "md"}
                            link={"https://wa.me/5492236356756?text=Hola.%20visité%20tu%20página%20web%20y%20me%20gustaría%20más%20información%20sobre%20Ductos%20Textiles."}
                            // Hola,%20visite%20tu%20pagina%20web%20y%20me%20gustaria%20mas%20informacion
                            />
						</div>

						<Divider orientation="vertical" className="bg-[#EDEDED]" />
						<div>
                            <>
							<h1 className="w- px-0.5">Escribinos a través</h1>
							<h1 className="pr-auto">de nuestro mail</h1><br/>
                            </>
                            <EscribinosButton size={BigScreen ? 42 : 14} screen={BigScreen ? "xl" : "md"} />
						</div>

					</div>
                        
                </section>
            </section>

            {/* ------------- Asesoramiento ------------- */}

            {/* ------------- Imagenes presentacion ------------- */}
            <section className="w-full flex items-center justify-center mx-auto p-0 bg-transparent space-x-0">
                </section>
        </main>
    );
}

