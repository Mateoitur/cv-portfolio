import React from "react"
import { motion as m } from "framer-motion"
import SplitText from "./ui/SplitText"

const Portfolio = () => {
  const modules = import.meta.glob(
    "../assets/gallery/*.{png,jpg,jpeg,webp,svg}",
    {
      eager: true,
    }
  )

  const gallery = Object.values(modules).map((m) => m.default)

  return (
    <div className='section' id='More'>
      <SplitText className='heading2 text' text='MORE WORK' />
      <m.h2
        className='text text-md text-onPrimary mt-1 mb-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
      >
        Scroll around to see more
      </m.h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-[clamp(5px,10vw,120px)] md:gap-[clamp(5px,10vw,120px)] mx-auto max-w-[clamp(200px,90vw,1000px)]'>
        {gallery.map((src) => (
          <m.img
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.04 }}
            key={src}
            src={src}
            loading='lazy'
            className='rounded-xl shadow-2xl'
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
