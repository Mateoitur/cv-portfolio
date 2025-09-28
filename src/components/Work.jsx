const Work = () => {
  return (
    <div ref={root} className="section" id="Work">
        <h1 className="heading2 ">MY WORK</h1>
        <h2 className="text-md text-onPrimary mt-1 mb-10">Some of my creations</h2>

        <div className="w-full relative flex overflow-x-auto gap-10 justify-center no-scrollbar">
          <div className="flex-none">
            <img className="img-carrousel" src="./work1.png" alt="" />
            <button className="font-main text-onPrimary bg-secondary px-8 py-3 rounded-full transition-transform hover:scale-105 hover:shadow-2xl">ESTATE</button>
          </div>
          <div className="flex-none">
            <img className="img-carrousel" src="./work1.png" alt="" />
            <button className="font-main text-onPrimary bg-secondary px-8 py-3 rounded-full transition-transform hover:scale-105 hover:shadow-2xl">ESTATE</button>
          </div>

          <div className="flex-none">
            <img className="img-carrousel" src="./work1.png" alt="" />
            <button className="font-main text-onPrimary bg-secondary px-8 py-3 rounded-full transition-transform hover:scale-105 hover:shadow-2xl">ESTATE</button>
          </div>
        </div>
        
    </div>
  )
}

export default Work
