import React from "react";
import "./about.css";
import ME from "../../assets/img/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
      <h2>About me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Working Experience</h5>
              <small>3+ Years of </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ completed </small>
            </article>
            {/* <article className="about_card">
                        <FaAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years of working</small>

                    </article> */}
          </div>
          <h3 className="mt-6">
            I’m a full-stack developer with experience building production-ready
            web applications using Ruby on Rails, JavaScript, React.js, and
            Node.js. I’ve developed both full-stack and API-based systems,
            including HR management tools and business applications. <br />{" "}
            <br /> I completed the Microverse Software Development Program,
            where I gained hands-on experience working remotely with global
            teams using agile practices. I’m always eager to learn, grow, and
            take on new challenges in remote opportunities worldwide.
          </h3>
          <a href="#contacts" className="btn btn-primary mt-6">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
