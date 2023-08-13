"use client";
import React from "react";
import demo1 from "@/public/assets/demo1.svg";
import Image from "next/image";
import { Alert } from "flowbite-react";
const Content: React.FC = () => {
  return (
    <div className="py-16">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:5/12 lg:w-1/2">
            <Image
              className="object-cover"
              src={demo1}
              alt="image"
              loading="lazy"
              width="500"
              height="400"
            />
          </div>
          <div className="md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white capitalize">
              who should attend
            </h2>

            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      1
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-indigo-300">
                    IIT Alumni Founders
                  </p>
                  {/*<p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt*/}
                  {/*    quam mollitia.</p>*/}
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      2
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    VCs, Angels and Organisations looking at funding India’s
                    rapidly growing startup ecosystem
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-amber-100 dark:bg-amber-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-amber-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      3
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    Early-stage founders, pre-seed and seed
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-green-100 dark:bg-green-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-green-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      4
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    Enterprises providing services to startups
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-fuchsia-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      5
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    Technology Firms and End-User Businesses having startup
                    ecosystems and partnerships
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-rose-100 dark:bg-rose-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-rose-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      6
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    Policymakers
                  </p>
                </div>
              </div>
              <div className="pt-4 flex gap-4 md:items-center">
                <div className="w-12 h-12 flex gap-4 rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 m-auto text-blue-600 dark:text-teal-400"
                  >
                    <text
                      x="12"
                      y="18"
                      textAnchor="middle"
                      fontSize="19"
                      fill="currentColor"
                    >
                      7
                    </text>
                  </svg>
                </div>
                <div className="w-5/6">
                  <p className=" text-lg text-gray-700 dark:text-teal-300">
                    Mentors, Experts, Academicians, and Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
