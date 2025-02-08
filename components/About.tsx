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


import Map from "./Map";



const TechStackIcon = [
    { icon: CssIcon, label: "CSS" },
    { icon: GitIcon, label: "Git" },
    { icon: HtmlIcon, label: "HTML" },
    { icon: GitlabIcon, label: "Gitlab" },
    { icon: IdeaIcon, label: "IntelliJ IDEA" },
    { icon: JavaIcon, label: "Java" },
    { icon: JavascriptIcon, label: "JavaScript" },
    { icon: NextJSIcon, label: "Next.js" },
    { icon: PythonIcon, label: "Python" },
    { icon: ReactIcon, label: "React" },
    { icon: TailwindCSSIcon, label: "Tailwind CSS" },
    { icon: TypescriptIcon, label: "TypeScript" },
    { icon: GitHub_Dark, label: "GitHub" },
    

]



const About = () => {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-16 grid grid-cols-3 gap-6">
            {/* Left Side - Large Card */}
            <div className="col-span-2 bg-white shadow-lg rounded-2xl p-6 h-full flex flex-col justify-center">
                <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-primary">🚀 My Blog</h2>
                <p className="mt-4 text-[clamp(0.9rem,2vw,1.1rem)] text-gray-700">
                    Blog
                </p>
            </div>

            {/* Right Side - 3 Small Cards */}
            <div className="flex flex-col gap-6">
                {/* About Me */}
                <div className="bg-white shadow-lg rounded-2xl p-6">
                    <h2 className="text-[clamp(1.2rem,4vw,2rem)] font-primary">💡 About Me</h2>
                    <ul className="flex flex-col gap-5 pl-6 text-[clamp(0.8rem,2vw,1rem)] list-disc">
                        <li>👋 You can call me <span className="font-primary">Kesheng</span></li>
                        <li>🌎 Location: <a className="text-uk-blue-light hover:underline" href="https://en.wikipedia.org/wiki/Cologne" target="_blank">Cologne, DE</a></li>
                        <li>✈️ Lived in Hannover, Shanghai, Danyang</li>
                    </ul>
                </div>

                {/* Tech Stack */}
                <div className="bg-uk-background-primary-light shadow-lg rounded-2xl p-6">
                    <h2 className="text-xl font-primary">🛠️ Tech Stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {TechStackIcon.map((icon) => (
                            <div key={icon.label} className="flex flex-col items-center gap-1">
                                <icon.icon className="w-6 h-6" />
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



