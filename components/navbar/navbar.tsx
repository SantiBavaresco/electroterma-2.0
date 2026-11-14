"use client";
import React from "react";
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarBrand, NavbarMenuItem } from "@nextui-org/navbar";

import { useState } from "react";
import {Accordion, AccordionItem, useDisclosure} from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/modal"

import { itemsNavSolerPalau as Soler, itemsNavTempomatic as Tempomatic } from "@/public/data/navbarData";
import { Dropdown, Space } from 'antd';
import type { MenuProps } from 'antd';

import { BsArrowBarLeft } from "react-icons/bs";
import { BsArrowBarRight } from "react-icons/bs";

import { Image } from "@nextui-org/image";


import { siteConfig } from "@/config/site";
import NextLink from "next/link";


import CardDisplay from "./cardDisplay";
import { ItemsNavbar } from "@/types/itemsNavbar";

interface Props {
    css?: string;

}

export const Navbar: React.FC<Props> = ({ css, ...props }) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();



    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);



    const Burger =  
    <div className="w-[22vw] 2xl:w-[15vw] px-auto h-[150%] md:min-w-64 flex items-center justify-center p-[18px] bg-[#EF771C]">
    <svg
        width="30"
        height="28"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0 7C0 3.13401 3.13401 0 7 0H40C40 3.86599 36.866 7 33 7H0Z"
            fill="white"
        />
        <path
            d="M0 22C0 18.134 3.13401 15 7 15H40C40 18.866 36.866 22 33 22H0Z"
            fill="white"
        />
        <path
            d="M0 37C0 33.134 3.13401 30 7 30H40C40 33.866 36.866 37 33 37H0Z"
            fill="white"
        />
    </svg>
    </div>
    const items: MenuProps['items'] = [
        {
          key: '1',
          type: 'group',
          style: { backgroundColor: "#EF771C", borderTopLeftRadius:4, borderTopRightRadius: 4 , margin:-4},
          children: [
            {
              key: '1-1',
          label: 
                <NextLink
                  className=""
                  color="foreground"
                  href="/"
                  target={undefined }
                >
                    <p className={`font-nunito text-white text-[1.1vw] ml-[30px] !important`}>
                      Inicio
                    </p>
                  
                </NextLink>,
            }]
      
        },
        {
          key: '2',
          type: "submenu",
          popupOffset:[0,0],
          
          style: { backgroundColor: "#EF771C", margin:-4 },
          label: 
            <h1 className='flex text-[1.1vw] text-white items-center font-nunito'> <BsArrowBarLeft className="text-2xl"/> 
              <h2 className='pl-3'>Tempomatic</h2> 
            </h1>,
          children: [
            {
              key: '2-1',
              type: 'group',
      
              label: 
              <div className='grid grid-cols-3 gap-3 -mx-'> 
                {Tempomatic.map((element)=>(
                  <NextLink
                    className=""
                    key={element.key}
                    color="foreground"
                    href={element.href}
                    target="_top"
                    >
                      <CardDisplay  data={element} />
                  </NextLink>
      
                ))}
                
              </div>,

            },
           
          ],
        },
        {
          key: '3',
          type: "submenu",
          popupOffset:[0,0],
          style: { backgroundColor: "#EF771C", margin:-4 },
      
          label: 
            <h1 className='flex text-[1.1vw] text-white items-center font-nunito'> <BsArrowBarLeft className="text-2xl"/> 
              <h2 className='pl-3'>Soler & Palau</h2> 
            </h1>,
          children: [
            {
              key: '3-1',
              type: 'group',
              label: 
              <div className='flex gap-3 -mx-2'> 
                
                {Soler.map((element)=>(
                  <NextLink
                    key={element.key}
                    className=""
                    color="foreground"
                    href={element.href}
                    target="_top"
                    >
                      <CardDisplay  data={element} />
                  </NextLink>
      
                ))}
              </div>,
              
            },
           
          ],
        },
        {
          key: '4',
          type: 'group',
          style: { backgroundColor: "#EF771C", margin:-4 },
          children: [
            {
              key: '4-1',
          label: 
            <NextLink
              className=""
              color="foreground"
              href="/dti"
              target={undefined }
            >
                <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
                  DTI
                </p>
              
            </NextLink>,
            }]
        },
        {
          key: '5',
          type: 'group',
          style: { backgroundColor: "#EF771C", margin:-4 },
          children: [
            {
              key: '5-1',
              label: 
                <NextLink
                  className=""
                  color="foreground"
                  href="/zila"
                  target={undefined }
                >
                    <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
                      Zila
                    </p>
                  
                </NextLink>,
            }]
        },
        {
          key: '6',
          type: 'group',
          style: { backgroundColor: "#EF771C",  borderRadius: 0, margin:-4},
          children: [
            {
              key: '6-1',
              label: 
                <NextLink
                  className=""
                  color="foreground"
                  href="/solucionesHVAC"
                  target={undefined }
                >
                    <p className={`font-nunito text-white text-[1.1vw] ml-[30px] `}>
                    Soluciones en HVAC
                    </p>
                  
                </NextLink>,
            }]
        },
        {
          key: '7',
          type: "group",
          style: { backgroundColor: "#EF771C", paddingBottom: 10, margin:-4 ,
            borderTopLeftRadius:0, borderTopRightRadius: 0 ,
            borderBottomLeftRadius:4, borderBottomRightRadius: 4},
          children: [
              {
                key: '7-1',
                label: 
                <NextLink
                className="rounded-none"
                color="foreground"
                href="https://www.tiendaelectroterma.com.ar/"
                target="_blank"
              >
                  <p className={`font-nunito text-white text-[1.1vw] ml-[30px]`}>
                    Tienda Online
                  </p>
                
              </NextLink>,
              },
            ],
          
        },
      ];  

