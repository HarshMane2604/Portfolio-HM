"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { ExpandableCardDemo } from "./Cards";

function Project() {
  return (
    <>
    <BackgroundBeamsWithCollision className="flex justify-center text-center items-center flex-col ">
      <div className="">
        
        <p className="text-center text-3xl md:text-6xl font-extrabold lg:font-bold py-8 z-50">
          Crafted{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text text-transparent">
            Projects
          </span>{" "}
          that showcase my journey.
        </p>
      </div>
      
      <p>Let's build something together</p>
      {/* <ExpandableCardDemo  /> */}
      
    </BackgroundBeamsWithCollision>
    
    </>
  );
}

export default Project;
