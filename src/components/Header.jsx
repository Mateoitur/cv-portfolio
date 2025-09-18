import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='hero' id='Home'>
      <h1 className='heading'>MATEO ITURMENDI</h1>
      <motion.img transition={{ease: "easeInOut"}} whileHover={{ scale: 1.02 }} className='avatar' src="./headshot.JPG" alt="" />
      <h2 className='subheading'>LEARNING TO DESIGN, INNOVATE & CREATE</h2>
    </div>
  )
}

export default Header
