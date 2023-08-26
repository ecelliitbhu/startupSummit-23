import React from "react";
import { StaticImageData } from "next/image";
import img1 from "@/public/Speakers/1.png";
import img2 from "@/public/Speakers/2.png";
import img3 from "@/public/Speakers/3.png";
import img4 from "@/public/Speakers/4.png";

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
    image: img2,
    position: "Managin Director Microsoft India",
    email: "mailto:vanshika.gupta.met20@itbhu.ac.in",
    linkedin: "https://www.linkedin.com/in/irinaghose/",
  },
  {
    name: "Saurabh Chandra",
    image: img3,
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
        className="container grid items-center gap-6 pb-8 pt-6 md:py-10"
      >
        <h1 className={"-mt-10 flex justify-center text-[3rem]"}>
          Key Speakers
        </h1>
        <div className="flex flex-wrap justify-center ">
          {listenNowAlbums.map((album) => (
            <TeamComponent
              key={album.name}
              album={album}
              className="m-4 w-[200px]"
              aspectRatio="portrait"
              width={200}
              height={150}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default KeySpeaker;
