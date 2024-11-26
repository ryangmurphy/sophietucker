import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website Relaunch",
      client: "FashionForward",
      description: "Led a complete digital marketing strategy for the relaunch of FashionForward's e-commerce website. Implemented SEO best practices, created engaging social media content, and managed PPC campaigns.",
      results: "Increased online sales by 75% within the first quarter post-launch."
    },
    {
      title: "B2B Lead Generation Campaign",
      client: "TechSolutions Inc.",
      description: "Developed and executed a comprehensive B2B lead generation campaign using content marketing, LinkedIn advertising, and email nurturing sequences.",
      results: "Generated 150+ qualified leads and secured 10 high-value client contracts."
    },
    {
      title: "Brand Awareness Campaign",
      client: "GreenEats",
      description: "Created and managed a multi-channel brand awareness campaign for a new eco-friendly food delivery service. Utilized influencer partnerships, content marketing, and targeted social media advertising.",
      results: "Achieved 1M+ impressions and 100K+ app downloads within the first month of launch."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.client}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <p className="font-semibold">Results: {project.results}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

