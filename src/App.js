import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Navbar from './components/common/Navbar'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
// import burgerNav from './components/common/burgerNav'


function App() {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  )

}

export default App