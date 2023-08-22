"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "@/public/logo/whitelogo.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface OwnProps {}

const nav = [
  {
    name: "Speakers",
    link: "/speakers",
  },
  {
    name: "Partners",
    link: "/partners",
  },
  {
    name: "Events",
    link: "/#events",
  },
  {
    name: "Agenda",
    link: "/agenda",
  },
  {
    name: "Startup/Participants",
    link: "",
  },
  {
    name: "Investors",
    link: "",
  },
];

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
  return (
    <header
      className={
        "w-[100%] sticky z-10 top-8 max-w-[76.5rem] m-auto lg:p-0 "
      }
    >
      <nav className="w-full rounded-full z-10 bg-background  opacity-95  md:absolute fixed mt-1">
        <div className="m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-2 md:gap-0 relative">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="w-full px-6 flex justify-between items-center lg:w-max md:px-0">
              <Link
                href="/"
                aria-label="logo"
                className="flex -m-4 items-center"
              >
                <Image
                  src={logo}
                  width={80}
                  height={80}
                  alt="startup summit logo"
                  className='w-16 sm:w-32'
                />
              </Link>

              <div className="flex items-center lg:hidden max-h-10 mx-4">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <div
              className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 left-0 
                    lg:top-0 lg:relative peer-checked:flex w-full 
                    lg:flex lg:flex-row flex-col
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl 
                    bg-black dark:bg-gray-900 lg:gap-0
                    lg:p-0  
                    lg:bg-transparent lg:w-auto"
            >
              <div className="text-white dark:text-white lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul
                  className=" 
                            tracking-wide
                            font-light
                            text-sm flex-col flex
                            lg:flex-row
                            gap-6 lg:gap-0"
                >
                  {nav.map((navigator, index) => {
                    return (
                      <li key={index}>
                        <Link href={navigator.link}>
                          <Button
                            className={"text-white  font-light dark:text-black"}
                            variant={"link"}
                          >
                            <span>{navigator.name}</span>
                          </Button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger className={"outline-none"}>
                  <Button
                    type="button"
                    className={"rounded-full bg-[#02bef2] text-white focus-visible:outline-none"}
                  >
                    Register
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
