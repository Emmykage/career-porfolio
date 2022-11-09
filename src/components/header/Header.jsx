import React from 'react'
import './header.css'
import CTA from './CTA/CTA'
import me from './../../assets/img/me.jpg'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header_container">
              <h5>Hello I'm</h5>
              <h1>
                Morris Menanya
              </h1>
              <h5>
                fullstack Developer
              </h5>
              <CTA />
              <HeaderSocials />
              <div className="me">
                <img alt='my_image' src={me}></img>

              </div>
              
              <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
       
     
        

    </header>
  
  )
}

export default Header