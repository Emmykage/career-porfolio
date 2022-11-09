import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio-one-conference.PNG'
import IMG2 from '../../assets/img/portfolio-two-pokemon.PNG'
import IMG3 from '../../assets/img/portfolio-three-ag-city.PNG'
import IMG4 from '../../assets/img/portfolio-four-movie-mania.PNG'
import IMG5 from '../../assets/img/power_spokes backend.PNG'


const data = [{
  id: 1,
  image: IMG1,
  github:'https://github.com/Emmykage/Capstone-Project',
  demo: 'https://emmykage.github.io/Capstone-Project/',
  title: 'Annual Engineering Conference'
},
{
  id: 2,
  image: IMG2,
  github:'https://github.com/Emmykage/Pokemon-CapstoneProject',
  demo: 'https://emmykage.github.io/Pokemon-CapstoneProject/dist/',
  title: 'Pokemon Pokedex',
  },
{
  id: 3,
  image: IMG3,
  github:'https://github.com/Emmykage/AG-City',
  demo: 'https://emmykage.github.io/AG-City/',
  title: 'Agrow-City Food Export'
},
{
  id: 4,
  image: IMG4,
  github:'https://github.com/Emmykage/React-Capstone',
  demo: 'https://relaxed-empanada-1b339a.netlify.app/',
  title: 'Movie Mania'
},
{
  id: 5,
  image: IMG5,
  github:'https://github.com/Emmykage/Final-capstone-project/tree/dev',
  demo: 'https://final-capstone-project-udqc.vercel.app/',
  title: 'Motocycle Booking App'
}
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id}  className='portfolio_item'>
     
          <div className='portfolio_item-image'>
            <img src={image} />

          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
          <a href={github} className='btn'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
          
        </article>
            )
          })
        }
        
        
        
         </div>
    </section>
  )
}

export default Portfolio