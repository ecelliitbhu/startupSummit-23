import Hero from "@/components/Hero";
import Content from "@/components/contents";
import About from "@/components/About";
import Trailblazzers from "@/components/trailblazzers";
import Organizer from "@/components/Organizer";
import Supporter from "@/components/Supporter";
import Carousel from "@/components/swiper";
import KeySpeaker from "@/components/KeySpeakers";
import React from "react";
export default function Home() {
  return (
    <>
      <Hero />
      <Organizer />
      {/*<Supporter />*/}
      <Trailblazzers />
      {/*<KeySpeaker />*/}
        <Carousel />
      <About />
      <Content />
    </>
  );
}
