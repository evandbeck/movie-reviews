import React from "react";
import { v4 as uuidv4 } from "uuid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MovieSlider({ id, posterUrl, handleInfoDisplay }) {
  function handleClick() {
    console.log("hello");
  }
  return (
    <div className="carousel-container" onClick={() => handleInfoDisplay(id)}>
      <img src={posterUrl} className=".carousel-img" />
    </div>
  );
}

export default MovieSlider;
