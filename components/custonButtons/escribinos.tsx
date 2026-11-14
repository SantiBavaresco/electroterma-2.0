import React from "react";
import { MyButton } from "./myButton";

import { EscribinosMail } from "@/public/svg/escribinosMail";
import { openContactEmail } from "@/lib/contact";
interface Props {
    css?: string;
    size?: number;
    screen?: "xs" | "md" | "lg" | "xl" | "xxl" | "sm" | undefined;
    label?: string;
    link?: string;
}

export const EscribinosButton: React.FC<Props> = ({ css, size, screen, label, link, ...props}) => {


    return (
        <>
            <a className={css || ""}>
            <MyButton
                className="z-10 mt-4 bg-[#EDEDED] min-w-[] font-nunito text-[#4C4B4B] 3xl:ml-0 2xl:text-2xl"
                radius="full"
                size={screen}
                onClick={openContactEmail} target="_blank"
            >
                <div className={`absolute rounded-full left-0 z-20 p-0   shadow-r-xl shadow-[rgba(29,29,27,0.24)] border- border-gray-200
                     ${size===15 ? " p-1.5" : " p-3 "} 
                    bg-gradient-to-r from-[#FF994B] to-[#F46900]
                    group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-[#E80303]
                    group-active:bg-gradient-to-r group-active:from-[#f37a7ae5] group-active:to-[#FFFFFF]
                    `}> 
                    <EscribinosMail size={size} css="group-active:text-livered p- mx-0 lg:mx-1 lg:text-2xl"/>

                </div>
                <span className={`ml-[24px] xm:ml-[28px] sm:ml-[35px] lg:ml-14 
                    mr-[12px] xm:mr-[14px] sm:mr-[17px] lg:mr-0
                    ${screen==="xxl" && "text-5xl"} ${size===15? "text-[2.0vw] ml-[25px]" : " "} `}>{label ? label : "Escribinos" }</span>
            </MyButton>
            </a>
        </>
    )}