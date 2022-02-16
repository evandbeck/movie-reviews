import React from "react";
import { v4 as uuidv4 } from "uuid";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "3d-react-carousal";

function MovieSlider({ filteredMovies }) {
  console.log(filteredMovies);

  const imgurlArr = filteredMovies.map((movies) => {
    return <img src={movies.posterUrl} alt="" />;
  });

  console.log(imgurlArr);

  let slides = [
    <img src="https://picsum.photos/800/300/?random" alt="1" />,
    <img src="https://picsum.photos/800/301/?random" alt="2" />,
    <img src="https://picsum.photos/800/302/?random" alt="3" />,
    <img src="https://picsum.photos/800/303/?random" alt="4" />,
    <img src="https://picsum.photos/800/304/?random" alt="5" />,
  ];

  return (
    // <div className="carousel-container" onClick={() => handleInfoDisplay(id)}>
    //   <img src={posterUrl} className=".carousel-img" />
    // </div>

    <Carousel slides={slides} />
  );
}

export default MovieSlider;
