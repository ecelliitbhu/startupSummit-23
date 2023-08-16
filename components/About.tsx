import React from "react";
import demo1 from "@/public/assets/demo1.svg";
import women from "@/public/assets/woman.jpg";
import women1 from "@/public/assets/woman1.jpg";
import man from "@/public/assets/man.jpg";
import chat from "@/public/assets/chat-min.jpg";
import exhi from "@/public/assets/exhi-min.jpg";
import expert from "@/public/assets/expert-min.jpg";
import ipo from "@/public/assets/ipo-min.jpg";
import net from "@/public/assets/net1-min.jpg";
import panel from "@/public/assets/panel1-min.jpg";

import Image from "next/image";
const About: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto px-6 text-center md:px-12">
        <div className="mb-16">
          <h2 className="mt-14 mb-4 text-center text-2xl font-bold  md:text-4xl capitalize">
            Why should you attend
          </h2>
          {/*<p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">*/}
          {/*    Tailus prides itself not only on award-winning technology, but also on the talent of its*/}
          {/*    people of some of the brightest minds and most experienced executives in business.*/}
          {/*</p>*/}
        </div>
        <div className="grid gap-28 p-20 md:grid-cols-3 md:gap-12">
          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={ipo}
                alt="woman"
                loading="lazy"
                width="640"
                height="805"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">Investment Pitching Opportunities</h4>
              </div>
            </div>
          </div>

          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={net}
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">
                  Networking and Knowledge Exchange Opportunities
                </h4>
              </div>
            </div>
          </div>

          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={exhi}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">Exhibition Opportunity</h4>
              </div>
            </div>
          </div>
          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={expert}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">Hearing from Industry Experts</h4>
              </div>
            </div>
          </div>
          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={panel}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">Panel Discussions</h4>
              </div>
            </div>
          </div>
          <div className=" m-4 group space-y-8 border-t-4 border-gray-100 dark:border-gray-800">
            <div className="mx-auto -mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
              <Image
                className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                src={chat}
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
            </div>
            <div className="space-y-4 text-center">
              <div>
                <h4 className="text-lg">Fireside chats</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
