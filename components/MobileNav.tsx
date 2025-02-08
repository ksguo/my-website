"use client"

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { LuMenu } from "react-icons/lu"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Message", path: "/message" },
]

const MobileNav = () => {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <LuMenu className="w-6 h-6 text-uk-label-secondary-light" />
        </button>
      </SheetTrigger>
      {/* Slide in from the left */}
      <SheetContent side="left">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <ul className="flex flex-col gap-4 items-center mt-6">
          {navItems.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 ${
                  link.path === pathName
                    ? "bg-uk-background-primary-light text-uk-label-primary-light font-medium"
                    : "text-uk-label-secondary-light hover:bg-uk-background-primary-light/50 hover:text-uk-label-primary-light"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav