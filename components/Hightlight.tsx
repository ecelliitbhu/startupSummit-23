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
  return (
    <div className="py-16">
      <div className="xl:container px-6 text-gray-500 md:px-12 m-auto mb-6">
        <div className={"flex justify-center"}>
          <h2 className="mt-4 text-2xl text-black font-bold md:text-4xl">
            Summit Highlights
          </h2>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 px-28 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
    </div>
  );
};
export default Hightlight;
