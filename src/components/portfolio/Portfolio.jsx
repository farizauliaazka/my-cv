import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt="" />
          </div>
          <h3>Task Of Creating A Login Form</h3>
          <a href="https://github.com/" className='btn'>Github</a>         
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Make A Simple Web Using HTML And CSS</h3>
          <a href="https://github.com/" className='btn'>Github</a>         
        </article>
      </div>
    </section>
  )
}

export default Portfolio