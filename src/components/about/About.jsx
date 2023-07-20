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
              <small>6</small>
            </article>
          </div>
          <p>
            Junior web developer, after 13 years in business, service to
            professionals and delivery, I chose to reconvert to the profession
            of web developer. I'm looking for experience to apply the knowledge
            i've acquired after 9 months of intensive training at the Wild Code
            School in Lyon. Autonomous by nature, I can work alone or in a
            group, being also able to adapt to an environment that I do not
            know. Make proposals, always looking to improve and optimize the
            projects to the maximum for objective: Optimisation and Customer
            satisfaction.
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
