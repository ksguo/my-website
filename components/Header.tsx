"use client"

import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { LuCircleUserRound } from "react-icons/lu";
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-uk-background-primary-light ">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex ">

        {/* Left Section (Avatar / MobileNav) */}
        <div className="flex items-center space-x-4">
          {/* Avatar hidden on small screens */}
          <div className="hidden sm:block">
            <Link href="/">
              <Avatar className="h-12 w-12 hover:scale-110 transition-transform">
                <AvatarImage src="/avatar.png" width={32}
                  height={32} alt="Kesheng" className="w-full h-full object-cover" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          {/* Mobile Nav visible on small screens only */}
          <div className="block sm:hidden">
            <MobileNav />
          </div>
        </div>

        {/* Center Section (Nav) - hidden on small screens */}
        <div className="flex-1 hidden sm:block">
          <Nav />
        </div>

        {/* Right Section (Sign In / User Button) */}
        <div className="sm:flex items-center space-x-4 sm:relative absolute right-4 ">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <LuCircleUserRound className="w-6 h-6 text-uk-gray5-dark hover:text-uk-gray5-dark" />
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  )
}