import React from "react";

import panel from "@/public/assets/panel.png";
import fireside from "@/public/assets/fireside.png";
import keynote from "@/public/assets/keynote.png";
import pitch from "@/public/assets/pitch.png";
import startupstreet from "@/public/assets/startupstreet.png";
import networking from "@/public/assets/networking.png";
import Image from "next/image";
const About: React.FC = () => {
  return (
    <div id={"events"}>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Events</h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={pitch} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Pitch Pavilion
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                The Pitch Pavilion is a dynamic event where the top 20 startups
                present their innovative ideas to a pool of investors, aiming to
                secure funding and support for their ventures.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={startupstreet} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Startup Street
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Startup Street is a vibrant showcase featuring 30 innovative
                startups, offering a glimpse into their diverse range of
                products and services.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={panel} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Panel Discussions
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                The event features 4+ panel discussions, each hosting a diverse
                group of experts who engage in illuminating conversations.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={keynote} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Keynote Talks
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Keynote talks at the event present captivating insights from
                industry luminaries, providing attendees with visionary
                perspectives and inspiring ideas that shape the future of the
                business landscape.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={networking} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Networking and Knowledge Exchange Opportunities
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Seize unparalleled networking opportunities at the event,
                fostering connections that pave the way for collaborations and
                growth.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/10">
              <Image src={fireside} width={100} height={100} alt="panel" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Fireside Chats
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                Fireside chats offer intimate conversations with industry
                leaders, delving into their experiences and strategies,
                providing attendees with candid insights and actionable
                takeaways in an informal setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
