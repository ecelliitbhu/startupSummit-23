import React, { FunctionComponent } from "react";
import Image from "next/image";
import iitStartup from "@/public/supporter/iit Startups.png";
import nasscom from "@/public/supporter/nasscom.png";

interface OwnProps {}

type Props = OwnProps;

const Supporter: FunctionComponent<Props> = (props) => {
  return (
    <div className="py-8 lg:py-2">
      <div className="m-auto space-y-8 px-6 text-primary-foreground md:px-12 lg:px-20">
        <div className="items-center gap-12">
          <div className="items-center mx-auto text-center">
            <h2 className="text-2xl items-center mx-auto font-bold text-white">
            Supported by
            </h2>
          </div>
          <div className="mt-8 mx-16 lg:mt-0 md:mx-48 lg:mx-96">
            <div className="-mx-6 flex gap-6 px-6 justify-between lg:gap-2">
              <div className="items-center rounded-xl lg:p-4">
                <Image
                  src={iitStartup}
                  height={100}
                  width={100}
                  className="w-24 lg:w-28"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>

              <div className="flex items-center rounded-xl lg:p-4 ">
                <Image
                  src={nasscom}
                  height={100}
                  width={100}
                  className="w-24 lg:w-28"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
            </div>
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
