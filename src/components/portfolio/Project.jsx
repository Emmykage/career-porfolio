import React, { useState } from 'react'

const Project = ({props}) => {
  const [toggle, setToggle] = useState(false)
  const handleModal = () => {

  }
    const {image, title, github, demo, description} = props
    console.log(props)
  return (
    <article className='portfolio_item'>
        <a onClick={() => setToggle(true)}>

        
        <div className='portfolio_item-image'>
            <img src={image} />

          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
           </a>

           <div className={toggle ? 'modal-container show': 'modal-container'}>
            <div className='modal'>
            <button onClick={() => setToggle(false)} >close</button>
            <h2>{title}</h2>
            <div>
            <img src={image} alt="" />
            <div>
              <p>
                {description}
              </p>
              <div className='btn-div'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            

              </div>
             </div>

            </div>
            
  
           </div>
           
           </div>
        
    </article>
  )
}

export default Project