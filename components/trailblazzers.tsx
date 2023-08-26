"use client";
import React from "react";
import Image from "next/image";
import  {motion} from "framer-motion";
import { images } from "@/components/ui/Photos";
const Hightlight: React.FC = () => {
  return (
    <div className=" dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">
          IIT BHU <span className="text-blue-500">Trailblazers</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 overflow-x-hidden">
          {images.map((data, index) => {
            return (
              <motion.div
                  initial={{opacity:0 ,x:100}}  transition={{delay:index*.3,duration:1}} whileInView={{ opacity: 1,x:0 }} viewport={{once:true}}
                key={index}
                className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
              >
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    src={data.imageUrl}
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    width={200}
                    height={200}
                    alt="Images"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold  capitalize md:text-2xl dark:text-white group-hover:text-white">
                      {data.name}
                    </h1>

                    <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      {data.position}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {data.quote}
                </p>

                <div className="flex mt-4 -mx-2">
                  <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 pl-2">
                    IIT BHU Batch Of {data.year}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hightlight;
