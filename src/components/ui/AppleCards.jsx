// src/components/AppleCard.jsx
import React from "react"

export default function AppleCard({ title, img, link }) {
  return (
    <div className='flex flex-col items-center'>
      <article className='relative aspect-square w-[clamp(350px,55vw,500px)] rounded-3xl overflow-hidden'>
        <img
          src={img}
          alt={title}
          className='absolute inset-0 h-full w-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-black/10' />
      </article>

      <a
        href={link}
        target='_blank'
        className='hover:scale-107 hover:shadow-2xl transition-transform duration-200 bg-secondary-foreground mt-4 w-fit py-3 px-10 rounded-full'
      >
        <h1 className='text-l font-main font-bold text-primary-foreground uppercase'>
          {title}
        </h1>
      </a>
    </div>
  )
}
