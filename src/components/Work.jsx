import AppleCard from "./ui/AppleCards"

const Work = () => {
  const cards = [
    {
      title: "Klimate App",
      img: "../images/klimate1.png",
      link: "https://klimate-weather.onrender.com/",
    },
    {
      title: "Estate Web",
      img: "../images/estate1.png",
      link: "https://estate-m-i-g.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/voyagr1.png",
      link: "https://voyagr-wgh9.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/voyagr1.png",
      link: "https://voyagr-wgh9.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/voyagr1.png",
      link: "https://voyagr-wgh9.onrender.com/",
    },
    {
      title: "Voyagr",
      img: "../images/voyagr1.png",
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
        <div className='mx-auto flex w-max gap-x-6 px-6 pt-10 pb-20'>
          {cards.map((c, i) => (
            <div key={i}>
              <AppleCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