//  items acordion para mobile, hay que cambiarlo

 const itemsTempomatic: ItemsNavbar[] = [

    {
        key: "11",
        category: "tempomatic",
        label: ["Unidad de tratamiento de aire"],
        labelShort: "UTA",
        img: "/img/navbar/Tempomatic2.png",
        href: "/tempomatic/uta",
        color : "bg-[#EF7916]",

    },
    {
        key: "12",
        category: "tempomatic",
        label: ["Generador de aire caliente"],
        labelShort: "GDAC",
        img: "/img/navbar/Tempomatic5.png",
        href: "/tempomatic/generador_de_aire_caliente",
        color : "bg-[#EF7916]",

    },
    {
        key: "13",
        category: "tempomatic",
        label: ["Calefactor eléctrico"],
        labelShort: "CE",
        img: "/img/navbar/Tempomatic3.png",
        href: "/tempomatic/calefactor_electrico",
        color : "bg-[#EF7916]",

    },
    {
        key: "21",
        category: "tempomatic",
        label: ["Unidad manejadora de aire"],
        labelShort: "UMDA",
        img: "/img/navbar/Tempomatic4.png",
        href: "/tempomatic/unidad_manejadora_de_aire",
        color : "bg-[#EF7916]",

    },
    {
        key: "22",
        category: "tempomatic",
        label: ["Caja Ventiladora",],
        labelShort: "CV",
        img: "/img/navbar/Tempomatic1.png",
        href: "/tempomatic/caja_ventiladora",
        color : "bg-[#EF7916]",
    },
    {
        key: "23",
        category: "tempomatic",
        label: ["Caldera para calefacción"],
        labelShort: "CC",
        img: "/img/navbar/Tempomatic6.png",
        href: "/tempomatic/caldera_para_calefaccion",
        color : "bg-[#EF7916]",

    },
];
    const itemsSyP: ItemsNavbar[] = [
        {
            key: "first",
            category: "soler&palau",
            label: ["Ventilador Centrífugo", "Autolimitante - RLS"],
            labelShort: "RLS",
            img: "/img/navbar/NavBarRLS1SolerPalau.png",
            href: "/soler&palau/RLS",
            color: "bg-livered-title",
        },
        {
            key: "copy",
            category: "soler&palau",
            label: ["Ventilador Centrífugo", "Multipala - TSA"],
            labelShort: "TSA",
            img: "/img/navbar/NavBarTSA1SolerPalau.png",
            href: "/soler&palau/TSA",
            color: "bg-livered-title",

        },
        {
            key: "edit",
            category: "soler&palau",
            label: ["Ventilador ","Centrífugo - TDA"],
            labelShort: "TDA",
            img: "/img/navbar/NavBarTDA1SolerPalau.png",
            href: "/soler&palau/TDA",
            color: "bg-livered-title",

        },
        {
            key: "last",
            category: "soler&palau",
            label: ["Hábitat"],
            labelShort: "Hábitat",
            img: "/img/navbar/NavBarHabitat1SolerPalau.png",
            href: "/soler&palau/habitat",
            color: "bg-livered-title",

        },
    ];



    return (
        <NextUINavbar
            maxWidth="full"
            className={`h-[42px] md:h-[64px]  lg:px-10  flex justify-center items-center font-nunito ${css}`}
            position="sticky"
            height={"42px"}

            isMenuOpen={mobileDropdownOpen}
            onMenuOpenChange={setMobileDropdownOpen}
            
        >
            <NavbarBrand>
                <NextLink
                    className="flex justify-center items-center gap-1"
                    href="/"
                >
                    <Image
                        src="/img/electrotermalogoletrasNoPadding.png"
                        width={240}
                        alt="hola"
                    />
                </NextLink>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-4" justify="center">

            <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} 
                overlayClassName=" bg-liverd rounded m- p- w-[22vw] 2xl:w-[15vw] "
                className=' text-5xl '>
                <div onClick={(e) => e.preventDefault()} className='w-[22vw] 2xl:w-[15vw] ml-auto -2 bg-livered h-16  rounded-3xl  '>
                <Space>
                    {Burger}
                </Space>
                </div>
            </Dropdown>

            </NavbarContent>

