"use client"

import { TypeAnimation } from 'react-type-animation';
import Socials from './Socials';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="container mx-auto max-w-5xl px-4 min-h-[calc(100vh-88px)] flex items-center">
      <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-8 w-full">
        {/* Left Section - Text & Social */}
        <div className="flex flex-col space-y-4 xl:space-y-8 xl:w-1/2 sm:max-w-[80vw] xl:max-w-none">
          {/* Text Content */}
          <div className="flex flex-col space-y-2 xl:space-y-4 text-[clamp(1.2rem,4vw,2em)] font-primary">
            <span>Hi, I`m Kesheng &#x1F44B;</span>
            <div className="flex flex-wrap">
              <span>A Fullstack&nbsp;</span>
              <TypeAnimation
                sequence={[
                  '<Developer/>',
                  5000,
                  '',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <span className="text-[clamp(0.2rem,2vw,0.5em)]">An independent developer coding with love.</span>
          </div>
          <Socials />
        </div>

        {/* Right Section - Photo */}
        <div className="xl:w-1/2 flex justify-center xl:justify-end items-center xl:pr-8">
          <Link href="/">
            <div className="w-[min(60vw,240px)] h-[min(60vw,240px)] xl:w-80 xl:h-80 overflow-hidden rounded-full border-4 border-white shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
              <Image
                src="/avatar.png"
                alt="Kesheng"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;