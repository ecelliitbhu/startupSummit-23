"use client";
import React from "react";
import { StaticImageData } from "next/image";
import img1 from "@/public/Speakers/1.png";
import img22 from "@/public/Speakers/22.png";
import img33 from "@/public/Speakers/33.png";
import img4 from "@/public/Speakers/4.png";
import  {motion} from "framer-motion";
import { TeamComponent } from "@/components/KeySpeakersCard";

export interface Album {
  name: string;
  image: StaticImageData;
  position: string;
  email: string;
  linkedin: string;
}

const listenNowAlbums: Album[] = [
  {
    name: "Amit Agarwal",
    image: img1,
    position: "Founder & CEO, NoBroker.com",
    email: "mailto:parthsanjeev.gupta.che20@itbhu.ac.in",
    linkedin: "https://www.linkedin.com/in/amit-kumar-agarwal-5b30301/",
  },
  {
    name: "Irina Ghose",
    image: img22,
    position: "Managing Director Microsoft India",
    email: "mailto:vanshika.gupta.met20@itbhu.ac.in",
    linkedin: "https://www.linkedin.com/in/irinaghose/",
  },
  {
    name: "Saurabh Chandra",
    image: img33,
    position: "CEO Ati Motors",
    email: "mailto:atharv.patil.che21@itbhu.ac.in",
    linkedin: "https://www.linkedin.com/in/saurabhchandra/",
  },
  {
    name: "Sanjeev Kumar Gupta",
    image: img4,
    position: "Karnataka Digital Economy Mission",
    email: "mailto:mridul.ramakrishnan.mat21@itbhu.ac.in",
    linkedin: "https://www.linkedin.com/in/sanjeevkgupta/",
  },
];

const KeySpeaker = () => {
  return (
    <>
      <section
        id={"speakers"}
        className="container grid items-center gap-6  pt-6"
      >
        <h1 className="mt- flex justify-center text-2xl font-semibold text-center  capitalize lg:text-3xl dark:text-white">
          Key <span className="text-blue-500"> &nbsp;Speakers</span>
        </h1>
        <div className="flex flex-wrap justify-center overflow-x-hidden ">
          {listenNowAlbums.map((album,index) => (
              <motion.div initial={{opacity:0 ,x:-100}}  transition={{delay:index*.3,duration:1}} whileInView={{ opacity: 1,x:0 }} viewport={{once:true}}  key={index}>
            <TeamComponent
              key={album.name}
              album={album}
              className="m-4 w-[200px]"
              aspectRatio="portrait"
              width={200}
              height={150}
            />
              </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default KeySpeaker;
