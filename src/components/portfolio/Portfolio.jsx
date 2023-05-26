import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/melisports_home.PNG'
import IMG2 from '../../assets/img/portfolio-two-pokemon.PNG'
import IMG3 from '../../assets/img/portfolio-three-ag-city.PNG'
import IMG4 from '../../assets/img/portfolio-four-movie-mania.PNG'
import IMG5 from '../../assets/img/power_spokes backend.PNG'
import IMG6 from '../../assets/img/investedge.PNG'
import Project from './Project'


const data = [{
  id: 1,
  image: IMG1,
  github:'https://github.com/Emmykage/melisports-tennis',
  demo: 'https://bright-gecko-6f953b.netlify.app/',
  title: 'E-Commerce Store',
  description: "This retail app is built with ReactJS, Ruby on Rails, Redux, and Postgres database. Users can browse, add to a cart and purchase products. ReactJS provides a responsive UI, while Redux manages data flow. Ruby on Rails ensures a secure API, and Postgres offers efficient data management."
},
{
  id: 2,
  image: IMG2,
  github:'https://github.com/Emmykage/Pokemon-CapstoneProject',
  demo: 'https://emmykage.github.io/Pokemon-CapstoneProject/dist/',
  title: 'Pokemon Pokedex',
  description: "PokeDex: Your Ultimate Pokémon Guide - the essential app that showcases all Pokémon characters and their unique abilities. Dive into a comprehensive database, explore detailed descriptions, movesets, evolutions, and learn about their strengths and weaknesses. Stay updated with new releases and events, bookmark favorites, and connect with fellow trainers. Become a Pokémon expert with PokeDex, your go-to companion for all things Pokémon!"
  },
{
  id: 3,
  image: IMG3,
  github:'https://github.com/Emmykage/AG-City',
  demo: 'https://emmykage.github.io/AG-City/',
  title: 'Agrow-City Food Export',
  description: "Introducing FoodExportNG: Nigeria's Culinary Exports- the ultimate website for exploring and sourcing Nigerian food exports. Discover a diverse range of products, connect with trusted suppliers, and experience the vibrant flavors of Nigeria. Join us at FoodExportNG and embark on a delicious journey today!"
},
{
  id: 4,
  image: IMG4,
  github:'https://github.com/Emmykage/React-Capstone',
  demo: 'https://relaxed-empanada-1b339a.netlify.app/',
  title: 'Movie Mania',
  description: "Introducing MovieMania: Your Movie Hub - a sleek and user-friendly ReactJS website powered by a movie API. Explore a vast collection of movies, stay updated with the latest releases, and create your personalized watchlist. Dive into the world of cinema with MovieMania today!"

},
{
  id: 5,
  image: IMG5,
  github:'https://github.com/Emmykage/Final-capstone-project/tree/dev',
  demo: 'https://final-capstone-project-udqc.vercel.app/',
  title: 'Motocycle Booking App',
  description: "Introducing RideOn: Book Your Motorcycle Adventure - a sleek ReactJS and Rails app that lets you browse and reserve motorcycles effortlessly. Discover a variety of bikes, make reservations, and hit the road in style. Experience the thrill of RideOn today!"
},
{
  id: 6,
  image: IMG6,
  github:'https://github.com/Emmykage/finance-app',
  demo: 'https://admirable-wisp-900f98.netlify.app/',
  title: 'Investment App',
  description: "The investment app is a user-friendly mobile application designed to provide individuals with a convenient and accessible platform to manage their investments. With this app, users can easily track and monitor their investment portfolios, stay updated with real-time market data, and make informed investment decisions."
}
]

function Portfolio() {
  const [showDetails, setSowDetail] = useState(false)
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo, description}) => {
            return (
              <Project key={id} props={{image, title, github, demo, description}}/>
     
          
          
            )
          })
        }
        
        
        
         </div>
         
    </section>
  )
}

export default Portfolio