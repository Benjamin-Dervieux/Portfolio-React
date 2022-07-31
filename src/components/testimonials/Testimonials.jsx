import React from "react";
import "./testimonials.css";
import Cece from "../../assets/cece.jpg";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Cece,
    name: "Célia Röttger",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.",
  },
  {
    id: 2,
    image: Avatar1,
    name: "Ashlee Curry",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.",
  },
  {
    id: 3,
    image: Avatar2,
    name: "Simon Durant",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.",
  },
  {
    id: 4,
    image: Avatar3,
    name: "Rayane Bourach",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti iure vitae fugit atque assumenda unde, fugiat officiis eafuga saepe! Facilis necessitatibus modi magnam dolorem! Error sitpossimus quisquam.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt="avatar one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
