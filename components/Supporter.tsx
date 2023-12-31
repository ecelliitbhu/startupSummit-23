import React, { FunctionComponent } from "react";
import Image from "next/image";
import iitStartup from "@/public/supporter/iit Startups.png";
import nasscom from "@/public/supporter/nasscom.png";
import bg from "@/public/bbblurry.svg";
import Link from "next/link";
import ecell from "@/public/logo/E-Cell2.png";
import aiba from "@/public/logo/AIBA2.png";
import saic from "@/public/logo/SAIC2.png";
import promgf from "@/public/logo/ProMFG2.png";
import assi from "@/public/logo/AASSII.png";
import kdem from "@/public/logo/KDEM2.png";

interface OwnProps {}

type Props = OwnProps;

const Supporter: FunctionComponent<Props> = (props) => {
  return (
    <div
      id={"supporter"}
      className={`relative flex min-w-min  flex-col items-center overflow-hidden p-4 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            <span className="text-white">Supported</span>
            &nbsp;by
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Link href={"https://www.ecelliitbhu.com/"} target={"_blank"}>
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
              <Link href={"https://alumni.iitbhu.ac.in/"} target={"_blank"}>
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
            {/*<div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">*/}
            {/*  <Link href={"https://saic.iitbhu.ac.in/"} target={"_blank"}>*/}
            {/*    <Image*/}
            {/*        src={saic}*/}
            {/*        width={200}*/}
            {/*        height={200}*/}
            {/*        loading="lazy"*/}
            {/*        alt="logo ge"*/}
            {/*        className={"rounded-xl"}*/}
            {/*    />*/}
            {/*  </Link>*/}
            {/*</div>*/}
            {/*<div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">*/}
            {/*  <Link href={"https://www.promfgmedia.com/"} target={"_blank"}>*/}
            {/*    <Image*/}
            {/*        src={promgf}*/}
            {/*        width={200}*/}
            {/*        height={200}*/}
            {/*        loading="lazy"*/}
            {/*        alt="logo bissell"*/}
            {/*        className={"rounded-xl"}*/}
            {/*    />*/}
            {/*  </Link>*/}
            {/*</div>*/}
            {/*<div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">*/}
            {/*  <Link href={"https://alumni.iitbhu.ac.in/"} target={"_blank"}>*/}
            {/*    <Image*/}
            {/*        src={assi}*/}
            {/*        width={200}*/}
            {/*        height={200}*/}
            {/*        loading="lazy"*/}
            {/*        alt="logo bissell"*/}
            {/*        className={"rounded-xl"}*/}
            {/*    />*/}
            {/*  </Link>*/}
            {/*</div>*/}
            {/*<div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">*/}
            {/*  <Link href={"https://karnatakadigital.in/"} target={"_blank"}>*/}
            {/*    <Image*/}
            {/*        src={kdem}*/}
            {/*        width={200}*/}
            {/*        height={200}*/}
            {/*        loading="lazy"*/}
            {/*        alt="logo automatic"*/}
            {/*        className={"rounded-xl"}*/}
            {/*    />*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supporter;

// <Image
//     src={nasscom}
//     height={100}
//     width={100}
//     className="contrast-0 transition group-hover:contrast-100"
//     loading="lazy"
//     alt="logo microsoft"
// />
