import React from 'react'
import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {


  return (
    <section id='contact'>
      <h5> Get in Touch</h5>

      <h2>contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineAttachEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>emmiekage</h5>
            <a href='mailto:emmiemenz@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messaenger</h4>
            <h5>morrison</h5>
            <a href='http://m.me/morrismenanya'>Send a message</a>
          </article>
          <article className='contact_option'>
         
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>emmiekage</h5>
            <a href='https://api.whatsapp.com/send?phone=+2347064334160'>Send a message</a>
          </article>
        </div>
          <form action="https://formspree.io/f/xayvlole" method="post">
                <div class="input"><input name="name" id="name" type="text" placeholder="Full name" required minlength="30" /></div>
                <div class="input"><input name="Email" type="email" placeholder="Email address" required /></div>
                <div class="input text-input"><textarea maxlength="500" placeholder="Enter text here"></textarea>
               
            </div>
            {/* <button name="message" type="submit">Get in touch</button>
             */}
              <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
      </div>

    </section>
  )
}

export default Contact