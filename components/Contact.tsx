"use client";

import { JSX, SVGProps } from "react";
import { MailIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import MapComponent from "@/components/MapComponent";

export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full max-w-5xl mx-auto py-24 px-4 lg:px-8 scroll-smooth"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-pink-950 mb-6">
            Say Hello 👋
          </h2>
          <p className="text-foreground/80 font-semibold"></p>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <MailIcon className="h-6 w-6 text-foreground/80 " />
              <a
                href="mailto:sophieqtucker@gmail.com"
                className="text-foreground/80 text-sm font-semibold hover:underline hover:underline-offset-2"
              >
                sophieqtucker@gmail.com
              </a>
            </div>
            <div className="flex space-x-2">
              <FaLinkedin className="h-6 w-6 text-foreground/80 " />
              <a
                href="https://www.linkedin.com/in/sophie-tucker/"
                className="text-foreground/80 text-sm font-semibold hover:underline hover:underline-offset-2"
              >
                /Sophie-Tucker
              </a>
            </div>
            <div className="flex space-x-2">
              <MapPinIcon className="h-6 w-6 text-foreground/80 " />
              <span className="text-foreground/80 text-sm font-semibold">
                Dartmouth, Nova Scotia
              </span>
            </div>
            <div className="lg:col-span-2 pt-6"></div>
          </div>
        </div>
        <MapComponent />  
      </div>
    </div>
  );
}

function MapPinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
