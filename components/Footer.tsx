// components/Footer.tsx
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import aassi_img from "@/public/logo/aassi_img.png";
import ecell_img from "@/public/logo/ecell_icon.png";
import aiba_img from "@/public/logo/aiba_img.png";
import pro_img from "@/public/logo/pro_img.png";
import saic_img from "@/public/logo/saic_img.png";
import kdem_img from "@/public/logo/kdem_img.png";
import styles from "./styles.module.css";
const overcallCordinator = [
  {
    name: "Nikhil Gupta",
    email: "guptanikhil123@gmail.com",
    phone: "+919845556565",
  },
  {
    name: "Dhiraj Daga",
    email: "dheraj.daga.app12@iitbhu.ac.in",
    phone: "+918090672982",
  },
];
const iitBhuAlumni = [
  {
    name: "Kannan Iyer",
    email: "ashwathelectric@gmail.com",
    phone: "+919342860485",
  },
  {
    name: "Shashikanth Pathak",
    email: "shashi639@gmail.com",
    phone: "+917028079213",
  },
  {
    name: "Akasmat Pradhan",
    email: "akasmat.pradhan.cer13@itbhu.ac.in",
    phone: "+918564061724",
  },
];
const sponsorshipOpportunities = [
  {
    name: "Sanjeev Nikore",
    email: "sanjeevnikore@gmail.com",
    phone: "+918910194593",
  },
  {
    name: "Sunil Khanna",
    email: "sunit.khanna@paniit.org",
    phone: "+919967522993",
  },
  {
    name: "Sai Kumar",
    email: "sai@promfgmedia.com",
    phone: "+919820121879",
  },
];
const speakingOpporunities = [
  {
    name: "Dr. Meeta Prakash",
    email: "meetaprakash91@gmail.com",
    phone: "+919972399103",
  },
  {
    name: "Nishant Shukla",
    email: "nishant@mopid.me",
    phone: "+919044344740",
  },
  {
    name: "Alysa Lobo",
    email: "alysa.promfgmedia.com",
    phone: "+919591230004",
  },
];

// --------------------------------------------------------Designed by Sumit--------------------------------------------------------
// New Footer

const Footer = () => {
  return (
    <footer className="rounded-xl bg-gray-200 pt-1 ">
      <div className="container m-auto space-y-8 px-6 py-5 text-gray-600 md:px-12 lg:px-20">
        <div className="flex flex-wrap justify-between items-center gap-4 border-b pb-2">
          <div className="flex items-center flex-wrap gap-6">
            <Link
              href={"https://www.ecelliitbhu.com/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              {" "}
              <Image
                src={ecell_img}
                alt="ecell"
                loading="lazy"
                width={80}
                height={60}
                // className="w-12 h"
              />
            </Link>
            <Link
              href={"https://alumni.iitbhu.ac.in/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              <Image
                src={aassi_img}
                alt="aassi"
                loading="lazy"
                width={80}
                height={60}
                // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20"
              />
            </Link>
            <Link
              href={"https://www.ecelliitbhu.com/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              {" "}
              <Image
                src={aiba_img}
                alt="aiba"
                loading="lazy"
                // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20"
                width={80}
                height={60}
              />
            </Link>
            <Link
              href={"https://www.promfgmedia.com/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              {" "}
              <Image
                src={pro_img}
                alt="prom"
                loading="lazy"
                // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20"
                width={80}
                height={60}
              />
            </Link>

            <Link
              href={"https://karnatakadigital.in/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              {" "}
              <Image
                src={kdem_img}
                alt="kdem"
                loading="lazy"
                // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20"
                width={80}
                height={60}
              />
            </Link>
            <Link
              href={"https://saic.iitbhu.ac.in/"}
              target={"_blank"}
              aria-label={"ecell"}
            >
              {" "}
              <Image
                src={saic_img}
                alt="saic"
                loading="lazy"
                // className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20"
                width={80}
                height={60}
              />
            </Link>
          </div>

          <div className="flex gap-6">
            <Link
              className="menu-link"
              href="https://www.linkedin.com/events/7092557076530405378/comments/"
              target={"_blank"}
            >
              <Icons.linkedin />
            </Link>
            <Link
              className="menu-link"
              target={"_blank"}
              href="https://twitter.com/ecelliitbhu"
            >
              <Icons.twitter />
            </Link>
            <Link
              className="menu-link"
              target={"_blank"}
              href="https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ"
            >
              <Icons.youtube />
            </Link>
            <Link
              className="menu-link"
              href="https://www.instagram.com/ecelliitbhu/"
              target={"_blank"}
            >
              <Icons.instagram />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Company links */}

          {/*<div>*/}
          {/*  <h6 className="text-lg font-medium text-cyan-900">*/}
          {/*    E-Cell IIT BHU*/}
          {/*  </h6>*/}
          {/*  <ul className="mt-4 list-inside space-y-4">*/}
          {/*    <li className="pr-12">*/}
          {/*      <span className="">*/}
          {/*        E-Cell IIT BHU fosters innovation at IIT BHU Varanasi,*/}
          {/*        nurturing startups and providing networking opportunities for*/}
          {/*        aspiring entrepreneurs.*/}
          {/*      </span>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
          <div>
            <h6 className="text-lg font-medium text-cyan-900">
              Overall Coordinator
            </h6>
            <div className={"flex flex-col items-start mt-5 space-y-2"}>
              <ul className="list-inside space-y-4">
                {overcallCordinator.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start mt-5 space-y-2"
                    >
                      <li className="pr-12">
                        <h4 className="">{item.name}</h4>
                        <a
                          href={`mailto:${item.email}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.email}
                        </a>
                        <br />
                        <a
                          href={`tel:${item.phone}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.phone}
                        </a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-medium text-cyan-900">
              For IIT BHU Alumni
            </h6>
            <div className={"flex flex-col items-start mt-5 space-y-2"}>
              <ul className="list-inside space-y-4">
                {iitBhuAlumni.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start mt-5 space-y-2"
                    >
                      <li className="pr-12">
                        <h4 className="">{item.name}</h4>
                        <a
                          href={`mailto:${item.email}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.email}
                        </a>
                        <br />
                        <a
                          href={`tel:${item.phone}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.phone}
                        </a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-medium text-cyan-900">
              For Sponsorship Opportunities
            </h6>
            <div className={"flex flex-col items-start mt-5 space-y-2"}>
              <ul className="list-inside space-y-4">
                {speakingOpporunities.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start mt-5 space-y-2"
                    >
                      <li className="pr-12">
                        <h4 className="">{item.name}</h4>
                        <a
                          href={`mailto:${item.email}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.email}
                        </a>
                        <br />
                        <a
                          href={`tel:${item.phone}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.phone}
                        </a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-medium text-cyan-900">
              For Speaking Opportunities
            </h6>
            <div className={"flex flex-col items-start mt-5 space-y-2"}>
              <ul className="list-inside space-y-4">
                {speakingOpporunities.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-start mt-5 space-y-2"
                    >
                      <li className="pr-12">
                        <h4 className="">{item.name}</h4>
                        <a
                          href={`mailto:${item.email}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.email}
                        </a>
                        <br />
                        <a
                          href={`tel:${item.phone}`}
                          className={
                            "text-gray-600 transition-colors duration-300 hover:underline hover:text-primary"
                          }
                        >
                          {item.phone}
                        </a>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
