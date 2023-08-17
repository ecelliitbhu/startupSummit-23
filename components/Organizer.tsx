import React, { FunctionComponent } from "react";
import Image from "next/image";
import ecell from "@/public/logo/E-Cell.png";
import assi from "@/public/logo/AASSI.png";
import aiba from "@/public/logo/AIBA.png";
import saic from "@/public/logo/SAIC.png";
import promgf from "@/public/logo/proMFG.png";
import kdem from "@/public/logo/KDEM.png";
import bg from "@/public/bbblurry.svg";

interface OwnProps {}

type Props = OwnProps;

const Organizer: FunctionComponent<Props> = (props) => {
  return (
    <div
      className={`relative mt-4 mb-4 flex min-w-min  flex-col items-center overflow-hidden py-20 md:py-40 `}
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-12/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            A Joint <span className="text-primary-foreground">Initiative</span>{" "}
            by
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-12/12 lg:w-12/12 xl:w-8/12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={ecell}
                width={200}
                height={200}
                loading="lazy"
                alt="logo airbnb"
                className={"rounded-xl"}
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={aiba}
                width={200}
                height={200}
                loading="lazy"
                alt="logo microsoft"
                className={"rounded-xl"}
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={saic}
                width={200}
                height={200}
                loading="lazy"
                alt="logo ge"
                className={"rounded-xl"}
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={promgf}
                width={200}
                height={200}
                loading="lazy"
                alt="logo bissell"
                className={"rounded-xl"}
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={assi}
                width={200}
                height={200}
                loading="lazy"
                alt="logo bissell"
                className={"rounded-xl"}
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 p-2 hover:bg-opacity-10">
              <Image
                src={kdem}
                width={200}
                height={200}
                loading="lazy"
                alt="logo automatic"
                className={"rounded-xl"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
       
  );
};

export default Organizer;
