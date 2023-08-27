"use client";
import React from "react";
import  {motion} from "framer-motion";
import bg from "@/public/blobanimation.svg";
import { CheckIcon } from "@radix-ui/react-icons";

const Detail = [
  {
    detail: "IIT Alumni Founders",
  },
  {
    detail:
      " VCs, Angels and Organisations looking at funding India’s rapidly growing startup ecosystem",
  },
  {
    detail: "Early-stage founders, pre-seed and seed",
  },

  {
    detail: "Enterprises providing services to startups",
  },
  {
    detail:
      "Technology Firms and End-User Businesses having startup ecosystems and partnerships",
  },
  {
    detail: "Policymakers",
  },
  {
    detail: " Mentors, Experts, Academicians, and Students",
  },
];

const Content: React.FC = () => {
  return (
    <div
      className="w-[calc(100%-2rem)]] max-h-max p-2 sm:p-16 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`  w-[calc(100%-2rem)]] min-h-[100%]  bg-opacity-10 backdrop-blur-md border border-opacity-20 border-solid border-white backdrop-filter shadow-lg rounded-lg`}
      >
        <h2 className="pt-8 text-3xl font-bold text-white md:text-4xl dark:text-white capitalize text-center">
          who should attend
        </h2>
        <div className=" my-4 lg:mt-14 grid grid-cols-1 md:grid-cols-2 content-around justify-items-start pl-2 sm:pl-16 m-auto overflow-hidden">
          {Detail.map((data, index) => {
            return (
                <motion.div key={index}  initial={{opacity: 0, scale:0}}
                            transition={{delay: index*.3, duration: 1 ,}}
                            whileInView={{opacity: 1, scale:1}} viewport={{once: true}}>
              <div
                className="flex  items-center max-w-md h-16  shadow lg:m-4 lg:p-1"
                key={index}
              >
                <div>
                  <CheckIcon className="text-[#03ffd5] w-8 h-8 bg-[#0f312b] rounded-full text-2xl mr-1" />
                </div>
                <p>{data.detail}</p>
              </div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Content;
