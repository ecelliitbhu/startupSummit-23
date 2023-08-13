import React, { FunctionComponent } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "Welcome Address, Kulgeet and Lighting the Lamp\n",
    description: "",
  },
  {
    title: "Policy Keynote: \n",
    description:
      '"Role of Start-ups in India’s Digital Economy" - Dr Chintan Vaishnav, Director- Atal Innovation Mission, NITI Aayog (Invited)',
  },
  {
    title: "Technology Keynote: ",
    description:
      "Ms Irina Ghose, Managing Director - Microsoft India (Invited)\n",
  },
  {
    title: "Panel Discussion:",
    description:
      ' "Strategic Building Blocks for Startups" \n> Attracting and Engaging talent in startups\n> Financing\\n> Technology support available\\n"',
  },
  {
    title: "Fireside Chat: ",
    description:
      '"Start-up Journey at Karnataka Digital Economy Mission (KDEM)"\nMr Sanjeev Gupta, CEO, KDEM, with Dr Meeta Prakash, Principal Consultant at Infosys Technologies and Alumnus of IT (BHU) Varanasi\n',
  },
  {
    title: "Technology Keynote:",
    description:
      " Ms Irina Ghose, Managing Director - Microsoft India (Invited)\n",
  },
];

const day2 = [
  {
    title: "Welcome Address:",
    description: " 9:30 AM\n",
  },
  {
    title: "The PITCH PAVILION:",
    description: " Startup Presentations - 9:45 AM- 11:30 AM",
  },
  {
    title:
      "Masterclass on Fintech/EdTech/HealthTech/E-commerce/ Digital Manufacturing:",
    description: " 11:30 AM-1:00 PM.",
  },
];
interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <div className={"pt-30 lg:pt-44 md:flex justify-center align-middle"}>
      <Card className={cn("w-[580px] m-4")} {...props}>
        <CardHeader>
          <CardTitle>Day 1</CardTitle>
          {/*<CardDescription>You have 3 unread messages.</CardDescription>*/}
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        {/*<CardFooter>*/}
        {/*  <Button className="w-full">*/}
        {/*    <Check className="mr-2 h-4 w-4" /> Mark all as read*/}
        {/*  </Button>*/}
        {/*</CardFooter>*/}
      </Card>
      <Card className={cn("w-[580px] m-4")} {...props}>
        <CardHeader>
          <CardTitle>Day 2</CardTitle>
          {/*<CardDescription>You have 3 unread messages.</CardDescription>*/}
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {day2.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className={"text-center"}>
          <p className={"font-bold"}>
            Lunch Break: 1:00 PM- 2:00 PM Networking and Exhibition Walkthrough:
            2:00 PM - 3:30 PM Closure: 3:30 PM
          </p>
          {/*  <Button className="w-full">*/}
          {/*    <Check className="mr-2 h-4 w-4" /> Mark all as read*/}
          {/*  </Button>*/}
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
