"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const meteorCount = number || 10;
    const styles = new Array(meteorCount).fill(true).map((_, idx) => {
      const position = idx * (800 / meteorCount) - 400;
      return {
        left: position + "px",
        top: "-40px",
        animationDelay: Math.random() * 5 + "s",
        animationDuration: Math.floor(Math.random() * 5 + 5) + "s",
      };
    });
    setMeteorStyles(styles);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteorStyles.map((style, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-full",
            "bg-gray-400 shadow-[0_0_0_1px_#00000010] before:bg-gradient-to-r before:from-gray-400 before:to-transparent",
            "dark:bg-neutral-700 dark:shadow-[0_0_0_1px_#ffffff10] dark:before:from-neutral-700",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-1/2 before:content-['']",
            className
          )}
          style={style}
        />
      ))}
    </motion.div>
  );
};
