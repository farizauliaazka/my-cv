import React from 'react'
import './about.css'
import ME from '../../assets/azz.jpg'
import {IoSchoolSharp} from 'react-icons/io5'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} class="img-2" alt="About Image" style={{ width :'270px', height :'270px' }}/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <a href="https://smkn1kotabekasi.sch.id/#">
              <article className='about__card'>
                <IoSchoolSharp className='about__icon'/>
                <h5>Education</h5>
                <small>Smkn 1 Kota Bekasi</small>
              </article>
            </a>
          </div>

          <p>
          My name is Fariz Aulia Azka, you can call me Azka, I am 16 yo, my hobbies are sports and listening to music. I go to school in
          SMKN 1 Bekasi City majoring in Engineering Software/RPL. My interest in career become a web developer or app
          developers. While at school I learn HTML, CSS and Javascript.
          </p>

          <a href="/contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>      
    </section>
  )
}

export default About