import React from "react";
import { MeteorsDemo } from "./MeteorCard";

function Experience() {
  return (
    <div className="flex justify-center items-center flex-col pb-24 ">
      <div className="flex justify-center items-center flex-col text-center">
        <p className="text-center text-3xl md:text-6xl font-extrabold lg:font-bold py-10 ">
          Turning{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experiences
          </span>{" "}
          into growth.
        </p>
      </div>
      <MeteorsDemo />
    </div>
  );
}

export default Experience;
