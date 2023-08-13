import React, { FunctionComponent } from "react";
import Image from "next/image";
import ecell from "@/public/logo/E-Cell.png";
import assi from "@/public/logo/AASSI.png";
import aiba from "@/public/logo/AIBA.png";
import saic from "@/public/logo/SAIC.png";
import promgf from "@/public/logo/proMFG.png";
import kdem from "@/public/logo/KDEM.png";

interface OwnProps {}

type Props = OwnProps;

const Organizer: FunctionComponent<Props> = (props) => {
  return (
    <div className="relative flex flex-col items-center overflow-hidden py-20 md:py-40">
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            A Joint <span className="text-primary">Initiative</span> by
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={ecell}
                width={200}
                height={200}
                loading="lazy"
                alt="logo airbnb"
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={aiba}
                width={200}
                height={200}
                loading="lazy"
                alt="logo microsoft"
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={saic}
                width={200}
                height={200}
                loading="lazy"
                alt="logo ge"
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={promgf}
                width={200}
                height={200}
                loading="lazy"
                alt="logo bissell"
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={assi}
                width={200}
                height={200}
                loading="lazy"
                alt="logo bissell"
              />
            </div>
            <div className="group rounded-xl border border-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src={kdem}
                width={200}
                height={200}
                loading="lazy"
                alt="logo automatic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
