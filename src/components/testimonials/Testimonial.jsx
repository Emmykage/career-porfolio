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
  review: 'The team represents among the highest levels of developers I have experienced. quality product delivery, responses to queries were turned around very fast. Products codes were clear and where necessary detailed enough for us to make informed decisions quickly, minimising the end to end time to process complex transactions among a number of parties.',

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