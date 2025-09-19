import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { use, useRef } from 'react'
import { useSectionAnimation } from './animations/UseSectionAnimation';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const root = useRef(null);

  useSectionAnimation(root, { text: true, img: true, text2: true });

  return (
    <div ref={root} className='hero' id='Home'>

      <div className='flex flex-col items-center justify-center gap-y-2 m-10 m:m-30'>
        <p className='subheading text2'>COPENHAGEN, DENMARK</p>
        <p className='subheading2 text2'>MATEOITURGAMBLE@GMAIL.COM</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='heading text'>MATEO ITURMENDI</h1>
        <img className='avatar img' src="./headshot.JPG" alt="" />
        <h2 className='heading text-secondary text'>LEARNING TO DESIGN, INNOVATE & CREATE</h2>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-2 m-30 sm:m-10'>
        <p className='subheading text2'>STUDYING ENGINEERING</p>
        <p className='subheading2 text2'>DANISH TECHNICAL UNIVERSITY</p>
      </div>

    </div>
  )
}

export default Header
