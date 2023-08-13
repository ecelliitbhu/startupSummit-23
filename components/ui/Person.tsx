import { StaticImageData } from "next/image";
import Image from "next/image";

import React from "react";
interface PersonProps {
  name: string;
  company: string;
  imageUrl: StaticImageData;
  quote?: string;
  position?: string;
}
const Person: React.FC<PersonProps> = ({
  name,
  company,
  imageUrl,
  quote,
  position,
}) => {
  return (
    <div className="group relative rounded-3xl space-y-6 overflow-hidden flex-wrap image max-w-sm m-2">
      <Image
        className="mx-auto h-[30rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        src={imageUrl}
        alt="trailblazer"
        loading="lazy"
        width="600"
        height="800"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-primary translate-y-[100px] transition duration-300 ease-in-out group-hover:translate-y-0"
        style={{ height: "50%" }}
      >
        <div>
          <h4 className="text-xl font-semibold dark:text-gray-700 text-white mt-4">
            {name}
          </h4>
          <span className="block text-sm text-primary-foreground">
            {position}
          </span>
        </div>
        <p className={"text-primary-foreground mt-12 "}>{quote}</p>
      </div>
    </div>
  );
};

export default Person;
