"use client";
import { Image } from "@nextui-org/image";


import { habitatData } from "@/public/data/soler&palau/habitatData";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { ManualButton } from "@/components/custonButtons/manual";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function HabitatInlinePage() {
    const images = [
        {
          original: "/img/solerpalau/habitat/imgDemo/1.jpg",
        },
        {
          original: "/img/solerpalau/habitat/imgDemo/2.jpg",
        },
        {
          original: "/img/solerpalau/habitat/imgDemo/3.jpg",
        },
      ];


    const BigScreen = useIsDesktop();


    const DobleFlechaRoja = <span className="text-livered">»</span>

    const mobileImagesCol = [];
    for (let i = 0; i < 5; i++) {
        mobileImagesCol.push(
            <Image
            key={i}
            alt="Electroterma Logo"
            className=""
            src={`/img/solerpalau/habitat/inline/SolerPalauHabitatInline${i+1}.png`}
            width="100%"
            />
        );
    }

    return (
        <main className="flex flex-col items-center justify-center gap-1 md:gap-4 pb-4 md:pb-10 overflow-hidden ">
            {/* ------------- VIDEO INTRO ------------- */}

            <section className="w-full flex flex-row">
                <div className="w-1/2 h-full">
                        <Image
                            alt="Banner 1"
                            className=""
                            radius="none"
                            src="/img/solerpalau/habitat/imgBanner/SolerPalauHabitatExtractorBanner1.webp"
                            width="100%"
                        />
                    </div>
                <div className="w-1/2 ">
                        <Image
                            alt="Banner 2"
                            className=""
                            radius="none"
                            src="/img/solerpalau/habitat/imgBanner/SolerPalauHabitatExtractorBanner2.webp"
                            width="120%"
                        />
                    </div>    
            </section>

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93%] lg:max-h-[93%] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    
                </div>
            </section>

            {/* ------------- Consultanos ------------- */}

            <section className="flex flex-col px-[3%] w-full">

                {/* ------------- Logos Electo-S&P ------------- */}
                <section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[450px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="/img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] mr-10 xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="/img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm xl:text-lg">Distribuidor en Argentina</span>
                    </div>
                </section>

                {/* ------------- Parrafo Habitat ------------- */}
                <article className=" mx-[8%] flex lg:mb-10 flex-col items-start justify-center font-nunito  ">
                    <h2 className="text-livered-title text-[4.5vw] md:text-[2vw] xl:text-[3.5vw]"> 
                        {habitatData.extractorData.subTitle1}
                        <span className=" underline decoration-[3px] underline-offset-8">{habitatData.extractorData.subTitle2}</span>
                    </h2>
                    <p className="text-[#575756] text-[3.8vw] md:text-[2vw] xl:text-[1.5vw]">
                        <br/>
                        <span>{habitatData.extractorData.p1}</span>
                        {!BigScreen || <br/>}
                        <span>{habitatData.extractorData.p2}</span>
                    </p>
                </article>
                
                <section className="flex items-center justify-center text-livered-title my-4 lg:my-10 pt-4">
                    <div className="text-center">
                        <h1 className="font-nunito-thin text-[4.5vw] md:text-[4vw] xl:text-[3.0vw]   ">Conoce toda la línea de extractores de baño</h1>
                    </div>
                </section>

                {/* ------------- Titulo post parrafo ------------- */}

                {/* ------------- DECOR ------------- */}
                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="p-3 mx-[3%] flex flex-col font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.4vw] 2xl:text-[1.3vw]">
                        {/* ------------- DECOR ------------- */}

                        <div className=" flex w-[50%] mx-aut ml-[34%] mr-auto ">
                            <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor01.png"
                                    width="100%"
                                />
                            <h1 className=" my-auto text-livered-title font-nunito-thin text-[4.5vw] md:text-[2vw] xl:text-[6.5vw] 2xl:text-[3.5vw]">Decor</h1>

                        </div>

                        {/* ------------- Info Decor ------------- */}
                        <div className=" flex gap-4">
                            {/* ------------- COL 1 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor02.png"
                                    width="100%"
                                />
                                <article className="w-2/3 pl-2 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Compuerta antirretorno</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Evita la entrada de aire del exterior y las fugas de calefacción, cuando el extractor no está en funcionamiento. Se abre por la presión de aire.
                                    </p>

                                </article>
                            </div>
                            {/* ------------- COL 2 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mt-2"
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor00.png"
                                    width="100%"
                                />
                                <article className="w-full pl-2 my-auto text-bla">
                                    
                                        <h2 className="">{DobleFlechaRoja} Protector térmico para trabajar a temperaturas de hasta 40ºC.</h2>
                                        <h2 className="">{DobleFlechaRoja} Renueva el aire húmedo o contaminado de baños, pequeñas habitaciones y oficinas.</h2>
                                        <h2 className="">{DobleFlechaRoja} Modelo con temporizador regulable (mantiene el extractor en marcha entre 1 -30 minutos después de apagada la luz).</h2>
                                        <h2 className="">{DobleFlechaRoja} Aislamiento y protección II-IP45 protección contra objetos con un diámetro superior a 1mm y resistente a chorros de agua.</h2>

                                </article>
                            </div>

                        </div>
                    </section>
                    </>
                    : <>
                    {/* ------------- MOBILE ------------- */}

                    <section className="p-3 justify-center  items-center gap-y-6 h-full mx-[3%] flex flex-col font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.4vw] 2xl:text-[1.3vw]">
                        {/* ------------- DECOR ------------- */}

                        <div className=" flex w-[100%] mx-aut mr-auto">
                            <div className="w-1/3">
                            <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor01.png"
                                    width="100%"
                                />
                            </div>
                            <h1 className=" pl-2 my-auto text-livered-title font-nunito text-[7.5vw] md:text-[2vw] xl:text-[6.5vw] 2xl:text-[3.5vw]">Decor</h1>

                        </div>

                        <div className=" flex w-full">
                                <div className="w-1/3 h-full my-auto">
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2 "
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor02.png"
                                        width="100%"
                                />
                                </div>
                                <article className="w-2/3 pl-4 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Compuerta antirretorno</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Evita la entrada de aire del exterior y las fugas de calefacción, cuando el extractor no está en funcionamiento. Se abre por la presión de aire.
                                    </p>

                                </article>
                            </div>
                            <div className=" flex w-full">
                                <div className="w-1/ h-1/2 mb-auto"> 
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2"
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor00.png"
                                        width="65%"
                                    />
                                </div>
                                <article className="w-full pl-2 my-auto text-bla">
                                        <h2 className="">{DobleFlechaRoja} Protector térmico para trabajar a temperaturas de hasta 40ºC.</h2>
                                        <h2 className="">{DobleFlechaRoja} Renueva el aire húmedo o contaminado de baños, pequeñas habitaciones y oficinas.</h2>
                                        <h2 className="">{DobleFlechaRoja} Modelo con temporizador regulable (mantiene el extractor en marcha entre 1 -30 minutos después de apagada la luz).</h2>
                                        <h2 className="">{DobleFlechaRoja} Aislamiento y protección II-IP45 protección contra objetos con un diámetro superior a 1mm y resistente a chorros de agua.</h2>
                                </article>
                            </div>

                    </section>

                    </>
                }
                
                {/* ------------- Boton manual ------------- */}
                <section className="lg:mx-[4%] mx-auto lg:ml-auto">
                    <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"/manuales/habitatExtractor.pdf"} dwName={"Habitat Extractor Manual.pdf"}/>

                </section>

                {/* ------------- Tabla ------------- */}
                <section className={`hidden lg:flex flex-col  items-start my-10 mx-[3%] gap-4 `}>
                    <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractorTabla1.jpg"
                                    width="100%"
                                />
                </section>

                {/* ------------- SILENT ------------- */}
                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="p-3 mx-[3%] flex flex-col font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.4vw] 2xl:text-[1.3vw]">
                        {/* ------------- DECOR ------------- */}

                        <div className=" flex w-[50%] mx-aut ml-[34%] mr-auto ">
                            <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor03.png"
                                    width="100%"
                                />
                            <h1 className=" my-auto text-livered-title font-nunito-thin text-[4.5vw] md:text-[2vw] xl:text-[6.5vw] 2xl:text-[3.5vw]">Silent</h1>

                        </div>

                        {/* ------------- Info Silent 1 ------------- */}
                        <div className=" flex gap-4">
                            {/* ------------- COL 1 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor04.png"
                                    width="100%"
                                />
                                <article className="w-2/3 pl-2 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Compuerta antirretorno</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Evita la entrada de aire del exterior y las fugas de calefacción, cuando el extractor no está en funcionamiento. Se abre por la presión de aire.
                                    </p>

                                </article>
                            </div>
                            {/* ------------- COL 2 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor05.png"
                                    width="100%"
                                />
                                <article className="w-2/3 pl-2 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Silent-blocks elásticos</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Motor montado sobre Silent-blocks que absorben las vibraciones, evitando que se transmitan al exterior.
                                    </p>

                                </article>
                            </div>
                        </div>

                        {/* ------------- Info Silent 2 ------------- */}
                        <div className=" flex gap-4">
                            {/* ------------- COL 1 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2 "
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor06.png"
                                    width="100%"
                                />
                                <article className="w-2/3 pl-2 my-auto">
                                    <p className="text-[100%]">
                                        {DobleFlechaRoja} Rodamiento a bolas de larga vida (30.000 horas) trabajando en cualquier posición de eje especialmente recomendado para condiciones duras de trabajo en instalaciones industriales o comerciales.
                                    </p>

                                </article>
                            </div>
                            {/* ------------- COL 2 ------------- */}
                            <div className=" flex w-1/2">
                                <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mt-2"
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor00.png"
                                    width="100%"
                                />
                                <article className="w-full pl-2 my-auto text-bla">
                                        <h2 className="">{DobleFlechaRoja} Protector térmico para trabajar a temperaturas de hasta 40ºC.</h2>
                                        <h2 className="">{DobleFlechaRoja} Renueva el aire húmedo o contaminado de baños, pequeñas habitaciones y oficinas.</h2>
                                        <h2 className="">{DobleFlechaRoja} Modelo con temporizador regulable (mantiene el extractor en marcha entre 1 -30 minutos después de apagada la luz).</h2>
                                        <h2 className="">{DobleFlechaRoja} Aislamiento y protección II-IP45 protección contra objetos con un diámetro superior a 1mm y resistente a chorros de agua.</h2>
                                </article>
                            </div>

                        </div>

                    </section>
                    </>
                    : <>
                    {/* ------------- MOBILE ------------- */}
                    <section className="mt-2 p-3 justify-center  items-center gap-y-6 h-full mx-[3%] flex flex-col font-nunito text-[#575756] text-[3.8vw] md:text-[1.3vw] xl:text-[1.4vw] 2xl:text-[1.3vw]">

                    {/* ------------- Silent MOBILE ------------- */}

                        <div className=" flex w-[100%] mx-aut mr-auto">
                            <div className="w-1/3">
                                <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2"
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor03.png"
                                        width="100%"
                                    />
                            </div>
                            <h1 className=" pl-2 my-auto text-livered-title font-nunito text-[7.5vw] md:text-[2vw] xl:text-[6.5vw] 2xl:text-[3.5vw]">Silent</h1>

                        </div>

                        <div className=" flex w-full">
                            <div className="w-1/3 h-full my-auto">
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2 "
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor04.png"
                                        width="100%"
                                />
                            </div>
                                <article className="w-2/3 pl-4 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Compuerta antirretorno</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Evita la entrada de aire del exterior y las fugas de calefacción, cuando el extractor no está en funcionamiento. Se abre por la presión de aire.
                                    </p>
                                </article>
                            </div>

                            <div className=" flex w-full">
                            <div className="w-1/3 h-full my-auto">
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2 "
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor05.png"
                                        width="100%"
                                />
                            </div>
                                <article className="w-2/3 pl-4 my-auto">
                                    <h2 className="text-[115%] text-livered-title">Silent-blocks elásticos</h2>
                                    <p className="text-[105%]">
                                        {DobleFlechaRoja} Motor montado sobre Silent-blocks que absorben las vibraciones, evitando que se transmitan al exterior.
                                    </p>

                                </article>
                            </div>

                            <div className=" flex w-full">
                            <div className="w-1/3 h-full my-auto">
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2 "
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor06.png"
                                        width="100%"
                                />
                            </div>
                                <article className="w-2/3 pl-4 my-auto">
                                    <p className="text-[100%]">
                                        {DobleFlechaRoja} Rodamiento a bolas de larga vida (30.000 horas) trabajando en cualquier posición de eje especialmente recomendado para condiciones duras de trabajo en instalaciones industriales o comerciales.
                                    </p>

                                </article>
                            </div>

                            <div className=" flex w-full">
                                <div className="w-1/ h-1/2 mb-auto"> 
                                    <Image
                                        alt="SolerPalauHabitatInline1.png"
                                        className="mb-2"
                                        radius="none"
                                        src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractor00.png"
                                        width="65%"
                                    />
                                </div>
                                <article className="w-full pl-2 my-auto text-bla">
                                        <h2 className="">{DobleFlechaRoja} Protector térmico para trabajar a temperaturas de hasta 40ºC.</h2>
                                        <h2 className="">{DobleFlechaRoja} Renueva el aire húmedo o contaminado de baños, pequeñas habitaciones y oficinas.</h2>
                                        <h2 className="">{DobleFlechaRoja} Modelo con temporizador regulable (mantiene el extractor en marcha entre 1 -30 minutos después de apagada la luz).</h2>
                                        <h2 className="">{DobleFlechaRoja} Aislamiento y protección II-IP45 protección contra objetos con un diámetro superior a 1mm y resistente a chorros de agua.</h2>
                                </article>
                            </div>
                    </section>
                    </>
                }
                
                {/* ------------- Boton manual ------------- */}
                
                <section className="mx-auto lg:mx-[4%] lg:ml-auto">
                    <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"/manuales/habitatExtractor.pdf"} dwName={"Habitat Extractor Manual.pdf"}/>

                </section>

                {/* ------------- Tabla ------------- */}
                <section className={`hidden lg:flex flex-col  items-start my-10 mx-[3%] gap-4 `}>
                    <Image
                                    alt="SolerPalauHabitatInline1.png"
                                    className="mb-2"
                                    radius="none"
                                    src="/img/solerpalau/habitat/extractor/SolerPalauHabitatExtractorTabla2.jpg"
                                    width="100%"
                                />
                </section>

                {/* ------------- ASESORAMIENTO Y TIENDA ------------- */}
                <section className="flex  h-full ">
                    <div className="flex flex-col mx-auto justify-center  items-center lg:gap-y-6 my-10 xl:my-16">
                        <h1 className="font-nunito text-xl lg:text-3xl">COMPRÁ AHORA</h1>
                        <TiendaButton size={BigScreen ? 70 : 40} screen={BigScreen ? "xxl" : "xl"} link={`${habitatData.tiendaOnline}`} css={"lg:text-5xl"}/>
                    </div>
                </section>

                {/* ------------- PAYMENT ------------- */}
                {BigScreen ? 
                    <>
                        {/* ------------- WEB ------------- */}
                        <section className="flex items-center justify-center mx-[7%] bg-red-00  h-full">
                                    <Image
                                        alt="Electroterma Logo"
                                        className=""
                                        radius="none"
                                        src="/img/solerpalau/habitat/SolerPalauHabitatPay.webp"
                                        width="100%"
                                    />
                        </section>
                    </> : 
                    <>
                        {/* ------------- MOBILE ------------- */}
                        <section className=" h-[55vw] py-auto">
                            <ImageGallery items={images} showThumbnails={false} showFullscreenButton={false} showPlayButton={false} autoPlay/>
                        </section>
                    </>
                }

                {/* ------------- NAVEGACION ------------- */}
                <section className={`flex flex-row  items-start my-6 lg:my-10 lg:mx-[15%] lg:gap-16 `}>
                    <a href="/soler&palau/habitat" className="hover:opacity-70">
                        <Image
                            alt="SolerPalauHabitatInline1.png"
                            className="mb-2"
                            radius="none"
                            src="/img/solerpalau/habitat/imgBanner/SolerPalauHabitaNav1.webp"
                            width="100%"
                        />
                    </a>
                    <a href="/soler&palau/habitat/inline" className="hover:opacity-70">
                        <Image
                            alt="SolerPalauHabitatInline1.png"
                            className="mb-2"
                            radius="none"
                            src="/img/solerpalau/habitat/imgBanner/SolerPalauHabitaNav2.webp"
                            width="100%"
                        />
                    </a>
                </section>

                {/* ------------- LOGOS Electroterma-Soler ------------- */}
                <section className=" mx-auto mt-6 mb-6"> 
                {BigScreen || <AsesoramietoButton  screen={BigScreen ? "xl" : "lg"} size={25} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageInline}`}/> }
                </section>
                
                {!BigScreen ||<section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[250px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            radius="none"
                            src="/img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                    <div>
                         <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageInline}`}/> 
                    </div>
                   
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                radius="none"
                                src="/img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm">Distribuidor en Argentina</span>
                    </div>
                </section>}

                {BigScreen || 
                 <section className="flex flex-col px-[3%] w-full">

                 {/* ------------- Logos Electo-S&P ------------- */}
                 <section className="flex flex-row justify-between  items-center  h-full">
                     <div className="w-[240px] md:w-[340] lg:w-[450px] ">
                         <a href="/">
                         <Image
                             alt="Electroterma Logo"
                             className=""
                             radius="none"
                             src="/img/electrotermalogoletras.png"
                             width="100%"
                         />
                         </a>
                     </div>
                     <div className="left-0 w-[120px] md:w-[200px] lg:w-[250px] mr-10 xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                         <a href="/soler&palau">
                             <Image
                                 alt="Otam Logo"
                                 radius="none"
                                 src="/img/otamlogo.png"
                                 width="100%"
                             />
                         </a>
                         <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm xl:text-lg">Distribuidor en Argentina</span>
                     </div>
                 </section>
                 </section>
                }   
                
            </section>

        </main>
    );
}
