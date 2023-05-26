import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './service.css'

function Services() {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>

          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>App Mock up</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Wireframe design</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
              <p>Figma Design</p>
            </li>
            { /*<li>
          <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li> */}
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>

          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Front End development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Back End Debelopment</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>FullStack Debelopment</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Site Maintainance</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Testing</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Database Management</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Software Development</h3>

          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Mobile App</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Javascript App Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Ruby Development</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Java Development</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services