import Image from "next/image"
import { Nav } from "@/components/nav"
import { Timeline } from "@/components/timeline"
import Education  from "@/components/Education"

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100  to-teal-100">
      <Nav />
      <main className="container mx-auto px-6 py-24">
        <div className="mb-24 gap-12 md:gap-24">
          <div>
            <h1 className="my-16 text-8xl font-bold text-center tracking-tight text-pink-700">
              I&apos;m Sophie.
            </h1>
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
                <div className="mt-4 text-lg text-pink-500 w-3/5">
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
          <h2 className="text-4xl font-bold tracking-tight text-pink-200">
            Let&apos;s collaborate if you&apos;re committed to
          </h2>
        </div>
      </main>
    </div>
  );
}


