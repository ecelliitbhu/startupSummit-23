"use client";
import React, { FunctionComponent } from "react";
import Day1 from "@/components/Day1";
import Day2 from "@/components/Day2";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  return (
    <div className={"pt-30 lg:pt-44 md:flex justify-center align-middle"}>
      <Tabs defaultValue="day1" className="w-[580px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="day1">Day 1</TabsTrigger>
          <TabsTrigger value="day2">Day 2</TabsTrigger>
        </TabsList>
        <TabsContent value="day1">
          <Day1 />
        </TabsContent>
        <TabsContent value="day2">
          <Day2 />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
