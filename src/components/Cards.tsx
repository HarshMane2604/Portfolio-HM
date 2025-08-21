"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4  z-30">
        {cards.map((card, index) => ( 
          <div className=" bg-gray-100 dark:bg-gray-800 rounded-xl ">
            <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center  hover:bg-neutral-200 hover:transition-all duration-300 dark:hover:bg-neutral-800  cursor-pointer rounded-xl"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-md font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0 transition-all duration-300"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
          </div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Web App",
    title: "Concrete Mix Design App",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop", // replace with your screenshot
    ctaText: "View Project",
    ctaLink: "https://concrete-mix.vercel.app",
    content: () => {
      return (
        <p>
          A full-stack web app to calculate accurate proportions of cement, sand, 
          and aggregate for construction projects. <br /> <br /> Built with 
          <b> Node.js, Express, MongoDB, and React</b>, it ensures precision, scalability, 
          and efficiency in civil engineering tasks. Perfect balance of logic 
          and usability for real-world projects.
        </p>
      );
    },
  },
  {
    description: "CLI Tool",
    title: "Personal Finance CLI",
    src: "https://images.unsplash.com/photo-1565372918675-4b11d88ac1d6?q=80&w=1000&auto=format&fit=crop", // replace with your screenshot
    ctaText: "Check Code",
    ctaLink: "https://github.com/yourusername/finance-cli",
    content: () => {
      return (
        <p>
          A lightweight command-line app to manage <b>income, expenses, 
          and savings</b>. <br /> <br /> Features include <b>budget tracking, insights, 
          and quick calculations</b>, all inside your terminal. Built in Python 
          for speed and simplicity — perfect for devs who live in the CLI.
        </p>
      );
    },
  },
  {
    description: "Portfolio",
    title: "Portfolio Website",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop", // replace with your screenshot
    ctaText: "Visit Site",
    ctaLink: "https://yourportfolio.vercel.app",
    content: () => {
      return (
        <p>
          My personal <b>Next.js + Tailwind + shadcn/ui</b> powered portfolio. <br /> <br /> 
          A sleek digital space showcasing <b>skills, projects, and achievements</b>. 
          Animated with Framer Motion for smooth transitions and optimized 
          for performance on both desktop and mobile.
        </p>
      );
    },
  },
  {
    description: "AI Tool",
    title: "SQL Q&A Assistant",
    src: "https://images.unsplash.com/photo-1661961112951-f0df2a05c2e7?q=80&w=1000&auto=format&fit=crop", // replace with your screenshot
    ctaText: "View Code",
    ctaLink: "https://github.com/yourusername/sql-qa-assistant",
    content: () => {
      return (
        <p>
          An intelligent <b>AI-powered Q&A system</b> that connects to your SQL 
          database and answers queries in plain English. <br /> <br /> 
          Built with <b>LangChain + Next.js + PostgreSQL</b>, making data 
          exploration seamless for both techies and non-techies.
        </p>
      );
    },
  },
  {
    description: "Task Manager",
    title: "To-Do App with Auth",
    src: "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?q=80&w=1000&auto=format&fit=crop", // replace with your screenshot
    ctaText: "Live Demo",
    ctaLink: "https://todoappdemo.vercel.app",
    content: () => {
      return (
        <p>
          A feature-rich <b>task management app</b> with <b>JWT authentication</b>, 
          role-based access, and CRUD operations. <br /> <br /> Built using 
          <b> React, FastAPI, and MongoDB</b>, it’s the perfect blend of 
          productivity and security for personal and team use.
        </p>
      );
    },
  },
];

