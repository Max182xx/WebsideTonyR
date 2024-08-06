import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Slider.css";

function Slider() {
  const dataImage = [
    {
      id: 1,
      image: "../media/bjork.png",
      title: "Bjork",
      text: "bababaabb",
    },

    {
      id: 2,
      image: "../media/monica.png",
      title: "Monica",
      text: "bababaabb",
    },

    {
      id: 3,
      image: "../media/jack.png",
      title: "Jack",
      text: "bababaabb",
    },

    {
      id: 4,
      image: "../media/tornade.png",
      title: "Tornade",
      text: "bababaabb",
    },
  ];
  // Rendu du composant Carousel avec les propriétés spécifiées
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      interval={4000}
      showIndicators={false}
    >
      {dataImage.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt="" />
          <div className="overlay">
            <h2 className="overlay-title"> {slide.title}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider;
