import React, { useMemo } from "react"

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
      <h1 className='heading2 text'>MORE WORK</h1>
      <h2 className='text text-md text-onPrimary mt-1 mb-20'>
        Scroll around to see more
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-[clamp(5px,10vw,120px)] md:gap-[clamp(5px,10vw,120px)] mx-auto max-w-[clamp(200px,90vw,1000px)]'>
        {gallery.map((src) => (
          <img
            key={src}
            src={src}
            loading='lazy'
            className='rounded-xl shadow-2xl hover:scale-102 transition-transform'
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio
