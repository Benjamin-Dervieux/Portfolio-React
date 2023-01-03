import React from "react";
import "./about.css";
import ME from "../../assets/benja1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderOpened } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Worlwild</small>
            </article>

            <article className="about_card">
              <VscFolderOpened className="about_icon" />
              <h5>Projects</h5>
              <small>5</small>
            </article>
          </div>
          <p>
            Junior web developer, I am looking for a job after 6 months of
            intensive training at the Wild Code School in Lyon. After 13 years
            in business, service to professionals and delivery, I chose to
            reconvert to the profession of web developer. Autonomous by nature,
            I can work alone or in a group, being able to group, being also able
            to adapt to an environment that I don't know. Make proposals, always
            looking to improve and optimize the projects to the maximum for
            objective: customer satisfaction.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
