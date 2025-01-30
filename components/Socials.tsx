import { GitHubBrandIcon } from "@/public/assets/icons/GitHubBrandIcon"
import { MailIcon } from "@/public/assets/icons/MailIcon"

import Link from "next/link"

const socialLinks = [
  {
    icon: GitHubBrandIcon,
    href: "https://github.com/yourusername",
    label: "GitHub",
    bg: "bg-uk-background-primary-dark",
  },
  {
    icon: MailIcon,
    href: "mailto:kesheng.guo510@gmail.com",
    label: "Email",
    bg: "bg-uk-red-light",
  }
]

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((social) => (
        <div key={social.label} className="group relative">
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <div className={`p-2 w-8 h-8 flex items-center justify-center rounded-full text-white ${social.bg} transition-colors`}>
              <social.icon />
            </div>
          </Link>
          <span className="absolute hidden group-hover:inline-block -bottom-7 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            {social.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Socials