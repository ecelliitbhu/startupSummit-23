import React from "react";
import meeting from "@/public/assets/meeting.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Home: React.FC = () => {
  return (
    <div>
      {/*<Image*/}
      {/*  className="absolute inset-0 w-full h-full object-cover object-top"*/}
      {/*  src={meeting}*/}
      {/*  width="400"*/}
      {/*  height="500"*/}
      {/*  alt="hero background image"*/}
      {/*/>*/}
      {/*<Image*/}
      {/*  className="absolute w-full object-cover blur-3xl object-left-top h-screen inset-0 top-0 hidden dark:block"*/}
      {/*  src={meeting}*/}
      {/*  alt="image"*/}
      {/*  loading="lazy"*/}
      {/*/>*/}
      {/*<Image*/}
      {/*  className="absolute w-full object-cover object-top h-screen inset-0 top-0 dark:hidden"*/}
      {/*  src={meeting}*/}
      {/*  alt="image"*/}
      {/*  loading="lazy"*/}
      {/*/>*/}
      <div className="flex justify-center container m-auto px-6 md:px-12 lg:px-7">
        <div className="py-40 pb-0 lg:pb-0 px-20 flex-col justify-center items-center lg:py-56  dark:lg:w-6/12 ml-auto">
          <h1 className="text-gray-900 dark:text-white text-center font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl">
            Digital Startup Summit{" "}
            <span className="text-primary">Bangalore.</span>
          </h1>
          <p className="mt-8 px-36 text-gray-700 dark:text-gray-300 text-center">
            The Digital Startup Summit 2023 is a groundbreaking two-day event
            that brings together aspiring entrepreneurs, seasoned professionals,
            industry experts, and investors from across the globe to the vibrant
            city of Bengaluru. Organised by the Student Alumni Interaction Cell
            (SAIC) and Entrepreneurship Cell (E-Cell) of IIT (BHU) Varanasi, in
            association with the esteemed alumni bodies of IIT (BHU) Varanasi,
            the Karnataka Digital Economy Mission, and Pro MFG Media, this
            summit promises to be a transformative experience for all attendees.
            Mark your calendars for October 28th and 29th, 2023, as the Taj
            Yeshwantpur in Bengaluru opens its doors to welcome the brightest
            minds in the startup ecosystem.
          </p>
          <div className="mt-16 flex justify-center align-middle space-y-2 lg:space-y-0 sm:space-x-6">
            <Button
              type="button"
              title="Start buying"
              size={"lg"}
              className={"rounded-full"}
            >
              Register
            </Button>
            <Button
              type="button"
              size={"lg"}
              variant={"outline"}
              title="Start buying"
              className={"rounded-full"}
            >
              About us
            </Button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
