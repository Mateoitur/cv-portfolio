import { useEffect, useMemo, useRef, useCallback, useState } from "react"
import AppleCard from "./ui/AppleCards"
import { motion as m } from "framer-motion"
import { flushSync } from "react-dom"

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
  const firstRef = useRef(null)
  const boundaryRef = useRef(null) // item at index cards.length
  const segmentWidthRef = useRef(0)
  const [wrapping, setWrapping] = useState(false)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const recompute = () => {
      if (!firstRef.current || !boundaryRef.current) return
      const newSegW =
        boundaryRef.current.offsetLeft - firstRef.current.offsetLeft
      if (!newSegW) return

      const prevSegW = segmentWidthRef.current || newSegW
      // keep the same relative position across segments
      const progress = scroller.scrollLeft / prevSegW

      segmentWidthRef.current = newSegW
      scroller.scrollLeft = progress * newSegW
    }

    // compute now and on resize
    recompute()
    window.addEventListener("resize", recompute)
    return () => window.removeEventListener("resize", recompute)
  }, [cards.length])

  const onScroll = useCallback(() => {
    const scroller = scrollerRef.current
    const segW = segmentWidthRef.current
    if (!scroller || !segW) return

    const x = scroller.scrollLeft
    const maxX = scroller.scrollWidth - scroller.clientWidth
    const leftEdge = segW * 0.25
    const rightEdge = maxX - segW * 0.25

    if (x < leftEdge) {
      flushSync(() => setWrapping(true))
      scroller.scrollLeft = x + segW
      requestAnimationFrame(() =>
        // keep it alive for 2 frames
        requestAnimationFrame(() => setWrapping(false))
      )
    } else if (x > rightEdge) {
      flushSync(() => setWrapping(true))
      scroller.scrollLeft = x - segW
      requestAnimationFrame(() =>
        // keep it alive for 2 frames
        requestAnimationFrame(() => setWrapping(false))
      )
    }
  }, [])

  const appear = {
    hidden: (skip) => ({
      opacity: 0,
      scale: skip ? 1 : 0.7, // ← when wrapping, stay at full scale
      transition: { duration: 0.6 }, // instant on wrap
    }),
    visible: (skip) => ({
      opacity: 1,
      scale: 1,
      transition: skip ? { duration: 0 } : { type: "spring", bounce: 0.4 },
    }),
  }

  return (
    <div className='section' id='Work'>
      <h1 className='heading2 '>MY WORK</h1>
      <h2 className='text-md text-onPrimary mt-1 mb-10'>
        Some of my creations
      </h2>

      <div
        ref={scrollerRef}
        onScroll={onScroll}
        className='w-full flex overflow-x-auto overflow-y-hidden scrollbar-none px-6'
      >
        {/* segment A */}
        <div className='flex w-max items-center gap-x-[clamp(20px,10vw,200px)] pt-10 pb-20'>
          {looped.map((c, i) => (
            <m.div
              key={i}
              ref={i === 0 ? firstRef : i === cards.length ? boundaryRef : null}
              className='will-change-transform will-change-opacity transform-gpu origin-center shrink-0 [backface-visibility:hidden] [transform-style:preserve-3d]'
              variants={appear}
              initial={wrapping ? false : "hidden"}
              whileInView='visible'
              animate={wrapping ? "visible" : undefined}
              viewport={
                wrapping
                  ? false // ← disables whileInView during the wrap jump → no flash
                  : {
                      once: false,
                      amount: 0.25,
                      margin: "0px 0px 20% 0px",
                      root: scrollerRef,
                    }
              }
              custom={wrapping}
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
