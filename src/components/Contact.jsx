// Contact.jsx
import { useRef } from "react"
import { motion as m, useScroll, useTransform, useSpring } from "framer-motion"

const Contact = () => {
  const sectionRef = useRef(null)

  // Progress goes 0→1 while you scroll through this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start when section enters bottom of viewport, end when it leaves top
    offset: ["start end", "end start"],
  })

  // Flattened → normal
  const rawScaleY = useTransform(scrollYProgress, [0, 1], [0.05, 1])
  // Optional subtle width relax for a nicer “un-squash” feel
  const rawScaleX = useTransform(scrollYProgress, [0, 1], [1.06, 1])

  // Smooth it a touch so it feels buttery but still responsive
  const scaleY = useSpring(rawScaleY, { stiffness: 140, damping: 20 })
  const scaleX = useSpring(rawScaleX, { stiffness: 140, damping: 20 })

  return (
    <section ref={sectionRef} id='Contact' className='relative h-[180vh]'>
      {/* Sticky panel */}
      <div className='sticky top-0 h-screen bg-neutral-300 rounded-2xl overflow-hidden'>
        {/* Big word pinned to the bottom */}
        <div className='relative h-full flex items-end justify-center'>
          <m.h1
            style={{ scaleY, scaleX, transformOrigin: "bottom center" }}
            className='select-none pointer-events-none leading-none font-extrabold text-white/95 tracking-[-0.02em]
                       text-[18vw] md:text-[16vw] lg:text-[14vw]'
          >
            CONTACT
          </m.h1>

          {/* Your actual contact info (stays centered) */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-center'>
            <p className='text-xs md:text-sm font-semibold tracking-wide text-neutral-900/80'>
              SPENCERGABOR9@GMAIL.COM
            </p>
            <div className='mt-2 text-[10px] md:text-xs text-neutral-900/70 space-x-5'>
              <a href='https://instagram.com' className='underline'>
                INSTAGRAM
              </a>
              <a href='https://dribbble.com' className='underline'>
                DRIBBBLE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
