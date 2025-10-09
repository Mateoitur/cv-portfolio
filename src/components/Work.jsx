import { useEffect, useMemo, useRef, useCallback } from "react"
import AppleCard from "./ui/AppleCards"
import { motion as m } from "framer-motion"

const Work = () => {
  const cards = [
    {
      title: "Klimate App",
      img: "../images/showcase/klimate.png",
      link: "https://klimate-weather.onrender.com/",
    },
    {
      title: "Estate Web",
      img: "../images/showcase/estate.png",
      link: "https://estate-m-i-g.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/showcase/voyagr.png",
      link: "https://voyagr-wgh9.onrender.com/",
    },
    {
      title: "Tribe",
      img: "../images/showcase/tribe.png",
      link: "https://tribe-light.onrender.com/",
    },
  ]

  const looped = useMemo(
    () => Array.from({ length: 3 }, () => cards).flat(),
    [cards]
  )

  const scrollerRef = useRef(null)
  const segmentRef = useRef(null)
  const segmentWidthRef = useRef(0)

  useEffect(() => {
    const seg = segmentRef.current
    const scroller = scrollerRef.current
    if (!seg || !scroller) return

    requestAnimationFrame(() => {
      segmentWidthRef.current = seg.offsetWidth
      scroller.scrollLeft = segmentWidthRef.current
    })
  }, [])

  const onScroll = useCallback(() => {
    const scroller = scrollerRef.current
    const segW = segmentWidthRef.current
    if (!scroller || !segW) return

    const x = scroller.scrollLeft
    // Use comfortable buffers so the jump is never visible
    const leftEdge = segW * 0.25
    const rightEdge = segW * (2 + 0.75) // near end of 3rd copy

    if (x < leftEdge) {
      // jumped too far left -> push forward by one segment
      scroller.scrollLeft = x + segW
    } else if (x > rightEdge) {
      // scrolled too far right -> pull back by one segment
      scroller.scrollLeft = x - segW
    }
  }, [])

  return (
    <div className='section' id='Work'>
      <h1 className='heading2 '>MY WORK</h1>
      <h2 className='text-md text-onPrimary mt-1 mb-10'>
        Some of my creations
      </h2>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className='w-full flex overflow-x-auto overflow-y-hidden scrollbar-none'
      >
        {/* segment A */}
        <div
          ref={segmentRef}
          className='mx-auto flex w-max gap-x-[clamp(50px,15vw,200px)] px-6 pt-10 pb-20'
        >
          {cards.map((c, i) => (
            <m.div
              key={i}
              className='will-change-transform will-change-opacity transform-gpu'
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <AppleCard {...c} />
            </m.div>
          ))}
        </div>

        {/* segment B */}
        <div className='mx-auto flex w-max gap-x-[clamp(50px,15vw,200px)] px-6 pt-10 pb-20'>
          {cards.map((c, i) => (
            <m.div
              key={`B-${i}`}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className='will-change-transform will-change-opacity transform-gpu'
            >
              <AppleCard {...c} />
            </m.div>
          ))}
        </div>

        {/* segment C */}
        <div className='mx-auto flex w-max gap-x-[clamp(50px,15vw,200px)] px-6 pt-10 pb-20'>
          {cards.map((c, i) => (
            <m.div
              key={`C-${i}`}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className='will-change-transform will-change-opacity transform-gpu'
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
