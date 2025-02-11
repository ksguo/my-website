"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Project", path: "/project" },
  { name: "Message", path: "/message" },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="hidden sm:block mx-auto p-[clamp(0.25rem,1vw,0.5rem)] rounded-full shadow-md bg-uk-background-primary-light max-w-[min(90vw,28rem)]">
      <ul className="flex items-center justify-around space-x-[clamp(0.25rem,2vw,1rem)]">
        {navItems.map((item) => (
          <li key={item.path} className="relative text-center font-primary">
            <Link href={item.path}>
              <span
                className={`relative z-10 px-[clamp(0.5rem,2vw,1rem)] text-[clamp(0.8rem,2vw,1rem)] cursor-pointer transition-all ${
                  pathname === item.path
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav