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
];

const Hightlight: React.FC = () => {
  return (
    <div className="">
      {/*<div className="xl:container px-6 text-gray-500 md:px-12 m-auto mb-6">*/}
      {/*  <div className={"flex justify-center"}>*/}
      {/*    <h2 className="mt-8 text-2xl text-black font-bold md:text-4xl">*/}
      {/*      Summit Highlights*/}
      {/*    </h2>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="flex-1 space-y-4 p-8 px-28 pt-14">
        <div className="flex ">
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
                  "rounded-full w-36 h-36  bg-primary  -m-2 border-4 justify-center items-center pt-2 "
                }
              >
                <CardHeader className=" text-center space-y-0 pb-2 ">
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stat.number}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-sm text-center font-medium text-primary-foreground">
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
