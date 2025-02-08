const About = () => {
    return (
      <section className="bg-uk-background-primary-light h-full flex items-center">
        <div className="container mx-auto max-w-5xl px-4 min-h-[calc(100vh-88px)] flex items-center">
          <div className="flex flex-col space-y-4 font-primary">
            <div className="flex flex-col space-y-2 text-lg">
              {/* First Command */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-cyan-light">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span>./welcome.bash</span>
              </div>
              
              {/* Welcome Response */}
              <div className="pl-4">
                <span className="text-uk-purple-light">echo</span>
                <span className="text-uk-grey6-dark"> &quot;Welcome to my portfolio!&quot;</span>
              </div>

              {/* Second Command */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-cyan-light">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span>whoami</span>
              </div>

              {/* Developer Info */}
              <div className="pl-4 space-y-2">
                <p><span className="text-uk-purple-light">const</span> developer = {`{`}</p>
                <p className="pl-4">name: <span className="text-uk-indigo-light"> &quot;Kesheng Guo&quot;</span>,</p>
                <p className="pl-4">role: <span className="text-uk-indigo-light"> &quot;Software Developer &quot;</span>,</p>
                <p className="pl-4">location: <span className="text-uk-indigo-light"> &quot;Cologne&quot;</span>,</p>
                <p className="pl-4">interests: [<span className="text-uk-indigo-light"> &quot;Web Development &quot;</span>, <span className="text-uk-indigo-light"> &quot;Open Source&quot;</span>],</p>
                <p className="pl-4">skills: [<span className="text-uk-indigo-light"> &quot;React &quot;</span>, <span className="text-uk-indigo-light"> &quot;Next.js &quot;</span>, <span className="text-uk-indigo-light"> &quot;TypeScript &quot;</span>]</p>
                <p>{`}`}</p>
              </div>

              {/* Third Command */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-cyan-light">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span>./introduction.bash</span>
              </div>

              {/* Introduction Response */}
              <div className="pl-4">
                <p className="text-uk-grey6-dark">
                &quot;Hi, I am currently a master&apos;s student in Information Systems at the University of Göttingen. I achieved my bachelor&apos;s degree from the University of Cologne.
                I am a passionate Full Stack Developer with a strong focus on Frontend Development. Proficient in React, Next.js, and TypeScript, I specialize in building dynamic and user-friendly web applications.&quot;
                </p>
              </div>

              {/* Cursor Line */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-cyan-light">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span className="animate-pulse">█</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About