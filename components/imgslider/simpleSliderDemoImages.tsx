"use client";
import React from "react";
import Slider from "react-slick";
import { Image } from "@nextui-org/image";

interface Props {
    url?: string;
    fileName?: Array<string>;
    width?: string;
}

const SimpleSliderDemoImages: React.FC<Props> = ({ url, width, fileName }) => {

    const settings = {
        className: "center variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,

        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        height: 800,
        width: 900,

        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="slider-container w-[100%]">
            <div
                className="w-[300px] md:w-[90vw] 2xl:w-[90vw]"
            >
                <Slider {...settings}>
                    {fileName?.map((item, index) => (
                        <div key={index} className=" max-w-[300px] md:max-w-[400px] lg:max-w-[500px] 2xl:max-w-[550px] px-[2px] ">
                            <Image
                                alt={`Imagen ${index}`}
                                src={`${url}${item}.jpg`}
                                isZoomed
                                radius="none"
                                loading="eager"
                                key={index}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SimpleSliderDemoImages;
