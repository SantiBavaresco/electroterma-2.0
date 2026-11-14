"use client";
import ScrollFrames from "@/components/scrollFrames/ScrollFrames";



import { Image } from "@nextui-org/image";
import NextLink from "next/link";
 import { itemsNavSolerPalau } from "@/public/data/navbarData";
import { tsaData } from "@/public/data/soler&palau/tsaData";






import SimpleSlider from "@/components/imgslider/slickSlider";
import SimpleSliderDemoImages from "@/components/imgslider/simpleSliderDemoImages";
import { DiferencialMaterialGalvanizado } from "@/components/diferenciales/diferencialMaterialGalvanizado";
import { DiferencialMultiposicion } from "@/components/diferenciales/diferencialMultiposicion";
import { DiferencialVolumenBajo } from "@/components/diferenciales/diferencialVolumenBajo";
import { DiferencialStockPermanente } from "@/components/diferenciales/diferencialStockPermanente";
import CardDisplay from "@/components/navbar/cardDisplay";
import { VinietaNaranjaSVG } from "@/public/svg/vinietaNaranja";

import { TableSolerPalau } from "@/components/table/tableSoler&palau";
import { VinietaRojaSVG } from "@/public/svg/vinietaRoja";
import { ManualButton } from "@/components/custonButtons/manual";
import { AsesoramietoButton } from "@/components/custonButtons/asesoramiento";
import { TiendaButton } from "@/components/custonButtons/tienda";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useIsDesktop } from "@/hooks/useIsDesktop";


