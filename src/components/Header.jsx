import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='hero' id='Home'>
      <Navbar />
      <motion.img transition={{ease: "easeInOut"}} whileHover={{ scale: 1.02 }} className='avatar' src="./headshot.JPG" alt="" />
      <h1 className='heading'>Mateo Iturmendi</h1>
      <h2 className='subheading'>Learning to design, innovate and create.</h2>
      <div className="flex space-x-6">
        <motion.a whileHover={{ scale: 1.05 }} href="#About" className="btn btn-primary">
          About Me <img src="./arrow-right.svg" alt="" className="btn-icon" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.05 }} href="" className="btn btn-outline">
          <img src="./download.svg" alt="" className="btn-icon" /> Download CV
        </motion.a>
      </div>
    </div>
  )
}

export default Header
