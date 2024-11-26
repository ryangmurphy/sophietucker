import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/soph-ai-headshot.png"
            alt="Jane Doe"
            height={"250"}
            width={"250"}
            className="w-64 h-64 rounded-full object-cover"
          />
          <div>
            <p className="text-lg mb-4">
              Hi, I&apos;m Jane Doe, a passionate Digital Marketing Coordinator
              with a knack for creating engaging content and driving measurable
              results. With a blend of creativity and data-driven strategies, I
              help brands tell their stories and connect with their audiences in
              meaningful ways.
            </p>
            <p className="text-lg">
              My journey in digital marketing started with a curiosity about how
              online platforms can shape brand narratives. Today, I leverage my
              skills in content creation, SEO, social media management, and
              analytics to craft comprehensive marketing strategies that
              resonate and convert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

