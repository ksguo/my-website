

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


import { client } from "@/lib/client"
import { type SanityDocument } from "next-sanity"
import Link from "next/link";
import Image from "next/image";






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
const POSTS_QUERY = `*[
    _type == "post" 
    && defined(slug.current)
  ] | order(publishedAt desc)[0...12]{
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    description,
    "imageUrl": image.asset->url
  }`

const options = { next: { revalidate: 30 } }





export default async function About() {
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
    return (
        <div className="container mx-auto max-w-7xl px-4 py-16 grid grid-cols-3 gap-6">
        {/* blog list */}
        <div className="col-span-2 grid grid-rows-2 gap-6 h-full">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className=" bg-uk-background-primary-light shadow-lg rounded-2xl 
                         overflow-hidden hover:scale-[1.02] transition-transform duration-200
                         flex flex-col h-full"
            >
              {post.imageUrl && (
                <div className="relative w-full min-h-80">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {post.description || "No description available."}
                </p>
                <span className="text-sm text-gray-400 mt-auto">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
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






