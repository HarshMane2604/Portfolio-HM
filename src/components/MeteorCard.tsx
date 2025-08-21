"use client";
import React from "react";
import { Meteors } from "./ui/meteors";
import { experiences } from "@/db/experience";

export function MeteorsDemo() {
  return (
    <div className="">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="relative w-full max-w-xl mb-6 pt-5 px-5"
        >
          <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
          
          <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-8 shadow-xl">
            {/* Small top circle */}
            <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 dark:border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-600 dark:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            {/* Company */}
            <h1 className="relative text-xl font-bold text-gray-900 dark:text-white">
              {exp.company}
            </h1>

            {/* Role */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {exp.role}
            </p>

            {/* Description */}
            <p className="relative mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
              {exp.description}
            </p>

            {/* Link */}
            <a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gray-400 dark:border-gray-500 px-4 py-1 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Explore
            </a>

            {/* Meteor animation */}
            <Meteors number={20} />
          </div>
        </div>
      ))}
    </div>
  );
}
