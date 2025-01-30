import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"

//components
import Nav from "./Nav"
import Link from "next/link";




import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"

const Header = () => {
    return (
      <header className="py-6 bg-uk-background-secondary-light text-black">
        <div className="container mx-auto max-w-5xl px-4 flex items-center">
          <div className="w-1/5">
            <Link href="/">
              <Avatar className="h-16 w-16 border-2 border-white hover:scale-110 transition-transform">
                <AvatarImage src="/avatar.png" alt="Kesheng" />
                <AvatarFallback>KS</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className="w-3/5 flex justify-center">
            <Nav />
          </div>
          <div className="w-1/5 flex justify-end">
  <SignedOut>
    <SignInButton mode="modal">
      <Button 
        className="px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 
          text-uk-label-secondary-light hover:bg-uk-background-primary-light/50 hover:text-uk-label-primary-light"
        variant="ghost"
      >
        Sign In
      </Button>
    </SignInButton>
  </SignedOut>
  <SignedIn>
    <UserButton 
      appearance={{
        elements: {
          userButtonAvatarBox: "w-9 h-9"
        }
      }}
      afterSignOutUrl="/"
    />
  </SignedIn>
</div>
        </div>
      </header>
    );
}
export default Header;