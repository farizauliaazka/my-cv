import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>AZK</a>

      <ul className='permalinks'>
      <li><Link to="/"><h3>Home</h3></Link></li>
        <li><Link to="/about"><h3>About</h3></Link></li>
        <li><Link to="/experience"><h3>Experience</h3></Link></li>
        <li><Link to="/portfolio"><h3>Portfolio</h3></Link></li>
        <li><Link to="/contact"><h3>Contact</h3></Link></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/farizauliaazka06_/"><BsInstagram/></a>
        <a href="https://www.facebook.com/farizaulia.azka"><BsFacebook/></a>
        <a href="https://twitter.com/fariauliaazka?t=4MBoOzmU8w9HjQDv7mC-Hw&s=08"><BsTwitter/></a>
      </div>

      <div className="footer__copyrigh">
        <small>&copy; FARIZ AULIA AZKA</small>
      </div>
      <div><small>ALL right reserved</small></div>
    </footer>
  )
}

export default Footer