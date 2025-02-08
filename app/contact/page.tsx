const Contact = () => {
    return (
      <section className="bg-uk-background-primary-light h-full flex items-center">
        <div className="container mx-auto max-w-5xl px-4 min-h-[calc(100vh-88px)] flex items-center">
          <div className="flex flex-col space-y-4 font-primary">
            <div className="flex flex-col space-y-2 text-lg">
              {/* First Command */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-teal-dark">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span>./contact.bash</span>
              </div>
              
              {/* Contact Info */}
              <div className="pl-4 space-y-2">
                <p><span className="text-uk-purple-light">const</span> contact = {`{`}</p>
                <p className="pl-4">email: <span className="text-uk-teal-dark">&quot;kesheng.guo510@gmail.com&quot;</span>,</p>
                
               
                <p>{`}`}</p>
              </div>
  
              {/* Second Command */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-teal-dark">➜</span>
                <span className="text-uk-blue-light">~</span>
                <span className="text-uk-label-primary-light">$</span>
                <span>echo $message</span>
              </div>
  
              {/* Message */}
              <div className="pl-4">
                <span className="text-uk-grey6-dark">
                &quot;Feel free to reach out! I&apos;m always open to discussing new projects and opportunities.&quot;
                </span>
              </div>
  
              {/* Cursor Line */}
              <div className="flex items-center space-x-2">
                <span className="text-uk-teal-dark">➜</span>
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
  
  export default Contact