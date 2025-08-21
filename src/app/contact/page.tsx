import React from "react";
import { Contact } from "@/components/Contact";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function page() {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div className="flex justify-center items-center flex-col text-center text-black dark:text-white pb-24 lg:pb-10 z-40">
          <p className="text-center text-3xl md:text-6xl font-extrabold lg:font-bold py-10">
            Building{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              conversations
            </span>{" "}
            that matter.
          </p>

          <Contact />
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default page;
