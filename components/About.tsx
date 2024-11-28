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




export default function About({ temperature }: { temperature: number | null }) {
  return (
    <div id="about" className="min-h-screen">
      <main className="container mx-auto px-6 pb-8">
        <div className="mb-24 gap-12 md:gap-24">
          <div>
            <div className="flex flex-col md:flex-row mx-auto w-full items-center gap-12 md:gap-24">
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl mb-6 md:mb-0">
                <Image
                  src="/soph-headshot-ai.jpg"
                  alt="Profile photo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-full"
                  priority
                />
              </div>

              {/* Text Content */}
              <div className="text-left w-full">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight md:leading-normal md:tracking-normal text-pink-950">
                  I&apos;m a Marketing Coordinator
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight md:leading-none md:tracking-normal text-pink-600">
                  working from <span className="">{temperature}°C</span>
                </h2>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight md:leading-normal md:tracking-normal text-pink-950">
                  Dartmouth, Nova Scotia.
                </h2>
                <div className="mt-4 text-lg md:text-lg font-medium text-pink-900/90 w-full md:w-4/5">
                  <p>
                    As a recent graduate, I have gained hands-on experience in
                    marketing, working across areas such as social media,
                    content creation, communications, sales, and project
                    management. In addition to my marketing role, my current
                    role in administration has strengthened my organizational
                    and communication skills.
                  </p>
                  <p className="mt-4">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Vel
                    quam pretium senectus pulvinar commodo conubia hac at.
                    Inceptos auctor risus curae ultricies scelerisque conubia
                    class. Porttitor lorem nullam habitant elementum facilisi
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


