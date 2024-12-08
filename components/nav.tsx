"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export const Nav = React.memo(() => {
  const [activeItem, setActiveItem] = React.useState("/")

  const handleClick = React.useCallback((href: string) => {
    setActiveItem(href);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center p-6">
      <div className="flex items-center gap-1 rounded-full bg-white/40 border border-white/60 px-2 py-1 backdrop-blur-lg">
        {navItems.map((item, index) => (
          <React.Fragment key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors hover:text-pink-950",
                activeItem === item.href
                  ? "bg-pink-50 text-pink-950"
                  : "text-pink-700"
              )}
              onClick={() => handleClick(item.href)}
            >
              {item.label}
            </Link>
            {index === 0 && (
              <span className="mx-1 text-pink-800/50">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
});

Nav.displayName = 'Nav';