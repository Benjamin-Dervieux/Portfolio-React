import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/projet1.jpg";
import IMG2 from "../../assets/inquiz-itor.jpg";
import IMG3 from "../../assets/you&me.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "La maison jungle (En developpement)",
    github: "https://github.com",
    demo: "https://versel.com/.....",
  },
  {
    id: 2,
    image: IMG2,
    title: "Inquiz'itor, quiz game",
    github: "https://github.com",
    demo: "https://inquizitor.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Compatibility application",
    github: "https://github.com",
    demo: "https://u-n-me.netlify.app/themechoice",
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
