import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="services">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Creation of XD and HTML templates.</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Functional prototypes.</p>
            </li>

            <li>
              <BiCheck size={32} className="service_list-icon" />
              <p>
                User-centered design according to UX rules when creating a user
                interface.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="services">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Analysis of the client's needs</p>
            </li>

            <li>
              <BiCheck size={46} className="service_list-icon" />
              <p>
                Creation and integration of websites and mobile applications
                that are responsive, accessible and meet standards.
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Creation and management of databases.</p>
            </li>

            <li>
              <BiCheck size={44} className="service_list-icon" />
              <p>
                Ensures compatibility with different browsers (Chrome, Safari,
                Explorer, Firefox...) as well as responsive (tablet, mobile)
              </p>
            </li>

            <li>
              <BiCheck size={44} className="service_list-icon" />
              <p>
                Teamwork around the creation of the project: ideas features,
                content, business model, prototype, design.
              </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}
        <article className="services">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck size={30} className="service_list-icon" />
              <p>Base du développement web (HTML5, CSS3, JavaScript et PHP)</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Databases with mySQL</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Frameworks : React, Next, Node Js, Express, Svelte</p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>Integration : Bootstrap, Tailwind, Material UI</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

export default Services;
