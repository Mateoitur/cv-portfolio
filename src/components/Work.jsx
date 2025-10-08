import AppleCard from "./ui/AppleCards"
import { motion as m } from "framer-motion"

const Work = () => {
  const cards = [
    {
      title: "Klimate App",
      img: "../images/work/klimate1.png",
      link: "https://klimate-weather.onrender.com/",
    },
    {
      title: "Estate Web",
      img: "../images/work/estate1.png",
      link: "https://estate-m-i-g.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/work/voyagr1.png",
      link: "https://voyagr-wgh9.onrender.com/",
    },
  ]
  return (
    <div className='section' id='Work'>
      <h1 className='heading2 '>MY WORK</h1>
      <h2 className='text-md text-onPrimary mt-1 mb-10'>
        Some of my creations
      </h2>

      <div className='w-full flex overflow-x-auto overflow-y-hidden scrollbar-none'>
        <div className='mx-auto flex w-max gap-x-[clamp(50px,15vw,200px)] px-6 pt-10 pb-20'>
          {cards.map((c, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <AppleCard {...c} />
            </m.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
