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
  name: 'Femi Bello',
  review: "Fantastic Job well done and very pleased with the way My Job was handled with precise and accuracy, well expressed with detailed information as I want it. I will recommend his work to friends and families and hope to get another site done again and again, Well Done"

},
{
avatar: AVT1,
name: 'Nastie Arinze',
review: 'A fantastic developer! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.',

},
{
avatar: AVT1,
name: 'Kay Muna',
review: 'I chatted with Morris. He was very helpful and answered all my questions concerning my product. I believe he had my interest at heart and found the best coverage for me at a good price.'
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