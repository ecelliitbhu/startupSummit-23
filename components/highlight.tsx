"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  motion,
} from "framer-motion";
const stats = [
  {
    title: "attendees",
    number: "7000+",
  },
  {
    title: "startups",
    number: "250+",
  },
  {
    title: "mentors",
    number: "100+",
  },
  {
    title: "investors",
    number: "50+",
  },
  {
    title: "speakers",
    number: "30+",
  },
  {
    title: "unicorns",
    number: "7",
  },
];

const Hightlight: React.FC = () => {
  return (
    <div className="">
      <div className=" space-y-4 p-8 px-4 lg:px-28 pt-14">
        <div className="flex  ">
          {stats.map((stat, index) => {
            return (
              <motion.div
                initial={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0 }}
                key={index}
                className={
                  "rounded-full w-16 h-16 xs:w-28 xs:h-28  sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white  bg-[#02bef2] overflow-hidden -m-2 border-2 border-[#0483ba] flex flex-col justify-center items-center lg:pt-2 "
                }
              >
                <CardHeader className=" text-center pb-2.5 lg:pb-2 ">
                  <div className=" text-xs xs:text-lg sm:text-lg md:text-2xl font-bold ">
                    {stat.number}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="-mt-2 sm:mt-0 text-xs md:text-sm text-center font-normal sm:font-medium sm:uppercase ">
                    {stat.title}
                  </CardTitle>
                </CardContent>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Hightlight;
