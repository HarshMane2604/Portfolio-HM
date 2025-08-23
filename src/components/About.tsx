"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";



export default function About() {
  return (
    <>
    <BackgroundBeamsWithCollision>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-16">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl font-extrabold lg:font-bold text-slate-800 dark:text-slate-200 mb-12"
        >
          Code. Create. Conquer
        </motion.h1>

        {/* Grid Section */}
        <div className="grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 items-center gap-10">
          {/* Profile Image */}
          <div className="flex justify-center">
            <motion.img
              src="https://thumbs.dreamstime.com/b/serious-indian-professional-business-man-office-portrait-serious-young-ambitious-indian-businessman-project-leader-dressed-367980912.jpg"
              alt="my pic"
              className="w-3/4 h-[450px] rounded-2xl shadow-lg object-cover hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            >
              Harsh Mane
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              I am a passionate software engineer who loves building scalable,
              efficient, and modern digital experiences. With a mix of logic and
              creativity, I turn ideas into code that actually *works*.
            </motion.p>
          </div>
        </div>
      </div>
          
    </BackgroundBeamsWithCollision>
    
    </>
    
  );
}
