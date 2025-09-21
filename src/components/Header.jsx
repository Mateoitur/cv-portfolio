import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { use, useRef } from 'react'
import { useSectionAnimation } from './animations/UseSectionAnimation';
import InteractiveAvatar from './InteractiveAvatar';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const root = useRef(null);

  useSectionAnimation(root, { text: true, img: true, text2: true });

  return (
    <div ref={root} class='min-h-screen flex flex-col px-4 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] bg-primary' id='Home'>

      <div class='small-section'>
        <p class='subheading text2'>COPENHAGEN, DENMARK</p>
        <p class='subheading2 text2'>MATEOITURGAMBLE@GMAIL.COM</p>
      </div>

      <div class='flex-1 flex flex-col items-center justify-center'>
        <h1 class='heading text'>MATEO ITUR GAM</h1>
        <InteractiveAvatar src="./headshot.JPG" />
        <h2 class='heading text-secondary text'>LEARNING TO DESIGN, INNOVATE & CREATE</h2>
      </div>

      <div class='small-section'>
        <p class='subheading text2'>STUDYING ENGINEERING</p>
        <p class='subheading2 text2'>DANISH TECHNICAL UNIVERSITY</p>
      </div>

    </div>
  )
}

export default Header
