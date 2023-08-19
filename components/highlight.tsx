"use client";
import React from "react";
import demo1 from "@/public/assets/demo1.svg";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
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
    <div className="w-[100%]">
      <div className="flex-1 space-y-4 p-8 px-4 lg:px-28 pt-14">
        <div className="flex w-[100%] ">
          {stats.map((stat, index) => {
            return (
              <motion.div
                initial={{ scale: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  // type: "spring",
                  // stiffness: 200,
                  // damping: 15
                }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0 }}
                key={index}
                className={
                  "rounded-full w-24 h-24  sm:w-28 sm:h-28 lg:w-32 lg:h-32  bg-primary overflow-hidden -m-2 border-4 flex flex-col justify-center items-center lg:pt-2 "
                }
              >
                <CardHeader className=" text-center pb-2 lg:pb-2 ">
                  <div className="text-ld sm:lg md:text-2xl font-bold text-primary-foreground">
                    {stat.number}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xs md:text-sm text-center font-medium text-primary-foreground">
                    {stat.title.toUpperCase()}
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
