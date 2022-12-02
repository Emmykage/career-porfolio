import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiFillDribbbleSquare} from 'react-icons/ai'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/morris-menanya/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/Emmykage' target="_blank"><BsGithub/></a>
        <a href='https://twitter.com/mennydev' target="_blank"><AiFillDribbbleSquare /></a>
    </div>
  )
}

export default HeaderSocials