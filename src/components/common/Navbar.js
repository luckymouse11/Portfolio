import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Nav = () => {

  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  return (
    <nav>
      <div className="d-flex justify-content-around">
        <a href="#top" className="nav-link">Home</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  )

}

export default Nav