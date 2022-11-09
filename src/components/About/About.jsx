import React from "react";
import './about.css'
import ME from '../../assets/img/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About =() =>{
    return(
        <section id='about'>
          <h5>Get to know </h5>  
          <h2>About me</h2>
          <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={ME}alt="" />
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years of working</small>

                    </article>
                    <article className="about_card">
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>20+ Worldwide</small>

                    </article>
                    <article className="about_card">
                        <VscFolderLibrary className="about_icon"/>
                        <h5>Projects</h5>
                        <small>80+ completed </small>

                    </article>
                    {/* <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years of working</small>

                    </article> */}
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, obcaecati et ratione quas quod labore ex culpa. Cupiditate, qui itaque?

        
                </p>
                <a href="#contacts" className="btn btn-primary">Let's Talk</a>
            </div>
          </div>
        </section>
    )
}
export default About
