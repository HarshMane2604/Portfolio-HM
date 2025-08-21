"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((_, idx) => {
        const meteorCount = number || 20;
        // Distribute meteors evenly across width
        const position = idx * (800 / meteorCount) - 400;

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              // base styles
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full",
              // light mode
              "bg-gray-400 shadow-[0_0_0_1px_#00000010] before:bg-gradient-to-r before:from-gray-400 before:to-transparent",
              // dark mode
              "dark:bg-slate-300 dark:shadow-[0_0_0_1px_#ffffff10] dark:before:from-slate-300",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:content-['']",
              className
            )}
            style={{
              top: "-40px", // start above
              left: position + "px",
              animationDelay: Math.random() * 5 + "s",
              animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