{/* ------------------------------------ MENU MOBILE ------------------------------------ */}

            <NavbarContent className=" md:hidden font-nunito basis-1 w-screen pl-4" justify="end">
                
                 <div className="w-[150px] h-[100%] min-w-32 flex items-center justify-center bg-[#EF771C]" onClick={onOpen}>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 40 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 7C0 3.13401 3.13401 0 7 0H40C40 3.86599 36.866 7 33 7H0Z"
                                    fill="white"
                                />
                                <path
                                    d="M0 22C0 18.134 3.13401 15 7 15H40C40 18.866 36.866 22 33 22H0Z"
                                    fill="white"
                                />
                                <path
                                    d="M0 37C0 33.134 3.13401 30 7 30H40C40 33.866 36.866 37 33 37H0Z"
                                    fill="white"
                                />
                            </svg>
                        </div>

            </NavbarContent>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" isDismissable={false} scrollBehavior="inside">
                <ModalContent className="bg-white bg-opacity-75 backdrop-blur-xl">
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                    <ModalBody className="mx-4 mt-2 flex flex-col gap-4 ">
                        
                        {siteConfig.navMenuItems.map((dropdown, index) => (
                            <>
                                    {dropdown.dropdown ? 
                                        <div className="py-0">
                                            <Accordion variant="light">
                                                <AccordionItem key={dropdown.label} aria-label={dropdown.label} 
                                                indicator={<BsArrowBarRight className="text-2xl text-black"/> }
                                                title={
                                                    <a key={dropdown.label} 
                                                    href={dropdown.label==="Tempomatic" ? undefined : dropdown.label==="Soler & Palau" ? undefined : dropdown.href }   target="_top" >
                                                    {dropdown.label}
                                                </a>}
                                                className="-mx-2  "
                                                >
                                                    <div className="grid grid-cols-2 gap-2 w-[100%]">
                                                        
                                                    {/* Aca va la logica hardcodeada para mobile */}
                                                    {dropdown.label === "Tempomatic"
                                                        ? itemsTempomatic?.map((i) => (
                                                    
                                                            <NextLink
                                                                className="max-w-[40vw] "
                                                                color="foreground"
                                                                href={i.href}
                                                                target="_top"
                                                                key={i.key}
                                                                
                                                            >
                                                                
                                                                <CardDisplay data={i}/>
                                                            </NextLink>
                                                        ))

                                                        : dropdown.label === "Soler & Palau"
                                                            ? itemsSyP?.map((i) => (
                                                    
                                                                <NextLink
                                                                    className="max-w-[40vw] "
                                                                    color="foreground"
                                                                    href={i.href}
                                                                    target="_top"
                                                                    key={i.key}
                                                                    
                                                                >
                                                                    
                                                                    <CardDisplay data={i}/>
                                                                </NextLink>
                                                            ))

                                                        : null
                                                    }
                                                    </div>
                                                </AccordionItem>
                                                
                                            </Accordion>

                                        </div>
                                    : 
                                    <NextLink
                                        className=""
                                        color="foreground"
                                        href={dropdown.href}
                                        target={dropdown.label === "Tienda Online" ? "_blank" : undefined  }
                                        onClick={dropdown.label === "Salir" ? onClose : undefined}
                                                
                                    >
                                        <h1>{dropdown.label}</h1> 
                                    </NextLink>
                                    }

                            </>
                            
                        ))}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>

            <NavbarMenu

            >

                <div className="mx-4 mt-2 flex flex-col gap-2 ">
                    
                    {siteConfig.navMenuItems.map((dropdown, index) => (
                        <NavbarMenuItem key={`${dropdown}-${index}`}
                        onClick={() => setMobileDropdownOpen(false)} 
                        >

                                {dropdown.dropdown ? 
                                    <div className="py-0">
                                        <Accordion variant="light">
                                            <AccordionItem key={dropdown.label} aria-label={dropdown.label} 
                                            title={
                                                <a key={dropdown.label} 
                                                href={dropdown.label==="Tempomatic" ? dropdown.href : dropdown.label==="Soler & Palau" ? dropdown.href : undefined}  target="_top" >
                                                {dropdown.label}
                                            </a>}
                                            className="-mx-2  "
                                            >
                                                <div className="grid grid-cols-2 gap-2 w-[100%]">
                                                    
                                                {/* Aca va la logica hardcodeada para mobile */}
                                                {dropdown.label === "Tempomatic"
                                                    ? itemsTempomatic?.map((i) => (
                                                
                                                        <NextLink
                                                            className="max-w-[40vw] "
                                                            color="foreground"
                                                            href={i.href}
                                                            target="_top"
                                                            key={i.key}
                                                            
                                                        >
                                                            
                                                            <CardDisplay data={i}/>
                                                        </NextLink>
                                                    ))

                                                    : dropdown.label === "Soler & Palau"
                                                        ? itemsSyP?.map((i) => (
                                                
                                                            <NextLink
                                                                className="max-w-[40vw] "
                                                                color="foreground"
                                                                href={i.href}
                                                                target="_top"
                                                                key={i.key}
                                                                
                                                            >
                                                                
                                                                <CardDisplay data={i}/>
                                                            </NextLink>
                                                        ))

                                                    : null
                                                }
                                                </div>
                                            </AccordionItem>
                                            
                                        </Accordion>

                                    </div>
                                : 
                                <NextLink
                                    className=""
                                    color="foreground"
                                    href={dropdown.href}
                                    target={dropdown.label === "Tienda Online" ? "_blank" : undefined  }
                                            
                                >
                                    <h1>{dropdown.label}</h1> 
                                </NextLink>
                                }

                        </NavbarMenuItem>
                        
                    ))}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
};