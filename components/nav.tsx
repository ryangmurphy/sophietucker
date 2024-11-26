"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/play", label: "Play" },
  { href: "/notes", label: "Notes" },
  { href: "/contact", label: "Contact" },
]

export function Nav() {
  const [activeItem, setActiveItem] = React.useState("/work")

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 backdrop-blur-md">
        {navItems.map((item, index) => (
          <React.Fragment key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors hover:text-emerald-950",
                activeItem === item.href
                  ? "bg-emerald-50 text-emerald-950"
                  : "text-emerald-800"
              )}
              onClick={() => setActiveItem(item.href)}
            >
              {item.label}
            </Link>
            {index === 0 && (
              <span className="mx-1 text-emerald-800/50">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

