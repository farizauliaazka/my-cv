import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><h3>Home</h3></Link></li>
        <li><Link to="/about"><h3>About</h3></Link></li>
        <li><Link to="/experience"><h3>Experience</h3></Link></li>
        <li><Link to="/portfolio"><h3>Portfolio</h3></Link></li>
        <li><Link to="/contact"><h3>Contact</h3></Link></li>
      </ul>
    </nav>
  )
}

export default Nav