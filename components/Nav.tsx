"use client"

import Link from "next/link"
import { usePathname } from "next/navigation";


const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Message", path: "/message" },
]


const Nav = () => {
    const pathName = usePathname()
    
    return (
        <nav className="hidden sm:flex justify-center h-12">
            <ul className="items-center justify-center flex bg-uk-background-secondary-light/50 rounded-full px-4 py-1.5">
                {navItems.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.path}
                            className={`px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 ${
                                link.path === pathName 
                                    ? 'bg-uk-background-primary-light text-uk-label-primary-light font-medium' 
                                    : 'text-uk-label-secondary-light hover:bg-uk-background-primary-light/50 hover:text-uk-label-primary-light'
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav