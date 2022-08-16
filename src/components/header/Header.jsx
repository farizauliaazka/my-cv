import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/header-removebg-preview.png'
import HeaderSosials from './HeaderSocials'
import Button from '@mui/material/Button'


const Header = ({datas}) => {
  const  {nama, setNama} = datas
  const  {job, setJob} = datas
  const  {halo, setHalo} = datas

  function what () {
    setNama ("Hello I'm");
  }

  function kuli () {
    setJob ("REKAYASA PERANGKAT LUNAK");
  }

  function woi () {
    setHalo ("Fariz Aulia Azka");
  }

  


  return (
    <header>
      <div className="container header__container">
      <h5>{nama}</h5>
      <h1>{halo}</h1>
      <h5 className="textlight">{job}</h5><br/>
      <Button variant="contained"  onClick={() => {what(); kuli(); woi();} }>Click</Button>
     
      <CTA />
      <HeaderSosials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="/contact" className='scroll__down'>Last Page__</a>
      </div>
    </header>
  )
}

export default Header