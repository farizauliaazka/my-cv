import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pt44iik', 'service_pt44iik', form.current, 'CJYP_JkA2BE50kTWF')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>azka8794@gmail.com</h5>
            <a href="mailto:azka8794@gmail.com" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@farizauliaazka06_</h5>
            <a href="https://www.instagram.com/farizauliaazka06_/" target="_blank">Send A Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+0882-1943-9471</h5>
            <a href="https://api.whatsapp.com/send?phone=6288219439471" target="_blank">Send A Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' className='text' placeholder='Your Full Name' required/>
          <input type="email" name='email' className='text' placeholder='Your Email' required/>
          <textarea name="message" rows="7" className='text' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messege</button>
        </form>
      </div>
    </section>
  )
}

export default Contact