"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import {  Wrench } from "lucide-react"; // added wrench for "in progress"


function Project() {
  return (
    <>
      <BackgroundBeamsWithCollision className="flex  text-center items-center flex-col ">
        <div className="">
          <p className="text-center text-3xl md:text-6xl font-extrabold lg:font-bold py-8 z-50">
            Crafted{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500  bg-clip-text text-transparent">
              Projects
            </span>{" "}
            that showcase my journey.
          </p>
        </div>

        {/* Cool professional highlights
        <div className="flex items-center gap-3 mt-4">
          <Rocket className="w-8 h-8 text-purple-500" />
          <span className="text-lg md:text-xl font-medium text-gray-300">
            Turning Ideas into Reality
          </span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <Briefcase className="w-8 h-8 text-pink-500" />
          <span className="text-lg md:text-xl font-medium text-gray-300">
            Building with Purpose
          </span>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <Code2 className="w-8 h-8 text-blue-500" />
          <span className="text-lg md:text-xl font-medium text-gray-300">
            Code that Speaks Quality
          </span>
        </div> */}

        {/* In-progress section */}
        <div className="flex items-center gap-3 mt-10 animate-pulse">
          <Wrench className="w-7 h-7 text-yellow-500" />
          <span className="text-md md:text-lg font-medium text-gray-400">
            This section is still in progress — stay tuned 🚧
          </span>
        </div>
      </BackgroundBeamsWithCollision>
    </> 
  );
}

export default Project;
