import React from "react";
import { v4 as uuidv4 } from "uuid";
import MoviePoster from "./MoviePoster.js";
import InfiniteCarousel from "react-leaf-carousel";

function MovieSlider({ moviesArray }) {
  const moviePosters = moviesArray.map((movie) => {
    return <MoviePoster key={uuidv4()} posterUrl={movie.posterUrl} />;
  });

  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {moviePosters}
    </InfiniteCarousel>
  );
}

export default MovieSlider;
