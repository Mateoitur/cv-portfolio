// src/components/AppleCard.jsx
import React from "react"
import { motion } from "framer-motion"

export default function AppleCard({ title, img, link }) {
  return (
    <div className='flex flex-col items-center'>
      <article className='relative aspect-square w-[clamp(300px,55vw,500px)] rounded-3xl overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black/10' />
      </article>

      <motion.a
        href={link}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        target='_blank'
        className='hover:shadow-2xl transition-shadow bg-secondary-foreground mt-4 w-fit py-3 px-10 rounded-full'
      >
        <h1 className='text-l font-main font-bold text-primary-foreground uppercase'>
          {title}
        </h1>
      </motion.a>
    </div>
  )
}
