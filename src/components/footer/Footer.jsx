import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AZK</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
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