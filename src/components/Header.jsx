import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { use, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const root = useRef(null);

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: "top 75%",
        toggleActions: "restart none restart none"
      },
      defaults: { ease: "back"},
    });

    tl.fromTo('.text', {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.2})
    .fromTo('.img', {opacity: 0, scale:0}, {opacity: 1, scale:1}, "<")
    .fromTo('.text2', {opacity: 0,}, {opacity: 1, delay: 0.6, duration: 2}, "<")

  }, { scope: root })

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
