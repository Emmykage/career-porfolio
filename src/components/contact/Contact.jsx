import React from 'react'
import { useRef } from 'react'
// import emailjs from '@emailjs-com'

import './contact.css'
import {MdOutlineAttachEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
// import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();
  

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_vf7a1t7', 'template_ntzq6jm', form.current, 'fXLYgJERA5iL1OpCm')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  // };

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
        {/* END OF CONTACT */}
        {/* <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email'/>
          <textarea name='message'row='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        < /form> */}

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