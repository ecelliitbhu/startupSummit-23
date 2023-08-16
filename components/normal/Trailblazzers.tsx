import React from "react";
import { images } from "../ui/Photos";
import Person from "../ui/Person";
export const Trailblazzers = () => {
  return (
    <div
      id={"Speakers"}
      className="container md:scale-80 mx-auto px-6 md:px-10 image"
    >
      <div className="mb-16 md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl text-center pt-14">
          IIT BHU Trailblazers
        </h2>
      </div>
      {/* <div className="grid gap-6 px-4 sm:py-4 sm:grid-cols-2 lg:grid-cols-3"> */}
      <div className="flex justify-center items-center flex-wrap">
        {images.map((image, index) => (
          <Person
            key={index}
            name={image.name}
            company={image.company}
            imageUrl={image.imageUrl}
            quote={image.quote}
            position={image.position}
          />
        ))}
      </div>
    </div>
  );
};
