'use client'

import { About } from '@/components/About'
import { Banner } from '@/components/Banner'
import { Navbar } from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { ThemaContext } from '@/components/hook/usexContext'
import { useState } from 'react'



export default function Home() {
  const [theme, setTheme] = useState<string[]>(['en', "dark"]);

  return (
    <ThemaContext.Provider value={{ theme, setTheme }}  >
      <main className={theme[1] === "dark" ? "dark" : " "}>

        <div lang={theme[0]} className=" min-h-screen bg-gradient-to-r ober from-[#0CB2F2]/40 to-[#0063DB] dark:from-[#110B40] dark:to-[#190A8C]">
          <Navbar />
          <Banner />
          <About />
          <Skills />
          <Projects />
        </div>
      </main>
    </ThemaContext.Provider>
  )
}
