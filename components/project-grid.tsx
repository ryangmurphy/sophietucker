import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface Project {
  title: string
  description: string
  icon: string
  preview?: string
  link: string
  className?: string
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.link}
          className={cn(
            "group relative overflow-hidden rounded-3xl bg-emerald-950/20 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-emerald-950/30",
            project.className
          )}
        >
          <div className="relative h-full">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-emerald-100">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-200/80">
                  {project.description}
                </p>
              </div>
              <div className="h-12 w-12 overflow-hidden rounded-full bg-emerald-950/50">
                <Image
                  src={project.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {project.preview && (
              <div className="absolute bottom-0 left-0 right-0">
                <Image
                  src={project.preview}
                  alt=""
                  width={300}
                  height={150}
                  className="rounded-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

