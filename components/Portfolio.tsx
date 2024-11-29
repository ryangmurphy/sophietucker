import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const portfolioProjects = [
  {
    id: "project1",
    title: "project1",
    description:
      "Led a comprehensive brand redesign for a tech startup, resulting in a 40% increase in brand recognition.",
    image: "/ah-igpost.png",
    tags: ["Branding", "Design", "Marketing"],
  },
  {
    id: "project2",
    title: "project2",
    description:
      "Developed and implemented a social media strategy that grew the client's following by 200% in 6 months.",
    image: "/ah-igpost.png",
    tags: ["Social Media", "Growth", "Strategy"],
  },
  {
    id: "project3",
    title: "Paraglide Infographic",
    description:
      "Optimized an e-commerce website, improving conversion rates by 25% and increasing average order value by 15%.",
    image: "/ah-igpost.png",
    tags: ["E-commerce", "Optimization", "UX"],
  },
];

export default function PortfolioPage() {
  return (
    <div id="work" className="w-full max-w-6xl mx-auto p-4 py-16">
      <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl">
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
                  height={200}
                  className="w-full h-48 object-cover"
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
                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
