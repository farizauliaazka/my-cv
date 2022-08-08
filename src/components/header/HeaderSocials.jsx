import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.instagram.com/farizauliaazka06_/" target="_blank"><BsInstagram/></a>
        <a href="https://www.facebook.com/farizaulia.azka" target="_blank"><BsFacebook/></a>
        <a href="https://twitter.com/fariauliaazka?t=4MBoOzmU8w9HjQDv7mC-Hw&s=08" target="_blank"><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials
