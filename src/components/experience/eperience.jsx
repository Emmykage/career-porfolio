import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon' />
              <h4>HTML</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>CSS</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Javascript</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Bootstrap</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>React</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Node.js</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>MongoDB</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Ruby on Rails</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>C++</h4>
              {/* <small className='text-light'>good</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Python</h4>
              {/* <small className='text-light'>good</small> */}
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-details-icon'/>
              <h4>Ruby</h4>
              {/* <small className='text-light'>Experienced</small> */}
            </article>
            
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience