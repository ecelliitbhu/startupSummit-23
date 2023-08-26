"use client";
import React from "react";
import  {motion} from "framer-motion";
import panel from "@/public/assets/panel.png";
import fireside from "@/public/assets/fireside.png";
import keynote from "@/public/assets/keynote.png";
import pitch from "@/public/assets/pitch.png";
import startupstreet from "@/public/assets/startupstreet.png";
import networking from "@/public/assets/networking.png";
import Image,{StaticImageData} from "next/image";
type detail={
  src:StaticImageData,
  heading:string,
  des:string
}
const Detail:detail[]=[
    {
      src:pitch,
      heading:"Pitch Pavilion",
      des:"The Pitch Pavilion is a dynamic event where the top 20 startups present their innovative ideas to a pool of investors, aiming to secure funding and support for their ventures."
    },
  {
    src:startupstreet,
    heading:"Startup Street",
    des:"Startup Street is a vibrant showcase featuring 30 innovative startups, offering a glimpse into their diverse range of products and services."
  },
  {
    src:panel,
    heading:"Panel Discussions",
    des:" The event features 4+ panel discussions, each hosting a diverse group of experts who engage in illuminating conversations."
  },
  {
    src:keynote,
    heading:"Keynote Talks",
    des:"Keynote talks at the event present captivating insights from industry luminaries, providing attendees with visionary perspectives and inspiring ideas that shape the future of the business landscape."
  },
  {
    src:networking,
    heading:"Networking and Knowledge Exchange Opportunities",
    des:"Seize unparalleled networking opportunities at the event, fostering connections that pave the way for collaborations and growth."
  },
  {
    src:fireside,
    heading:"Fireside Chats",
    des:"Fireside chats offer intimate conversations with industry leaders, delving into their experiences and strategies, providing attendees with candid insights and actionable takeaways in an informal setting."
  },
]
const About: React.FC = () => {
  return (
    <div id={"events"}>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Events</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-y-hidden">
            {
              Detail.map((data,index)=> {
                return (<motion.div key={index} initial={{opacity: 0, y: 100}}
                                    transition={{delay: index*.2, duration: .5 ,}}
                                    whileInView={{opacity: 1, y: 0,}} viewport={{once: true}}>
                     <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
                      <Image src={data.src} width={100} height={100} alt="panel"/>

                      <h2 className="mt-4 text-xl font-bold text-white">
                        {data.heading}
                      </h2>

                      <p className="mt-1 text-sm text-gray-300">
                        {data.des}
                      </p>
                       </div>
                    </motion.div>
                )
              })
            }</div>
        </div>
      </section>
    </div>
  );
};
export default About;
