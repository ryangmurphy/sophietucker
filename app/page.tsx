import { Hero } from "@/components/Hero"
import { Nav } from "@/components/nav"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100  to-teal-100">
      <Nav />
      <main className="container mx-auto px-6">
        <Hero />
        <div className="grid gap-6 pb-24 md:grid-cols-2">
          <ProjectCard
            category="HELP SCOUT"
            title="AI"
            image="/placeholder.svg?height=400&width=800"
            variant="purple"
          />
          <ProjectCard
            category="HELP SCOUT"
            title="Articles"
            image="/placeholder.svg?height=400&width=800"
          />
        </div>
      </main>
    </div>
  )
}

