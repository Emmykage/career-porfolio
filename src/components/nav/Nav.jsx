import React, { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {GrUserExpert} from 'react-icons/gr'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {GrContact} from 'react-icons/gr'
import './nav.css'



function Nav() {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><GrUserExpert /></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
        <a href='#service' onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
        <a href='#contact'  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><GrContact /></a>
    </nav>
  )
}

export default Nav