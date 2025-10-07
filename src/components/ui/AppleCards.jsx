// src/components/AppleCard.jsx
import React from "react"

export default function AppleCard({
  tag = "Click to learn more.",
  title,
  img,
  link,
}) {
  return (
    <a href={link} target='_blank'>
      <article className='relative aspect-[10/13] w-[clamp(260px,40vw,450px)] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 transition-transform duration-300 will-change-transform hover:scale-101 cursor-pointer'>
        <img
          src={img}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
          loading='lazy'
        />

        <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/0' />

        <div className='flex flex-col items-start absolute left-7 top-7'>
          <h1 className='text-3xl font-bold text-white'>{title}</h1>
          <h2 className='text-xs text-white mb-1'>{tag}</h2>
        </div>
      </article>
    </a>
  )
}
