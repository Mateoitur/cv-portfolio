import { useRef } from "react"
import { motion as m, useScroll, useTransform, useSpring } from "framer-motion"

const Contact = () => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 95%", "end 0%"], // ← begins as soon as the panel enters, ends at section bottom
  })

  // flattened → upright (tiny overshoot for snap)
  const scaleYRaw = useTransform(scrollYProgress, [0, 0.8, 1], [0.05, 1.04, 1])
  const rotateXRaw = useTransform(scrollYProgress, [0, 1], [70, 0])
  const scaleXRaw = useTransform(scrollYProgress, [0, 1], [1.06, 1])

  // smooth but responsive
  const scaleY = useSpring(scaleYRaw, { stiffness: 160, damping: 22 })
  const scaleX = useSpring(scaleXRaw, { stiffness: 160, damping: 22 })
  const rotateX = useSpring(rotateXRaw, { stiffness: 160, damping: 22 })

  return (
    <section ref={sectionRef} id='Contact' className='relative h-[200vh]'>
      <div className='sticky top-0 h-screen bg-neutral-300 rounded-2xl overflow-hidden'>
        <div className='relative h-full flex items-end justify-center'>
          <m.h1
            style={{
              scaleY,
              scaleX,
              rotateX,
              transformOrigin: "bottom center",
              transformPerspective: 1000,
            }}
            className='select-none leading-none font-extrabold text-white/95 tracking-[-0.02em]
                       text-[22vw] md:text-[18vw] lg:text-[16vw] xl:text-[14vw] will-change-transform'
          >
            CONTACT
          </m.h1>

          {/* baseline details sit on the same line throughout */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 text-center'>
            <p className='text-xs md:text-sm font-semibold tracking-wide text-neutral-900/80'>
              SPENCERGABOR9@GMAIL.COM
            </p>
            <div className='mt-2 text-[10px] md:text-xs text-neutral-900/70 space-x-5'>
              <a className='underline' href='https://instagram.com'>
                INSTAGRAM
              </a>
              <a className='underline' href='https://dribbble.com'>
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
