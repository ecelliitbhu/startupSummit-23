"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import logo from "@/public/logo/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
    link: "",
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
        "w-[100%] sticky z-10 top-8 max-w-[76.5rem] m-auto lg:p-0 px-4"
      }
    >
      <nav className="w-full rounded-full z-10 bg-gray-300 opacity-95  md:absolute fixed">
        <div className="m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-4 gap-6 md:py-4 md:gap-0 relative">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                {/*<div aria-hidden="true" className="flex space-x-1">*/}
                {/*  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>*/}
                {/*  <div className="h-6 w-2 bg-teal-500"></div>*/}
                {/*</div>*/}
                {/*<span className="text-2xl font-bold text-green-900 dark:text-white">*/}
                {/*  E-Cell*/}
                {/*</span>*/}
                <Image
                  src={logo}
                  width={80}
                  height={80}
                  // className={'mix-blend-multiply'}
                  alt="startup summit logo"
                />
              </a>

              <div className="flex items-center lg:hidden max-h-10">
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
                    bg-white dark:bg-gray-900 lg:gap-0 
                    lg:p-0  
                    lg:bg-transparent lg:w-auto"
            >
              <div className="text-gray-400 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul
                  className=" 
                            tracking-wide 
                            font-medium 
                            text-sm flex-col flex 
                            lg:flex-row
                            gap-6 lg:gap-0"
                >
                  {nav.map((navigator, index) => {
                    return (
                      <li key={index}>
                        <Link href={navigator.link}>
                          <Button variant={"link"}>
                            <span>{navigator.name}</span>
                          </Button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="w-full lg:pl-2 space-y-2 border-primary lg:w-auto lg:space-y-0 sm:w-max lg:border-l">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      type="button"
                      title="Start buying"
                      className={"rounded-full"}
                    >
                      Register
                    </Button>{" "}
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Investor</DropdownMenuItem>
                    <DropdownMenuItem>Startup</DropdownMenuItem>
                    <DropdownMenuItem>Attendee</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
