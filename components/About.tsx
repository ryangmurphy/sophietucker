import Image from "next/image";
import { Timeline } from "@/components/timeline";
import Education from "@/components/Education";

// Utility function to calculate the duration in months
function calculateDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  if (years > 0) {
    return months > 0 ? `${years} yr ${months} mos` : `${years} yr`;
  }
  return `${months} mos`;
}

const timelineItems = [
  {
    company: "Nova Scotia Health Authority",
    role: "Scheduling Clerk",
    startDate: "2024-05-01",
    endDate: null, // null indicates it's a current role
    width: "w-[240px]",
  },
  {
    company: "MacKenzie Healthcare Technologies",
    role: "Marketing and Digital Content Coordinator",
    startDate: "2023-08-01",
    endDate: "2024-08-01",
    width: "w-[320px]",
  },
  {
    company: "Lindt & Sprüngli",
    role: "Lead Retail Supervisor",
    startDate: "2016-08-01",
    endDate: "2023-08-01",
    width: "w-[400px]",
  },
].map((item) => ({
  ...item,
  period: calculateDuration(item.startDate, item.endDate),
}));

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
                    various aspects of marketing, including social media
                    management, content creation, communications, sales, and
                    project management. These experiences have equipped me with
                    a versatile skill set and a keen ability to adapt to the
                    dynamic nature of marketing.
                  </p>
                  <p className="mt-4">
                    Additionally, my current administrative role has enhanced my
                    organizational and communication skills, allowing me to
                    effectively manage tasks, collaborate with diverse teams,
                    and maintain a detail-oriented approach.
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
