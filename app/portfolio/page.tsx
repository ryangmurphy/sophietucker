import { Nav } from "@/components/nav"
import { ProjectGrid } from "@/components/project-grid"

const projects = [
  {
    title: "Wire Box",
    description: "Turn hi-fi designs to lo-fi in one click - comes in nasty pink.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  },
  {
    title: "Figchat",
    description: "Chat, rage, or table flip about design with your team in Figma.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  },
  {
    title: "Outline",
    description: "Instantly spec out your designs so developers can have no excuses.",
    icon: "/placeholder.svg",
    preview: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    title: "Custoji",
    description: "Create emojis that-should-not-be to torment your friends with.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  },
  {
    title: "Droplette",
    description: "Create AI enhanced color palettes in Figma based on your color system.",
    icon: "/placeholder.svg",
    preview: "/placeholder.svg",
    link: "#",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Annotator",
    description: "Document A11y concerns to start conversations with developers.",
    icon: "/placeholder.svg",
    preview: "/placeholder.svg",
    link: "#",
    className: "md:col-span-2"
  },
  {
    title: "Cover Status",
    description: "Let folks know what's up with status thumbnails for your work.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  },
  {
    title: "Browso",
    description: "Get all of your computer's details... but the year's 1995.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  },
  {
    title: "JeffTeam",
    description: "World's first, and probably only, Jeff Goldblum teams generator.",
    icon: "/placeholder.svg",
    link: "#",
    className: "md:col-span-1"
  }
]

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-500 via-green-800 to-emerald-800">
      <Nav />
      <main className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative inline-block">
            <h1 className="mb-4 text-7xl font-bold tracking-tight text-emerald-200">
              Play.
            </h1>
            <div className="absolute -right-8 -top-8">
              <Star className="h-8 w-8 text-white" />
            </div>
          </div>
          <p className="mb-16 text-lg text-emerald-200">
            A collection of tools and sites I&apos;ve created, designed to be helpful,
            fun, & sometimes just a little bit weird.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </main>
    </div>
  )
}

function Star(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

