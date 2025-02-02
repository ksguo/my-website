import { GitHub_Dark } from "@/public/assets/icons/GitHub_Dark"
import { MailIcon } from "@/public/assets/icons/MailIcon"
import { LinkedInIcon } from "@/public/assets/icons/LinkedInIcon"
import Link from "next/link"

const socialLinks = [
  {
    icon: GitHub_Dark,
    href: "https://github.com/ksguo",
    label: "GitHub",
  },
  {
    icon: MailIcon,
    href: "mailto:kesheng.guo510@gmail.com",
    label: "Email",
  },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/kesheng-guo/",
    label: "LinkedIn",
  },
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
            className="block w-[30px] h-[30px] hover:scale-110 transition-transform"
          >
            <social.icon className="w-full h-full scale-75" />
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