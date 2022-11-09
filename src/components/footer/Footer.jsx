import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Vortech Engineering</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a> </li>
        <li><a href='#about'>About</a> </li>
        <li><a href='#experience'>Experience</a> </li>
        <li><a href='#service'>Service</a> </li>
        <li><a href='#portfolio'>Portfolio</a> </li>
        <li><a href='#testimonials'>Testimonials</a> </li>
        <li><a href='#contact'>Contact</a> </li>


      </ul>
      <div className='footer_socials'>
        <a href='facebook'><FaFacebookF/></a>
        <a href='facebook'><FaInstagram /></a>
        <a href='facebook'><IoLogoTwitter/></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Vortech. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer