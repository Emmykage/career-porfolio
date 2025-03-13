import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/melisports_home.PNG'
import IMG2 from '../../assets/img/artisan-directory.PNG'
import IMG3 from '../../assets/img/bitbridgeglobal.PNG'
import IMG4 from '../../assets/img/portfolio-four-movie-mania.PNG'
import IMG5 from '../../assets/img/abf accounting.PNG'
import IMG6 from '../../assets/img/investedge.PNG'
import Project from './Project'
import IMG7 from '../../assets/img/portfolio-three-ag-city.PNG'


const data = [{
  id: 1,
  image: IMG1,
  github:'https://github.com/Emmykage/melisports-tennis',
  demo: 'https://melisports.com/',
  title: ' E-Commerce Store',
  description: "This retail app is built with ReactJS, Ruby on Rails, Redux, and Postgres database. Users can browse, add to a cart and purchase products. ReactJS provides a responsive UI, while Redux manages data flow. Ruby on Rails ensures a secure API, and Postgres offers efficient data management."
},
{
  id: 2,
  image: IMG2,
  demo: 'https://artisans-frontend.vercel.app/',
  title: 'Artisan-Directory',
  description: "ArtisanHub aims to revolutionise the way artisans and clients connect and collaborate, fostering a thriving ecosystem of skilled professionals and satisfi ed customers within Nasarawa State. Whether you need a skilled artisan or are looking to showcase your craftsmanship, ArtisanHub is your go-to destination"
  },
{
  id: 3,
  image: IMG3,
  demo: 'https://www.bitbridgeglobal.com/',
  title: 'BitBtridge Gblobal',
  description: "A wallet-based web application facilitating seamless cryptocurrency transactions and digital asset management and also provides utility bills payment seamlessly using a system. Built with modern web technologies, it integrates secure authentication, intuitive UI/UX, and real-time data updates to enhance user experience."
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
  demo: 'https://abfaccounting.com/',
  title: 'ABF Accounting',
  description: "ABF Accounting Services provides comprehensive accounting solutions for UK businesses of all sizes. Our team of professional accountants is dedicated to helping your business grow through tailored financial strategies and seamless compliance with UK regulations."
},

{
  id: 6,
  image: IMG7,
  github:'https://github.com/Emmykage/AG-City',
  demo: 'https://emmykage.github.io/AG-City/',
  title: 'Agrow-City Food Export',
  description: "Introducing FoodExportNG: Nigeria's Culinary Exports- the ultimate website for exploring and sourcing Nigerian food exports. Discover a diverse range of products, connect with trusted suppliers, and experience the vibrant flavors of Nigeria. Join us at FoodExportNG and embark on a delicious journey today!"
}
// {
//   id: 7,
//   image: IMG6,
//   github:'https://github.com/Emmykage/finance-app',
//   demo: 'https://admirable-wisp-900f98.netlify.app/',
//   title: 'Investment App',
//   description: "The investment app is a user-friendly mobile application designed to provide individuals with a convenient and accessible platform to manage their investments. With this app, users can easily track and monitor their investment portfolios, stay updated with real-time market data, and make informed investment decisions."
// }
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