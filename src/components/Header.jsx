import ThemeToggle from "./ThemeToggle"
import SplitText from "./ui/SplitText"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div class='hero' id='Home'>
      <motion.div
        class='small-section'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <p class='subheading'>COPENHAGEN, DENMARK</p>
        <p class='subheading2'>MATEOITURGAMBLE@GMAIL.COM</p>
      </motion.div>

      <div class='flex-1 flex flex-col items-center justify-center'>
        <SplitText
          tag='h1'
          text='MATEO ITUR GAM'
          className='heading overflow-visible'
        />
        <motion.img
          className='avatar 3inline-block rounded-3xl shadow-2xl will-change-transform select-none z-10'
          src='./images/headshot.JPG'
          alt=''
          initial={{ scale: 0 }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          viewport={{ once: true }}
        />
        <SplitText
          className='heading text-secondary-foreground'
          text='LEARNING TO DESIGN, INNOVATE & CREATE'
          to={{ scaleY: 1, transformOrigin: "bottom center", delay: 0.3 }}
        />
      </div>

      <motion.div
        class='small-section'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
      >
        <p class='subheading'>STUDYING ENGINEERING</p>
        <p class='subheading2'>DANISH TECHNICAL UNIVERSITY</p>
      </motion.div>

      <ThemeToggle />
    </div>
  )
}

export default Header
