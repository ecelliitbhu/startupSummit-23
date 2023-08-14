import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export default function MainCarousel() {
  return (
    <Carousel
      mx="auto"
      withIndicators
      height={200}
      className="p-2"
      nextControlIcon={<IconArrowRight size={20} />}
      previousControlIcon={<IconArrowLeft size={20} />}
    >
      <Carousel.Slide className="flex justify-center">
        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="></img>
      </Carousel.Slide>
      <Carousel.Slide className="flex justify-center">
        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="></img>
      </Carousel.Slide>
      <Carousel.Slide className="flex justify-center">
        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="></img>
      </Carousel.Slide>
    </Carousel>
  );
}
