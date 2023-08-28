"use client";
import React, { FunctionComponent } from "react";
import Image, {StaticImageData} from "next/image";
import ecell from "@/public/logo/E-Cell2.png";
import assi from "@/public/logo/AASSII.png";
import aiba from "@/public/logo/AIBA2.png";
import saic from "@/public/logo/SAIC2.png";
import promgf from "@/public/logo/ProMFG2.png";
import kdem from "@/public/logo/KDEM2.png";
import bg from "@/public/bbblurry.svg";
import Link from "next/link";
import iitStartup from "@/public/supporter/iit Startups.png";
import nasscom from "@/public/supporter/nasscom.png";
import  {motion} from "framer-motion";
import pitch from "@/public/assets/pitch.png";
interface OwnProps {}

type Props = OwnProps;
type detail={
  src:StaticImageData,
  link:string,
}
const Detail:detail[]=[
  {
    src:ecell,
    link:"https://www.ecelliitbhu.com/",
  },
  {
    src:aiba,
    link:"https://alumni.iitbhu.ac.in/",
  }
  ,
  {
    src:saic,
    link:"https://saic.iitbhu.ac.in/",
  },
  {
    src:promgf,
    link:"https://www.promfgmedia.com/",
  },
  {
    src:assi,
    link:"https://alumni.iitbhu.ac.in/",
  },
  {
    src:kdem,
    link:"https://karnatakadigital.in/",
  }
]
const Organizer: FunctionComponent<Props> = (props) => {
  return (
    <div
      className={`relative flex min-w-min  flex-col items-center overflow-hidden py-20 md:py-40 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-black md:text-gray-800 dark:text-white md:text-4xl">
            A Joint <span className="text-white">Initiative</span>
            &nbsp;by
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            {
              Detail.map((data,index)=>{
                return(
                    <motion.div key={index}  initial={{ rotateY: 180,scale:0  }}
                                 transition={{delay:index*.3, duration: 1 }}
                                 whileInView={{ rotateY:0 ,scale:1}}
                                 viewport={{ once: true }}>
                      <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
                        <Link href={data.link} target={"_blank"}>
                          <Image
                              src={data.src}
                              width={200}
                              height={200}
                              loading="lazy"
                              alt="logo airbnb"
                              className={"rounded-xl"}
                          />
                        </Link>
                      </div></motion.div>
                )
              })

            }
         </div>
        </div>
      </div>
      <div className="container mt-10 relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-black md:text-gray-800 dark:text-white md:text-4xl">
            <span className="text-white">Supported</span>
            &nbsp;by
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Link href={"https://iitstartups.org/"} target={"_blank"}>
                <Image
                  src={iitStartup}
                  width={200}
                  height={200}
                  loading="lazy"
                  alt="logo airbnb"
                  className={"rounded-xl"}
                />
              </Link>
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Link href={"https://www.coe-iot.com/"} target={"_blank"}>
                <Image
                  src={nasscom}
                  width={200}
                  height={200}
                  loading="lazy"
                  alt="logo microsoft"
                  className={"rounded-xl"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
