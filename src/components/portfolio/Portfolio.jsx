import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projet1.jpg";
import IMG2 from "../../assets/inquiz-itor.jpg";
import IMG3 from "../../assets/you&me.jpg";
import IMG4 from "../../assets/zenego.png";
import IMG5 from "../../assets/weatherApp.png";
import IMG6 from "../../assets/dani.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title:
      "La maison jungle is a commercial site for indoor plants (current development).",
    github: "https://github.com",
    demo: "https://versel.com/.....",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "Inquiz'itors is a game/quiz that will test your general knowledge on different themes.",
    github: "https://github.com/ComicScrip/lyon-react-mars22-p2g5",
    demo: "https://inquizitor.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title:
      "You & Me is an application that allows you to test the compatibility of 2 people for love, friendship and work in a humorous way.",
    github: "https://github.com/QuintinJouanne/You-Me",
    demo: "https://u-n-me.netlify.app/themechoice",
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Zenego is an application for sophrologists, yoga teachers that allows the connection between practitioners and their patients.",
    github: "https://github.com/NycoChavanoud/atempo",
    demo: "https://atempo.vercel.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather App gives you the weather anytime,anywhere.",
    github: "https://github.com/Benjamin-Dervieux/weather-project",
    demo: "https://weather-project-theta.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title:
      "Danielle Desteucq-Roettger website, translator and interpretor (current development).",
    github: "https://github.com/Benjamin-Dervieux/Dani-website",
    demo: "https://danielle-desteucq.vercel.app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