export default function TSAPage() {




    const BigScreen = useIsDesktop();


    return (
        <div className="h-full flex flex-col items-center justify-center  ">

            <section className="relative top-0 w-full max-h-[50%] md:max-h-[93%] lg:max-h-[93%] py-0 font-size overflow-hidden">
                <div className="h-[50%] md:h-[92%]">
                    <SimpleSlider
                        url={tsaData.urlImageBanner}
                        imgInfo={tsaData.bannerImageInfo}
                    />



                </div>
            </section>

            
            <section className="z-0 mr-auto ml-[45px]  md:mr-0 md:w-[90%] md:ml-10 md:mt-10 overflow-hidden">
                <div className="left-0 w-[120px] md:w-[200px] xl:top-2 xl:left-16 2xl:top-2 2xl:mb-10 2xl:-left-10">
                    <a href="/soler&palau">
                        <Image
                            alt="Otam Logo"
                            src="/img/otamlogo.png"
                            width="100%"
                        />
                    </a>
                    <span className="ml-0 relative -top-4 text-[8px] md:text-xs">Distribuidor en Argentina</span>
                </div>
            </section>

            {BigScreen ? 
            // ----------------------- DESKTOP -----------------------
            <>
                <section className="z-10 flex flex-row justify-start items-start min-h-[100%] overflow-hidden
                    
                    pl-10
                    h-[95%]
                    w-[100%]
                    pb-10
                    
                    ml-auto
                    
                      ">
                    <div className="z-20 ml-[3%] w-[100%]  ">
                        <div className="flex flex-col justify-items-end w-full items-start mt-10
                             font-lexend-bold tracking-widest gap-[0.2vw] ">

                            <span className=" relative flex  justify-center items-center h-full
                                "
                            >
                                <div className="relative -left-10 top-0  ">
                                    <VinietaNaranjaSVG css=" h-[10px] w-[10px] md:h-[50px] md:h-[30px] lg:h-[40px] lg:w-[30px]" />
                                </div>
                                <h1 className="absolute left-0 text-[#9D9D9C] font-nunito
                                    text-[3.2vw]
                                "> 
                                    {tsaData.pageData.preTitle} 
                                </h1>
                            </span>

                            <span><h1 
                                className="mt-2 lg:mt-3 2xl:mt-4  leading-none  font-nunito-bolder text-livered-title text-[5.0vw] xl:text-[5.35vw]"

                            >
                                {/* CENTRÍFUGO */}
                                {tsaData.pageData.title1} 
                            </h1>

                            <h1 
                                className="mt-2  leading-none  font-nunito-bolder text-livered-title text-[5.0vw] xl:text-[5.35vw]"
                            >
                                {/* MULTIPALA - TSA */}
                                {tsaData.pageData.title2} 
                            </h1>
                            </span>

                            <h1 className="text-[#9D9D9C] font-nunito
                                    text-[3.2vw] ">
                                {/* DE SIMPLE ASPIRACIÓN */}
                                {tsaData.pageData.description} 
                            </h1>

                            <div className="mt-2   tracking-normal text-[#4C4B4B] font-lexend-bold
                                text-[2.5vw]
                            ">
                                <p className="">
                                    Sistema de
                                </p>
                                <p className="">
                                    <span className="text-livered ">inyección</span>
                                    {" "}y{" "}
                                    <span className="text-livered ">extracción</span>

                                </p>
                                <p className="">
                                    de{" "}
                                    <span className="text-livered ">aire limpio.</span>

                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative mr-[0vw] max-w-screen w-[50%] -mt-10 z-10 overflow-y-hidde
                          
                        -left-[10%] -top-2
                        md:top-6
                        lg:-left-[6%] lg:-top-2
                        2xl:-left-[6%] 2xl:top-0 "
                        
                        >
                    <Image
                            alt="Ventilador"
                            className="z-0 w-[520px] md:w-[100%]  mb-10 top-[75px] lg:top-[65px] 2xl:top-[70px] left-4 md:left-12"
                            src="/img/solerpalau/tsa/SolerPalauTsa1.webp"
                            width={"100%"}
                        />
                        
                        
                    </div>
                    </section>

                    <section className="w-full px-[5%] flex justify-between 
                    ">

                        
                        <div className="w-[40%] 3xl:w-[40%] ml-auto mt-6 flex justify-end md:justify-center
                            
                            overflow-hidden">
                            
                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                            

                        </div>

                    </section>
                </>
            :
            // ----------------------- MOBILE -----------------------
            <>
                <section className="w-[80vw] mx-6">
                    
                    <span className="relative text-[20px] text-[#9D9D9C] font-nunito ">
                        <div className="absolute top-0 -left-6 mt-1 md:mt-2 ">
                            <VinietaNaranjaSVG css=" h-[20px] w-[20px] " />
                        </div>
                            {tsaData.pageData.preTitle} 
                        
                    </span>

                    <h1 className="relative mt-2 text-[29px] xm:text-[35px] leading-none font-nunito-bolder text-livered-title">
                        {/* CENTRÍFUGO */}
                        {tsaData.pageData.title1} 
                    </h1>

                    <h1 className="mt-2 text-[29px] xm:text-[35px] leading-none  font-nunito-bolder text-livered-title">
                        {/* MULTIPALA - TSA */}
                        {tsaData.pageData.title2} 
                    </h1>

                    <h1 className=" text-[18px]  text-[#9D9D9C] font-nunito ">
                        {/* DE SIMPLE ASPIRACIÓN */}
                        {tsaData.pageData.subTitle} 

                    </h1>
                </section>

                <section className="w-[80vw] mx-6 flex items-start min-h-[100%] overflow-hidden h-[100%] ">
                <div className="z-20 ">
                        <div className="min-w-1/2 flex flex-col items-center xm:mt-6 font-lexend-bold tracking-widest ">
                            <div className="mt-10 text-[12px] xm:text-[15px] tracking-normal text-[#4C4B4B] font-lexend-bold">
                            <p className="">
                                    Sistema de
                                </p>
                                <p className="">
                                    <span className="text-livered ">inyección</span>
                                    {" "}y{" "}
                                    <span className="text-livered ">extracción</span>

                                </p>
                                <p className="">
                                    de{" "}
                                    <span className="text-livered ">aire limpio.</span>

                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="relative max-w-screen w-full z-10 overflow-y-hidde">
                        <Image
                            alt="Ventilador"
                            className="inline-block w-[320px] top-0  left-2 "
                            src="/img/solerpalau/tsa/SolerPalauTsa1.webp"
                            width={"100%"}
                        />
                        <div className="mt-2 ml-auto w-full flex justify-end overflow-hidden">
                            <TiendaButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"}/>
                        </div>
                        
                    </div>
                </section>



               
            </>}
    {/* --------------------------- FIN MOBILE --------------------------- */}



            
    {/* --------------------------- VIDEO SCROLL --------------------------- */}
        <>
            {BigScreen ? 
                <>   {/* ----- Web ----- */}
                    
                    <ScrollFrames product="tsa" variant="web" frameCount={{ web: 540, mobile: 479 }} />
                </> 
                
                : <div className="-mt-32"> {/* ----- Mobile ----- */}

                    <ScrollFrames product="tsa" variant="mobile" frameCount={{ web: 540, mobile: 479 }} />
                </div>
            }
            
            <section className=" -mt-[40vh] lg:-mt-[70vh] w-full"> 
                <div className=" mx-[3%] flex flex-col justify-end items-end md:justify-start md:items-start overflow-hidden">
                    <section className="hidden pb-[20vh] my-4 md:flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center xl:ml-[10vw] ">
                            <DiferencialMaterialGalvanizado size={70} customWith={10} />
                            <DiferencialMultiposicion size={70} customWith={250} />
                            <DiferencialVolumenBajo size={70} customWith={150} />
                            <DiferencialStockPermanente size={70} customWith={250} />
                        </div>
                    </section>
                    
                    <section className="pt-[10vh] pb-[5vh] lg:pb-[10vh] lg:pt-[0vh] lg:mt-10 w-[40%] 3xl:w-[50%] ml-auto flex justify-end md:justify-center
                            
                            overflow-hidden">
                            
                            <ManualButton size={BigScreen ? 40 : 25} screen={BigScreen ? "xl" : "lg"} link={"/manuales/tsa.pdf"} dwName={"TSA Manual.pdf"}/>
                            
                    </section>
                </div>

            </section>
            

        </>
    {/* --------------------------- FIN VIDEO SCROLL --------------------------- */}


            {BigScreen ?
                <>  {/* ----------------- Caractecristicas Web ----------------- */}
                    <section className="z-0  flex flex-col  overflow-hidden
                        h-[100%] w-[100%] min-h-[50vh] max-w-[100%]  ml-auto

                        
                        bg-[url('/svg/ondas02.svg')] bg-fill
                        bg-[center_1rem] bg-no-repeat
                    
                      ">
                        <div className="ml-[3%] h-full  flex flex-col justify-center items-center lg:flex-row lg:grow">

                            <div className="min-h-[55vh] w-full 2xl:w-3/5 lg:min-h-[45vh] ">
                                <h1 className="flex items-center justify-start py-4  md:text-3xl lg:text-4xl 2xl:text-5xl leading-none font-nunito-bolder me-auto  text-livered-title  
                                ">
                                   <VinietaRojaSVG size={40} /> CARACTERÍSTICAS TÉCNICAS
                                </h1>
                                <TableSolerPalau tableData={tsaData.tableData}/>
                                
                               
                            </div>
                            <div className=" w-full 2xl:w-2/5 my-auto flex justify-center items-center">
                            {/* ----------------- Specs Web ----------------- */}
                                <div className=" w-full  ms-auto overflow ">
                                        <div
                                                className=" my-10 mx-auto  px-4 z-10 
                                            
                                                
                                                rounded-[42px]
                                                w-[370px] xl:w-[400px] 2xl:w-[500px]
                                                flex flex-col justify-start items-center bg-white p-1 "
                                            >
                                                <div className=" flex flex-col justify-center items-center  text-livered-title py-4 lg:pt-6 xl:py-16 
                                                text-2xl lg:text-2xl 2xl:text-3xl">
                                                    <h1 className="font-lexend ">Caudales de inyección </h1>
                                                    <h1 >desde <span className="font-lexend-bold  ">2000 a 14000 m3/h</span></h1>
                                                    <h1 className="font-lexend ">y contrapresiones desde</h1>
                                                    <h1 className="font-lexend-bold  ">15 a 180 mmCA </h1>

                                                </div>
                                        </div>
                                    </div>
                            {/* ----------------- FIN Specs Web ----------------- */}
                            </div>
                            
                        </div>
                        <div className="-z-10 mx-[3%]">
                                <div className=" w-full mx-auto mt-0">
                                    <div className="mt-2 mr-8 flex items-end justify-end opacity-30">
                                        <Image
                                            alt="Otam Logo"
                                            className=""
                                            src="/img/otamlogo.png"
                                            width={300}
                                        />
                                    </div>
                                    
                                </div>
                                <div className=" w-full ml-auto lg:-mr-0">
                                    <div className="mt-0  flex items-end justify-end">
                                        <a href="/" target="_top">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="/img/electrotermalogoletras.png"
                                            width={340}
                                        />
                                        </a>
                                    </div>
                                </div>
                            </div>
                      </section>

                    {/* ----------------- Caractecristicas Web MOBILE ----------------- */}
                </> 
                : <>
                    <section className="md:hidden my-4 flex">
                        <div className="flex flex-col gap-4 w-full justify-center items-start align-center ">
                        
                            <DiferencialMaterialGalvanizado size={60} customWith={10} />
                            <DiferencialMultiposicion size={60} customWith={250} />
                            <DiferencialVolumenBajo size={60} customWith={150} />
                            <DiferencialStockPermanente size={60} customWith={250} />
                        </div>
                    </section>
                    <section className="z-10  flex flex-col  overflow-hidden
                        h-[100%] w-[100%] min-h-[100%] max-w-[100%]  ml-auto

                        
                        bg-[url('/svg/ondas022.svg')] bg-fill
                        bg-[center_1rem] bg-no-repeat
                    
                    ">
                        <div className="ml-[%] h-full  flex flex-col justify-center items-center ">
                            <h1 className="  mx-auto pt-10 py-4 xs:text-lg xm:text-2xl md:text-3xl  leading-none font-nunito-bolder me-auto  text-livered-title  
                                ">
                                    CARACTERÍSTICAS TÉCNICAS
                                </h1>

                            <div className="min-h-[vh] ">
                                
                            
                            {/* ----------------- Specs Web ----------------- */}
                                <div className=" w-full ms-auto overflow ">
                                        <div
                                                className=" my-10 mx-auto  px-4 z-10
                                            
                                                
                                                rounded-[42px]
                                                w-[370px] xl:w-[400px] 2xl:w-[500px]
                                                flex flex-col justify-start items-center bg-white p-1 "
                                            >
                                                <div className=" flex flex-col justify-center items-center  text-livered-title py-4 
                                                text-xl ">
                                                    <h1 className="font-lexend ">Caudales de inyección </h1>
                                                    <h1 >desde <span className="font-lexend-bold  ">700 a 9000 m3/h</span></h1>
                                                    <h1 className="font-lexend ">y contrapresiones desde</h1>
                                                    <h1 className="font-lexend-bold  ">20 a 100 mmCA </h1>

                                                </div>
                                        </div>
                                    </div>
                            {/* ----------------- FIN Specs Web ----------------- */}
                            </div>
                            
                        </div>
                        <div className="mx-[3%]">
                                
                            
                                <div className="  w-full ml-auto ">
                                    <div className="mt-0  flex items-end justify-end  opacity-30">
                                    <Image
                                            alt="Otam Logo"
                                            className=""
                                            src="/img/otamlogo.png"
                                            width={150}
                                        />
                                    </div>
                                </div>
                                <div className="  w-full ml-auto ">
                                    <div className="mt-0  flex items-end justify-end">
                                        <a href="/" target="_top">
                                        <Image
                                            alt="Electroterma Logo"
                                            className=""
                                            src="/img/electrotermalogoletras.png"
                                            width={140}
                                        />
                                        </a>
                                    </div>
                                </div>
                            </div>
                      </section>
                </>
            }


            
                                
           


            

             {/* -------------------------Tabla de especificadiones------------------------- */}

           

            {/* ----------------- Imagenes DEMO + logos ----------------- */}
            <section className="h-[60%] lg:h-[70%] 2xl:h-[90%] 2xl:w-[100%] mb-6  bg-inherit z-10 bg-none overflow-hidden">
                <div className="flex flex-col justify-center items-center t w-full md:w-[100%]  2xl:w-full  m-auto ">


                    <div className="">
                        <SimpleSliderDemoImages
                            url={tsaData.urltdaImageDemo}
                            fileName={tsaData.demoImageNames}
                        />
                    </div>
                    <section className="mt-10 mb-10 w-screen lg:w-3/4 ">
                        <div className="mx-[3%] flex flex-row items-center justify-center mt-10 md:mt-2 gap-[2%] ">
                            <AsesoramietoButton screen={BigScreen ? "xl" : "md"} size={BigScreen ? 40 : 16}
                                link={"https://wa.me/5492236356756?text=Hola.%20Quiero%20más%20información%20sobre%20este%20Ventilador%20Centrífugo%20Multipala%20TSA"}/>
                            <TiendaButton size={BigScreen ? 40 : 16} screen={BigScreen ? "xl" : "md"}/>
                        </div>    
                    </section>
                </div>
            </section>
            {/* ----------------- FIN Imagenes DEMO + logos ----------------- */}

            {/* ----------------- Otros Porductos ----------------- */}
            <section className="max-w-[80%] w-full h-[100%] z-10 my-10">

            <h1 className="text-2xl ml-2 lg:text-4xl 2xl:text-5xl text-center leading-none  font-nunito-bolder me-auto mb-6 my-2 text-livered-title">
                        Otros productos de Soler & Palau
                    </h1>
                <div className="flex justify-center gap-2 ">
                    
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4   "> 
                {itemsNavSolerPalau?.map((item) => (
                    
                        <NextLink
                                                            className=""
                                                            color="foreground"
                                                            href={ item.labelShort === "TSA" ? "#" : item.href}
                                                            target={(item.labelShort === "TSA" ) ? "_self" : "_top"}
                                                            key={item.key}
                                                        >
                            <CardDisplay data={item}  actual={"TSA"} />
                        </NextLink>
                    ))}  
                    </div>
                         
                </div>

            </section>
            {/* ----------------- FIN Otros Porductos ----------------- */}
            
        </div>
    );
}