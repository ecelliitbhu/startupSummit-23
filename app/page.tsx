import Hero from "@/components/Hero";
import Content from "@/components/Content";
import About from "@/components/About";
import Carousel from "@/components/car";
import Hightlight from "@/components/highlight";
import Topics from "@/components/Topics";
import Trailblazzers from "@/components/trailblazzers";
import Organizer from "@/components/Organizer";
export default function Home() {
  return (
    <>
      <Hero />
      {/*<Hightlight />*/}
      <Organizer />
      {/*<Topics />*/}
      <Trailblazzers />
      <About />
      <Content />
      {/*<Carousel/>*/}
    </>
  );
}
