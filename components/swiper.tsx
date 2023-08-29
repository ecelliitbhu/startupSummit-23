
"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image, {StaticImageData} from 'next/image';
import '@/app/globals.css'
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/icons";
import img1 from "@/public/Speakers/1.png";
import img22 from "@/public/Speakers/22.png";
import img33 from "@/public/Speakers/33.png";
import img4 from "@/public/Speakers/4.png";
import img5 from "@/public/Speakers/5.png";
import img6 from "@/public/Speakers/6.png";
import img7 from "@/public/Speakers/7.png";
import img8 from "@/public/Speakers/8.png";
import img9 from "@/public/Speakers/9.png";
import img100 from "@/public/Speakers/100.png";
import img12 from "@/public/Speakers/12.png";
export interface Album {
    name: string;
    image: StaticImageData;
    position: string;
    linkedin: string;
}

const listenNowAlbums: Album[] = [

    {
        name: "Saurabh Chandra",
        image: img33,
        position: "CEO Ati Motors",
        linkedin: "https://www.linkedin.com/in/saurabhchandra/",
    },
    {
        name: "Sanjeev Kumar Gupta",
        image: img4,
        position: "Karnataka Digital Economy Mission",
        linkedin: "https://www.linkedin.com/in/sanjeevkgupta/",
    },
    {
        name: "Abhijeet Mukherjee",
        image: img5,
        position: "Operating Partner, CerraCap Ventures",
        linkedin: "https://www.linkedin.com/in/mabhijeet/",
    }
    ,
    {
        name: "Arpit Agarwal",
        image: img6,
        position: "Investment Partner, Blume Ventures",
        linkedin: "https://www.linkedin.com/in/arpit105/",
    }
    ,
    {
        name: "BV Jagadeesh",
        image: img7,
        position: "Managing Partner, KAAJ Ventures",
        linkedin: "https://www.linkedin.com/in/bvjagadeesh/",
    },
    {
        name: "Amit Agarwal",
        image: img1,
        position: "Founder & CEO, NoBroker.com",
        linkedin: "https://www.linkedin.com/in/amit-kumar-agarwal-5b30301/",
    },
    {
        name: "Irina Ghose",
        image: img22,
        position: "Managing Director Microsoft India",
        linkedin: "https://www.linkedin.com/in/irinaghose/",
    },
    {
        name: "Manish Gupta",
        image: img9,
        position: "Co-Founder and CEO, Indegene",
        linkedin: "https://www.linkedin.com/in/manish-gupta-4b85b2/?originalSubdomain=in",
    }
    ,
    {
        name: "Tridibesh Satpathy",
        image: img100,
        position: "Founder and CEO, VMEdu Inc.",
        linkedin: "https://www.linkedin.com/in/tridibesh-satpathy-665776/",
    }
    ,
    {
        name: "Jayadevan P K ",
        image: img8,
        position: "Senior Director of Communications and Content, CoinSwitch",
        linkedin: "https://www.linkedin.com/in/therealjpk/",
    }
    ,
    {
        name: "Anurag Srivastava",
        image: img12,
        position: "COO, ARTPARK, I-Hub for robotics and Autonomous Systems, IISc Bangalore",
        linkedin: "https://www.linkedin.com/in/anurag-srivastava-b65567/",
    }
];
export default function Swipper() {
    return (
        <div id={"speakers"}>
            <h1 className="my-8 flex justify-center text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">
                Key <span className="text-blue-500"> &nbsp;Speakers</span>
            </h1>
        <div className=' w-[calc(100vw-2rem)]  md:w-[50vw] flex justify-center m-auto overflow-hidden'>
            <div className=''>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className=" p-16"
            >
                {
                    listenNowAlbums.map((data,index)=>{
                        return (

                            <SwiperSlide className="bg-center bg-cover w-[30%] h-[22rem] " key={index} >
                                <Image src={data.image} alt="1" width={250} height={200} className='rounded-md'/>
                                <div className="space-y-1 text-sm mt-4 cursor-text">
                                    <h3 className="font-medium">{data.name}</h3>
                                    <div>
                                        <h4 className={"text-gray-400 font-extralight"}>{data.position}</h4>
                                    </div>
                                    <Link href={data.linkedin} target={"_blank"}>
                                        <Button
                                            variant={"outline"}
                                            className="-p-y-4 m-2 text-sm transition-all duration-500 ease-in-out hover:text-blue-400"
                                        >
                                            <Icons.linkedin className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
            </div>
        </div>
        </div>
    );
}

