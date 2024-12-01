import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
//import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    id: "project1",
    title: "Paraglide",
    description:
      "Successfully managed and optimized social media campaigns for Paraglide, leveraging data-driven insights to enhance content strategy, boost brand awareness, and drive audience engagement across multiple platforms",
    image: "/paraglide.jpg",
    tags: ["Marketing", "Social Media", "Analytics", "Branding", "Design"],
  },
  {
    id: "project2",
    title: "MacKenzie Healthcare Technologies",
    description:
      "I developed and executed content strategies for promotional materials and social media, creating branded images and videos, managing content calendars, and analyzing social media performance to support sales goals and enhance the company's online presence.",
    image: "/mht.jpg",
    tags: [
      "Marketing",
      "Content Creation",
      "Social Media",
      "Branding",
      "Analytics",
    ],
  },
  {
    id: "project3",
    title: "AnimeHalifax",
    description:
      "Assisted with the creation and management of social media posts for AnimeHalifax, enhancing brand visibility and engagement through visually compelling designs and community-focused campaigns. Collaborated closely with the team to craft content that resonated with the target audience, contributing to increased interaction, community growth, and overall brand recognition.",
    image: "/ah-igpost.png",
    tags: [
      "Social Media",
      "Content Creation",
      "Community Engagement",
      "Meta Ads",
      "Google Ads",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div id="work" className="w-full max-w-6xl mx-auto p-4 py-16">
      <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl md:w-[1200px]">
        <CardHeader>
          <CardTitle className="text-pink-800 text-center text-3xl">
            Portfolio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="bg-white shadow-md rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-fit object-cover rounded-xl"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-pink-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-pink-100 text-pink-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/*
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    View Project
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
