import React, { useMemo } from "react"

const images = import.meta.glob("/src/assets/gallery/*.{png,jpg,jpeg,webp}", {
  eager: true,
  as: "url",
});

const Portfolio = () => {
    const urls = useMemo(() => Object.values(images).sort(), []);

  return (
    <div className="section" id="More">
      <h1 className="heading2 text">MORE WORK</h1>
      <h2 className="text text-md text-onPrimary mt-1 mb-20">Scroll around to see more</h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-25 max-w-6xl px-10'>
        {urls.map((src, i) => (
            <div key={i} className="gallery-row w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover"/>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Portfolio
