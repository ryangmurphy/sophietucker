
import React from "react";

import { StarsBackground } from "@/components/ui/stars-background";
import SparklesText from "@/components/ui/sparkles-text";


export function Hero() {
  return (
    <div
      id="/"
      className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-x-hidden"
    >
      <div className="absolute inset-0 mb-16">
        <StarsBackground className="absolute min-w-full h-full" />
      </div>

      <div className="relative z-30">
        <div className="absolute -top-16 -left-4 md:-left-8 md:-top-8 rotate-12">
          <Star className="h-20 w-20 drop-shadow-lg" />
        </div>
        <h1 className="mb-4 text-5xl md:text-7xl font-bold tracking-tight text-pink-900">
          Hi, I&apos;m Sophie.
          <br />
          <SparklesText
            text="A Marketing Professional."
            className="text-white text-5xl md:text-7xl"
          />
        </h1>
        <div className="absolute -bottom-14 -right-4 md:-bottom-24 md:-right-16 -rotate-12">
          <Star className="h-20 w-20 drop-shadow-lg" />
        </div>
      </div>
      <p className="mt-14 md:mt-8 max-w-lg text-lg md:text-xl font-semibold text-pink-950 relative z-30">
        I&apos;m passionate about creating marketing strategies that drive
        engagement, turning insights into targeted plans, and delivering
        measurable impact.
      </p>
    </div>
  );
}

function Star(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      fill="#ffffff"
      width="100px"
      height="100px"
      viewBox="0 0 512 512"
      id="icons"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="1.024"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z"></path>
        <path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z"></path>
        <path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z"></path>
      </g>
    </svg>
  );
}
