import Image from "next/image";
import { Timeline } from "@/components/timeline";
import Education from "@/components/Education";

const timelineItems = [
  {
    company: "Nova Scotia Health Authority",
    role: "Scheduling Clerk",
    period: "7 mos",
    width: "w-[240px]",
  },
  {
    company: "MacKenzie Healthcare Technologies",
    role: "Marketing and Digital Content Coordinator",
    period: "1 yr",
    width: "w-[320px]",
  },
  {
    company: "Lindt & Sprüngli",
    role: "Lead Retail Supervisor",
    period: "7+ yr",
    width: "w-[400px]",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-6 py-8">
        <div className="mb-24 gap-12 md:gap-24">
          <div>
            <div className="flex flex-row mx-auto w-full items-center gap-24">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl ml-48">
                <Image
                  src="/soph-headshot-ai.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover rounded-t-full"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="text-left">
                <h2 className="text-5xl font-bold leading-tight tracking-tight text-pink-700">
                  I&apos;m a Marketing Coordinator
                </h2>
                <h2 className="text-5xl font-bold leading-tight tracking-tight text-pink-700">
                  working from 9°C
                </h2>
                <h2 className="text-5xl font-bold leading-tight tracking-tight text-pink-700">
                  Halifax, Nova Scotia, Canada
                </h2>
                <div className="mt-4 text-lg text-pink-500 w-4/5">
                  <p>
                    Over the past 5 years, I&apos;ve gained experience through
                    my education & worked in various areas of marketing such as
                    social media, administration, email, sales, and
                    communications.
                  </p>
                  <p className="mt-4">
                    At the moment, I am a Scheduling Clerk as NSHA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Timeline items={timelineItems} />
        <div className="mt-24 text-center">
          <Education />
        </div>
      </main>
    </div>
  );
}
