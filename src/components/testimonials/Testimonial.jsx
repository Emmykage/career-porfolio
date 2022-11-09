import React from 'react'
import './testimonial.css'
import AVT1 from '../../assets/img/Kay-2.jpg'
import AVT2 from '../../assets/img/Kay-2.jpg'
import AVT3 from '../../assets/img/Kay-2.jpg'

// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const data = [{
  avatar: AVT1,
  name: 'Kay Muna',
  review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, porro saepe? Quis facilis numquam iste, quae optio, nam delectus esse unde temporibus, dolores expedita odit dolor quidem? Voluptatem, ad facere!',

},
{
avatar: AVT1,
name: 'Nastie Arinze',
review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, porro saepe? Quis facilis numquam iste, quae optio, nam delectus esse unde temporibus, dolores expedita odit dolor quidem? Voluptatem, ad facere!',

},
{
avatar: AVT1,
name: 'Kay Muna',
review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, porro saepe? Quis facilis numquam iste, quae optio, nam delectus esse unde temporibus, dolores expedita odit dolor quidem? Voluptatem, ad facere!',

}]

function Testimonial() {
  return (
   
   <section class='testimonials'>
    <h5>
      reviw from client
    </h5>
    <h2>
      Testimonials
    </h2>
    <Swiper className="container testimonials_container"
     pagination={{
      dynamicBullets: true,
    }}
    modules={[Pagination]}
    
    >
      {
        data.map(({avatar, name, review}, index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className="client_avatar">
          <img src={avatar} alt="avatar-one" />
          </div>
          <h5>{name}</h5>
          <small className='client_review'>{review}</small>

       
     </SwiperSlide>
          )
        })
      
}
    </Swiper>

   </section> )
}

export default Testimonial