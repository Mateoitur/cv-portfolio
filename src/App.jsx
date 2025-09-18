import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full overflow-hidden scroll-smooth'>
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
