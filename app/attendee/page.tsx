import React from "react";
import { EventEmbed } from "@/components/payment";
const Page = () => {
  return (
    <div className={"pt-32  w-[100vw-2rem] my-2  flex justify-center items-center min-h-screen"}>
      <EventEmbed />
    </div>
  );
};

export default Page;
