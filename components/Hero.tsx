"use client";
import React from "react";
import meeting from "@/public/assets/meeting.jpg";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import heroVideo from "@/public/vid/video.mp4";

import Hightlight from "@/components/highlight";
const Home: React.FC = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-x-hidden ">
      <div className="flex justify-center container m-auto px-6 md:px-12 lg:px-7 ">
        <div className="py-40  pb-0 lg:pb-0 px-20 flex-col justify-center items-center   dark:lg:w-12/12 mx-auto">
          {/* video */}

          <div id="wrapper">
            <video
              src={heroVideo}
              className="hero-video"
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                  backgroundAttachment:"fixed",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
                left: 0,
                top: 0,
              }}
            />
            {/*<Image*/}
            {/*  src={meeting}*/}
            {/*  className="w-96 h-72 relative    mt-0 ml-20 inline-block mx-auto"*/}
            {/*  alt="overlay"*/}
            {/*/>*/}
            <div></div>{" "}

            <div
              className="mt-auto flex items-center space-x-4"
              style={{ color: "white" }}
            >
              <div className="flex items-center">
                <Icons.calendar size={40} strokeWidth={1.25} />
                <b className="ml-2 text-xl lg:text-2xl">AUGUST 20-22</b>
              </div>
              <div className="flex items-center">
                <Icons.location size={40} strokeWidth={1.25} />
                <b className="ml-2 text-xl lg:text-2xl">BENGALURU</b>
              </div>
            </div>
              <div className="flex justify-center mt-2 mb-2 ">
                  <Button type="button" title="Start buying" size="lg">
                      REGISTER
                  </Button>
              </div>

          </div>

          <div
            className="video-overlay"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "#0c0a09",
              opacity: 0.5,
              objectFit: "cover",
              zIndex: "-1",
              left: 0,
              top: 0,
            }}
          ></div>
        </div>

        <hr />
      </div>
        <div className="absolute bottom-0">
        <Hightlight />
        </div>
    </div>
  );
};

export default Home;
