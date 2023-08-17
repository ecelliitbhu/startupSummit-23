"use client";
import React from "react";
import demo1 from "@/public/assets/demo1.svg";
import Image from "next/image";
import { Alert } from "flowbite-react";
import { useRef } from "react";
import ContentStyle from "@/styles/content.module.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import bg from "@/public/cool-background.svg";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const Detail = [
  {
    src: "rahul",
    detail: "IIT Alumni Founders",
  },
  {
    src: "rahul",
    detail:
      " VCs, Angels and Organisations looking at funding India’s rapidly growing startup ecosystem",
  },
  {
    src: "rahul",
    detail: "Early-stage founders, pre-seed and seed",
  },

  {
    src: "rahul",
    detail: "Enterprises providing services to startups",
  },
  {
    src: "rahul",
    detail:
      "Technology Firms and End-User Businesses having startup ecosystems and partnerships",
  },
  {
    src: "rahul",
    detail: "Policymakers",
  },
  {
    src: "rahul",
    detail: " Mentors, Experts, Academicians, and Students",
  },
];
type CardProps = {
  id: {
    src: string;
    detail: string;
  };
};

const Card: React.FC<CardProps> = ({ id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 150);

  return (
    <section className={`${ContentStyle.section} px-8 `}>
      <div
        ref={ref}
        className="border-2 flex justify-center items-center rounded-sm shadow-lg"
      >
        <Image src={demo1} alt="A London skyscraper" width={400} height={400} />
      </div>
      <motion.h2
        style={{ y }}
        className="text-2xl text-white font-medium tracking-tight w-1/4"
      >
        {id.detail}
      </motion.h2>
    </section>
  );
};
const Content: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div
      className="  "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative">
        <h2 className="pt-8 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white capitalize text-center">
          who should attend
        </h2>
        {Detail.map((data, index) => (
          <Card id={data} key={index} />
        ))}
        <motion.div className={ContentStyle.progress} style={{ scaleX }} />
      </div>
    </div>
  );
};
export default Content;
