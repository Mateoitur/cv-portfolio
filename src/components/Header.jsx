import React from 'react'

const Header = () => {
  return (
    <div className='hero' id='Home'>

      <div className='flex flex-col items-center justify-center gap-y-2 m-10 m:m-30'>
        <p className='subheading'>COPENHAGEN, DENMARK</p>
        <p className='subheading2'>MATEOITURGAMBLE@GMAIL.COM</p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='heading'>MATEO ITURMENDI</h1>
        <img className='avatar' src="./headshot.JPG" alt="" />
        <h2 className='heading text-secondary'>LEARNING TO DESIGN, INNOVATE & CREATE</h2>
      </div>

      <div className='flex flex-col items-center justify-center gap-y-2 m-30 sm:m-10'>
        <p className='subheading'>STUDYING ENGINEERING</p>
        <p className='subheading2'>DANISH TECHNICAL UNIVERSITY</p>
      </div>

    </div>
  )
}

export default Header
