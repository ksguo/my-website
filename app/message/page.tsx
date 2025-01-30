"use client"

import {
  
  SignedIn,
  SignedOut,
 

} from '@clerk/nextjs'
import { useState } from "react"

const Message = () => {
 
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])
  const [mode, setMode] = useState<"normal" | "insert">("normal")

  return (
    <section className="bg-uk-background-secondary-light h-full flex items-center">
      <div className="container mx-auto max-w-5xl px-4 flex items-center">
        <div className="flex flex-col space-y-4 font-primary w-full">
          {/* Vim Command Line */}
          <div className="flex items-center space-x-2">
            <span className="text-uk-teal-dark">➜</span>
            <span className="text-uk-blue-light">~</span>
            <span className="text-uk-label-primary-light">$</span>
            <span>vim message.txt</span>
          </div>

          {/* Auth Section */}
          <div className="pl-4 space-y-2">
            <SignedOut>
              <div className="flex items-center space-x-2">
                <span className="text-uk-purple-light">echo</span>
                <span className="text-uk-teal-dark">&quot;Please sign in to leave a message:&quot;</span>
                
              </div>
            </SignedOut>

            <SignedIn>
              {/* Vim Editor Area */}
              <div className="font-mono bg-uk-background-primary-light border border-uk-blue-light rounded p-2">
                {/* Status Line */}
                <div className="text-uk-label-secondary-light text-sm mb-2">
                  -- {mode.toUpperCase()} MODE --
                </div>
                
                {/* Editor Content */}
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="text-uk-label-secondary-light pr-2 select-none">
                    1
                  </div>
                  
                  {/* Text Area */}
                  <textarea
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                      setMode("insert")
                    }}
                    onFocus={() => setMode("insert")}
                    onBlur={() => setMode("normal")}
                    className="w-full bg-transparent border-none outline-none text-uk-label-primary-light resize-none"
                    placeholder="Press i to start typing..."
                    rows={4}
                  />
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={() => {
                  if (comment.trim()) {
                    setComments([...comments, comment])
                    setComment("")
                    setMode("normal")
                  }
                }}
                className="text-uk-blue-light hover:text-uk-blue-dark mt-2"
              >
                :w (Save)
              </button>

              {/* Messages Display */}
              <div className="mt-4 space-y-2">
                {comments.map((msg, idx) => (
                  <div key={idx} className="text-uk-teal-dark font-mono">
                    {`~${idx + 1} ${msg}`}
                  </div>
                ))}
              </div>
            </SignedIn>
          </div>

          {/* Vim Status Line */}
          <div className="flex items-center space-x-2">
            <span className="text-uk-teal-dark">➜</span>
            <span className="text-uk-blue-light">~</span>
            <span className="text-uk-label-primary-light">$</span>
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Message
