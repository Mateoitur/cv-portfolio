import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {

  return (
    <div className='w-full overflow-show'>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
