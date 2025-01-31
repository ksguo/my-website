"use client"
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci"
import { usePathname } from "next/navigation"
import Link from "next/link"

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Message", path: "/message" },
]

const MobileNav = () => {
    const pathName = usePathname()
    
    return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="w-6 h-6 text-uk-label-secondary-light" />
        </SheetTrigger>
        <SheetContent>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <ul className="flex flex-col gap-4 items-center">
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