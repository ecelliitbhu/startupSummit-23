"use client";
import React from "react";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import heroVideo from "@/public/vid/ecellvideo.mp4";

import Hightlight from "@/components/highlight";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Home: React.FC = () => {
  return (
    <div className="w-[100%] h-[100vh] overflow-x-hidden relative ">
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
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1",
                left: 0,
                top: 0,
              }}
            />
            <div></div>{" "}
            <div
              className="mt-auto flex items-center space-x-4"
              style={{ color: "white" }}
            >
              <div className="flex items-center">
                <Icons.calendar size={40} strokeWidth={1.25} />
                <b className="ml-2 text-xl lg:text-2xl">OCTOBER 28-29</b>
              </div>
              <div className="flex items-center">
                <Icons.location size={40} strokeWidth={1.25} />
                <b className="ml-2 text-xl lg:text-2xl">
                  TAJ YESHWANTPUR, BENGALURU
                </b>
              </div>
            </div>
            <div className="pt-32 text-center  ">
              <DropdownMenu>
                <DropdownMenuTrigger className={"outline-none"}>
                  <Button
                    type="button"
                    size="lg"
                    className={"    focus-visible:outline-none"}
                  >
                    REGISTER
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <Link
                    href={"https://forms.gle/UNSupDxDiVUvX7Rz9"}
                    target={"_blank"}
                  >
                    <DropdownMenuItem>Investor</DropdownMenuItem>
                  </Link>
                  <Link
                    href={"https://forms.gle/uYXQ6Jf7npjtpTJA8"}
                    target={"_blank"}
                  >
                    <DropdownMenuItem>Startup</DropdownMenuItem>
                  </Link>
                  <Link href={"/attendee"}>
                    <DropdownMenuItem>Attendee</DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
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
        <div className="flex items-center justify-center  ">
          <Hightlight />
        </div>
      </div>
    </div>
  );
};

export default Home;
