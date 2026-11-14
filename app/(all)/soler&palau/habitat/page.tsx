"use client";
import { Button } from "@nextui-org/react";
import { Image } from "@nextui-org/image";

import { DiferencialGranConfort } from "@/components/diferenciales/diferencialGranConfort";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import YouTubePlayer from "@/components/youtubePlayer";

import { habitatData } from "@/public/data/soler&palau/habitatData";
import VideoAutoPlayer from "@/components/videoplayer/videoautoplayer";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { TiendaButton } from "@/components/custonButtons/tienda";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";

import { DiferencialFacilInstalacion } from "@/components/diferenciales/diferencialFacilInstalacion";
import { useIsDesktop } from "@/hooks/useIsDesktop";

export default function HabitatPage() {
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


    return (
        <main className="flex flex-col items-center justify-center gap-4 pb-4 md:pb-10 overflow-hidden ">
            {/* ------------- VIDEO INTRO ------------- */}

            <section className="max-h-[100vh] w-[119%] -translate-x-10 xl:-translate-x-16 2xl:w-[111%] xl:px-[0%] flex items-center justify-center overflow-hidden bg-lowgrasy">
            
                <VideoAutoPlayer url="/img/solerpalau/habitat/video/habitatPresentacion.mp4" width="100%"/>
                
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
                <article className=" flex  items-center justify-center font-nunito-thin text-[#575756] ">
                    <div className="w-[85%] xl:w-3/4  max-w-[700px]">
                        <h1 className="text-[8vw] xl:text-[4vw]">{habitatData.pageData.title1}</h1>
                        <div className="text-[3.8vw] md:text-[2vw] xl:text-[1.4vw] 2xl:text-[1.4vw]">
                            <p>
                                {habitatData.pageData.p1}
                                <br/><br/>
                                {habitatData.pageData.p2}
                                <br/><br/>
                                {habitatData.pageData.p3}
                            </p>
                        </div>
                    </div>
                </article>
                
                {/* ------------- Titulo post parrafo ------------- */}
                <section className="flex items-center justify-center my-4 md:my-10">
                    <div>
                        <h1 className="font-nunito-thin text-[4.2vw] text-[#575756] py-4">
                            {habitatData.pageData.subTitle}
                        </h1>
                    </div>
                </section>

                {/* ------------- 2 Vent Habitat ------------- */}
                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="flex flex-row justify-between  items-center gap-x-16 xl:gap-x-32 h-full my-10 mx-16 xl:mx-32">
                        
                        {/* ------------- Vent INLINE ------------- */}
                        
                        <div className=" w-1/2 flex " >
                        
                            <div className="w-2/3 pr-6">
                                <Image
                                    alt="Habitat 1"
                                    className=""
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitat1.webp"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Habitat inline 1"
                                    className="w"
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitatInline1.webp"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-xl md:text-2xl xl:text-3xl 2xl:text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="lg"
                                    onClick={()=>(window.open("/soler&palau/habitat/inline", '_top'))}
                                >
                                    Más info </Button>
                            </div>
                        </div>

                        {/* ------------- Vent EXTRACTOR ------------- */}
                        <div className=" w-1/2 flex ">
                            <div className="w-2/3 pr-6">
                                <Image
                                    alt="Habitat 2"
                                    className=""
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitat2.webp"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Habitat extractor 1"
                                    className="w"
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitatExtractor1.webp"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-xl md:text-2xl xl:text-3xl 2xl:text-4xl py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="lg"
                                    onClick={()=>(window.open("/soler&palau/habitat/extractor", '_top'))}
                                >
                                    Más info </Button>
                            </div>
                        </div>
                    </section>
                    </>
                    : <>
                    {/* ------------- MOBILE ------------- */}
                    
                    <section className="flex flex-col md:flex-row justify-between  items-center gap-6 gap-x-2 h-full my-2 ">
                        
                        {/* ------------- Vent INLINE ------------- */}
                        
                        <div className=" w-4/5 md:w-1/2 flex "onClick={()=>(window.open("/soler&palau/habitat/inline", '_top'))} >
                        
                            <div className="w-2/3 pr-2">
                                <Image
                                    alt="Habitat 1"
                                    className=""
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitat1.webp"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Habitat inline 1"
                                    className="w"
                                    src="/img/solerpalau/habitat/SolerPalauHabitatInline1.webp"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-sm py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="sm"
                                    
                                >
                                    Más info </Button>
                            </div>
                        </div>

                        {/* ------------- Vent EXTRACTOR ------------- */}
                        <div className=" w-4/5 md:w-1/2 flex " onClick={()=>(window.open("/soler&palau/habitat/extractor", '_top'))}>
                            <div className="w-2/3 pr-2">
                                <Image
                                    alt="Habitat 2"
                                    className=""
                                    radius="none"
                                    src="/img/solerpalau/habitat/SolerPalauHabitat2.webp"
                                    width="100%"
                                />
                            </div>
                            <div className="flex flex-col justify-end  w-[30%]">
                                
                                <Image
                                    alt="Habitat extractor 1"
                                    className="w"
                                    src="/img/solerpalau/habitat/SolerPalauHabitatExtractor1.webp"
                                    width="100%"
                                />
                                <span className="h-[4px] my-4 w-full  bg-livered-title">{" "}</span>
                                <Button className="font-nunito text-sm py-4  text-white bg-gradient-to-b from-[#E80303] to-[#E74024]"
                                    radius="none"
                                    size="sm"
                                    
                                >
                                    Más info </Button>
                            </div>
                        </div>
                    </section>
                    
                    </>
                }

                {/* ------------- Diferenciales ------------- */}

                {BigScreen ? 
                    <>
                    {/* ------------- WEB ------------- */}
                    <section className="flex-grow  my-16  bg-red-00 ">
                        <div className="flex flex-col justify-center mx-auto gap-4 xl:gap-0 xl:flex-row xl:justify-around w-max xl:w-full py-1">
                            <div>
                                <DiferencialGranConfort />
                            </div>
                            
                            <div>
                                <DiferencialVolumenBajo text="Bajo nivel sonoro"/>
                            </div>

                            <div className="">
                                <DiferencialFacilInstalacion />
                            </div>
                            
                        </div>
                    </section>
                    
                    </> : 
                    <>
                    {/* ------------- MOBILE ------------- */}

                    <section className=" mx-auto my-8 flex">
                        <div className="flex flex-col gap-4 w-4/ justify-center items-start align-center ">
                        
                            <DiferencialGranConfort size={60} customWith={100} />
                            <DiferencialVolumenBajo size={60} customWith={250} />
                            <DiferencialFacilInstalacion size={60} customWith={150} />
                        </div>
                    </section>

                    </>

                }

                {/* ------------- Youtube ------------- */}
                <section className="flex flex-col xl:flex-row  items-start my-10 mx-[5%] gap-y-4 ">
                    <div className="w-full  ">
                        <YouTubePlayer
                            id={habitatData.videoYoutubeId1}
                            url={habitatData.videoYoutubeId1}
                            height={BigScreen ? "500px" : "200px"}
                            width={"100%"}
                            autoplay={1}
                        />
                    </div>
                    <div className="w-full h-full  ">
                        <YouTubePlayer
                            id={habitatData.videoYoutubeId2}
                            url={habitatData.videoYoutubeId2}
                            height={BigScreen ? "500px" : "200px"}
                            width={"100%"}
                            autoplay={1}
                        />
                    </div>

                </section>

                {/* -------------  TIENDA ------------- */}
                <section className="flex  h-full ">
                    <div className="flex flex-col mx-auto justify-center  items-center gap-y-6 xl:my-16">
                        <h1 className="font-nunito text-xl lg:text-3xl">COMPRÁ AHORA</h1>
                        <TiendaButton size={BigScreen ? 70 : 40} screen={BigScreen ? "xxl" : "xl"} link={`${habitatData.tiendaOnline}`} css={"lg:text-5xl"}/>
                    </div>
                </section>

                {/* ------------- DISFRUTA ------------- */}
                <section className="flex items-center justify-center text-livered-title  my-10 pt-4">
                    <div className="text-center">
                        <h1 className="font-nunito-thin text-[5vw] md:text-[4vw] xl:text-[3.0vw]   ">Disfruta del confort en tu hogar</h1>
                        <h1 className="font-nunito-bold text-[5vw] md:text-[4vw] xl:text-[3.0vw] ">¡tus ventiladores y extractores ideales están aquí!</h1>
                    </div>
                </section>

                {/* ------------- PAYMENT ------------- */}
                {BigScreen ? 
                    <>
                        {/* ------------- WEB ------------- */}
                        <section className="flex items-center justify-center mx-[7%] bg-red-00  h-full">
                                    <Image
                                        alt="Payment"
                                        className=""
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
                
                <section className=" mx-auto mt-6 mb-6"> 
                {BigScreen || <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} size={25} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageHabitat}`}/> }
                </section>
              
                {/* ------------- LOGOS Electroterma-Soler ------------- */}

                <section className="flex flex-row justify-between  items-center  h-full">
                    <div className="w-[240px] md:w-[340] lg:w-[250px] ">
                        <a href="/">
                        <Image
                            alt="Electroterma Logo"
                            className=""
                            src="/img/electrotermalogoletras.png"
                            width="100%"
                        />
                        </a>
                    </div>
                    <div>
                    
                    {!BigScreen || <AsesoramietoButton screen={BigScreen ? "xl" : "lg"} link={`${habitatData.whatsappLink}${habitatData.whatsappNumber}${habitatData.whatsappMessageHabitat}`}/> }
                    
                    </div>
                   
                    <div className="left-0 w-[120px] md:w-[200px] lg:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:-left-10">
                        <a href="/soler&palau">
                            <Image
                                alt="Otam Logo"
                                src="/img/otamlogo.png"
                                width="100%"
                            />
                        </a>
                        <span className="ml-0 font-nunito relative -top-4 text-[8px] md:text-sm">Distribuidor en Argentina</span>
                    </div>
                </section>

            </section>

        </main>
    );
}
