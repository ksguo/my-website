'use client'

import { CssIcon } from "@/public/assets/icons/CssIcon";
import { GitIcon } from "@/public/assets/icons/GitIcon";
import { HtmlIcon } from "@/public/assets/icons/HtmlIcon";
import { GitlabIcon } from "@/public/assets/icons/GitlabIcon";
import { IdeaIcon } from "@/public/assets/icons/IdeaIcon";
import { JavaIcon } from "@/public/assets/icons/JavaIcon";
import { JavascriptIcon } from "@/public/assets/icons/JavscriptIcon";
import { NextJSIcon } from "@/public/assets/icons/NextJSIcon";
import { PythonIcon } from "@/public/assets/icons/PythonIcon";
import { ReactIcon } from "@/public/assets/icons/ReactIcon";
import { TailwindCSSIcon } from "@/public/assets/icons/TailwindCSSIcon";
import { TypescriptIcon } from "@/public/assets/icons/TypescriptIcon";
import { GitHub_Dark } from "@/public/assets/icons/platform/GitHub_Dark";
import { FastAPIIcon } from "@/public/assets/icons/FastAPIIcon";


import Map from "./Map";

import Link from "next/link";



const TechStackIcon = [
    { icon: JavaIcon, label: "Java" },
    { icon: PythonIcon, label: "Python" },
    { icon: TypescriptIcon, label: "TypeScript" },
    { icon: JavascriptIcon, label: "JavaScript" },
    { icon: HtmlIcon, label: "HTML" },
    { icon: CssIcon, label: "CSS" },
    { icon: NextJSIcon, label: "Next.js" },
    { icon: ReactIcon, label: "React" },
    { icon: TailwindCSSIcon, label: "Tailwind CSS" },
    { icon: FastAPIIcon, label: "FastAPI" },
    { icon: GitIcon, label: "Git" },
    { icon: GitlabIcon, label: "Gitlab" },
    { icon: IdeaIcon, label: "IntelliJ IDEA" },
    { icon: GitHub_Dark, label: "GitHub" },


]

const sampleBlogs = [
    {
        id: 1,
        title: "Exploring Next.js: A Beginner's Guide",
        excerpt: "Learn the basics of Next.js, from setup to deployment.",
        slug: "exploring-nextjs",
        publishedAt: "2025-02-01",
        coverImage: "/blog/nextjs-guide.jpg",
    },
    {
        id: 2,
        title: "Understanding React Server Components",
        excerpt: "A deep dive into how React Server Components improve performance.",
        slug: "react-server-components",
        publishedAt: "2025-01-28",
        coverImage: "/blog/react-server-components.jpg",
    },
];



const About = () => {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-16 grid grid-cols-3 gap-6">
            {/* Left Side - Split into two sections */}
            <div className="col-span-2 grid grid-rows-2 gap-6">
                {/* Top - Latest Blog (Takes More Space) */}
                <Link href={`/blog/${sampleBlogs[0].slug}`} className="block">
                    <div className="bg-uk-background-primary-light shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 h-full flex flex-col">
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold">{sampleBlogs[0].title}</h3>
                            <p className="text-gray-500 text-base mt-2">{sampleBlogs[0].excerpt}</p>
                            <span className="text-sm text-gray-400 mt-auto">{sampleBlogs[0].publishedAt}</span>
                        </div>
                    </div>
                </Link>

                {/* Bottom - Second Latest Blog */}
                <Link href={`/blog/${sampleBlogs[1].slug}`} className="block">
                    <div className="bg-uk-background-primary-light shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 h-full flex flex-col">
                        
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-lg font-bold">{sampleBlogs[1].title}</h3>
                            <p className="text-gray-500 text-sm mt-2">{sampleBlogs[1].excerpt}</p>
                            <span className="text-sm text-gray-400 mt-auto">{sampleBlogs[1].publishedAt}</span>
                        </div>
                    </div>
                </Link>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-8">
                {/* About Me */}
                <div className="bg-uk-background-primary-light shadow-lg rounded-2xl p-6">
                    <h2 className="text-[clamp(0.8rem,4vw,1.6rem)] font-primary">💡 About Me</h2>
                    <ul className="flex flex-col gap-5 pl-6 text-[clamp(0.8rem,2vw,1rem)] list-disc">
                        <li>👋 You can call me <span className="font-primary">Kesheng</span></li>
                        <li>🌎 Location: <a className="text-uk-blue-light hover:underline" href="https://en.wikipedia.org/wiki/Cologne" target="_blank">Cologne, DE</a></li>
                        <li>✈️ Lived in Hannover, Shanghai, Danyang in the past</li>
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="bg-uk-background-primary-light shadow-lg rounded-2xl p-6">
                    <h2 className="text-[clamp(0.8rem,4vw,1.6rem)] font-primary">🛠️ Tech Stack</h2>
                    <div className="flex flex-wrap gap-5 pt-2">
                        {TechStackIcon.map((icon) => (
                            <div key={icon.label} className="flex flex-col items-center gap-1">
                                <icon.icon className="w-8 h-8" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map Card */}
                <Map />
            </div>
        </div>
    );
};


export default About;



