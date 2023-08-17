import React from "react";
import demo1 from "@/public/assets/demo1.svg";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "attendees",
    number: "7000+",
  },
  {
    title: "start-ups",
    number: "250+",
  },
  {
    title: "mentors",
    number: "100+",
  },
  {
    title: "investors",
    number: "50+",
  },
  {
    title: "speakers",
    number: "30+",
  },
];

const Hightlight: React.FC = () => {
  // font : playlist script
  return (
    <div className="back mt-0 relative overflow-hidden">
      <div className="py-16">
      <div className="xl:container px-6 text-gray-500 md:px-12 m-auto mb-6">
        <div className={"flex justify-center"}>
          <h2 className="mt-4 text-2xl text-black font-bold md:text-4xl" style={{color:"white"}}>
            Summit Highlights
          </h2>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 px-28 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 md:mt-30 mid-screen-margin">
          {stats.map((stat, index) => {
            return (
              <Card
                key={index}
                className={
                  "rounded-full hover:border-primary transition ease-in-out bg-primary"
                }
              >
                <CardHeader className="flex items-center justify-between text-center space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary-foreground">
                    {stat.title.toUpperCase()}
                  </CardTitle>
                </CardHeader>
                <CardContent className={"text-center"}>
                  <div className="text-2xl font-bold text-primary-foreground">
                    {stat.number}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <p
            className="px-36 text-gray-700 dark:text-gray-300 text-center"
            style={{ color: "white" }}
          >
            
              The Digital Startup Summit 2023 is a groundbreaking two-day event
              that brings together aspiring entrepreneurs, seasoned
              professionals, industry experts, and investors from across the
              globe to the vibrant city of Bengaluru. Organised by the Student
              Alumni Interaction Cell (SAIC) and Entrepreneurship Cell (E-Cell)
              of IIT (BHU) Varanasi, in association with the esteemed alumni
              bodies of IIT (BHU) Varanasi, the Karnataka Digital Economy
              Mission, and Pro MFG Media, this summit promises to be a
              transformative experience for all attendees. Mark your calendars
              for October 28th and 29th, 2023, as the Taj Yeshwantpur in
              Bengaluru opens its doors to welcome the brightest minds in the
              startup ecosystem.
            
          </p>
    </div>
    </div>
    
    
  );
};
export default Hightlight;
