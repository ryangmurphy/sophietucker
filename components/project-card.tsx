import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  category: string
  image: string
  variant?: "purple" | "mint"
}

export function ProjectCard({
  title,
  category,
  image,
  variant = "mint",
  className,
  ...props
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1",
        variant === "purple" ? "bg-purple-200" : "bg-emerald-200",
        className
      )}
      {...props}
    >
      <div className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-950/50">
        {category}
      </div>
      <h3 className="text-3xl font-bold text-emerald-950">{title}</h3>
      <div className="mt-8">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  )
}

