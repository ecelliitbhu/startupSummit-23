import Hero from "@/components/Hero";
import Content from "@/components/contents";
import About from "@/components/About";
import Trailblazzers from "@/components/trailblazzers";
import Organizer from "@/components/Organizer";
import Supporter from "@/components/Supporter";
export default function Home() {
  return (
    <>
      <Hero />

      <Organizer />
      <Supporter />
      <Trailblazzers />
      <About />
      <Content />
    </>
  );
}
