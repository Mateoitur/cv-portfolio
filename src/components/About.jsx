import React, { useRef } from "react"
import { useSectionAnimation } from "./animations/UseSectionAnimation";

const About = () => {

    const root = useRef(null);
  
    useSectionAnimation(root, { text: true, text2: true , img: true});

  return (
    <div ref={root} className="section" id="About">
        <h1 className="heading2 text">MY WORK</h1>
        <h2 className="text text-md text-onPrimary mt-1 mb-10">Some of my creations</h2>
        <img className="img size-120 rounded-2xl mb-5" src="./work1.png" alt="About Image" />
        <button className="font-main text-onPrimary bg-secondary px-8 py-3 rounded-full transition-transform hover:scale-105 hover:shadow-2xl">ESTATE</button>
    </div>
  )
}

export default About
