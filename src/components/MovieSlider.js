import React from "react";
import { v4 as uuidv4 } from "uuid";
import MoviePoster from "./MoviePoster.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function MovieSlider({ moviesArray }) {
  console.log(moviesArray);
  const movieImg = moviesArray.map((movie) => {
    console.log(movie.posterUrl);
    return (
      <div className="carousel-container">
        <img src={movie.posterUrl} className=".carousel-img" />
        <p className="legend">Legend 1</p>
      </div>
    );
  });

  return <Carousel>{movieImg}</Carousel>;
}

export default MovieSlider;
