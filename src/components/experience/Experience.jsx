import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {RiReactjsLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience & Educations</h2>

      <div className='container experience__container'>

        <div className='experience__fronted'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>      
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small> 
              </div>    
            </article>
            <article className='experience__details'>
              <DiCss3 className='experience__details-icon'/>      
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small> 
              </div>     
            </article>
            <article className='experience__details'>
              <TbBrandJavascript className='experience__details-icon'/>      
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>     
            </article>
            <article className='experience__details'>
              <RiReactjsLine className='experience__details-icon'/>      
              <div>
                <h4>React js</h4>
                <small className='text-light'>Beginner</small>
              </div>     
            </article>
          </div>
        </div>

        <div className='experience__fronted'>
          <h3>Education</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>      
              <div>
                <h4>SDN Kranji X</h4>
                <small className='text-light'>2012-2018</small>
              </div>     
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>      
              <div>
                <h4>SMP Martia Bhakti</h4>
                <small className='text-light'>2018-2021</small>
              </div>     
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>      
              <div>
                <h4>SMKN 1 Kota Bekasi</h4>
                <small className='text-light'>2021-2022</small>
              </div>     
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience