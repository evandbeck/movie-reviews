import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";

function MoviesContainer({
  filteredMovies,
  isGenreClicked,
  moviesArray,
  handleInfoDisplay
}) {

  // const displayMovieCards= filteredMovies.map(movie => {
  //   return (
  //     <MovieCard key={uuidv4()} {...movie} handleInfoDisplay={handleInfoDisplay} />
  //   )
  // })

  let slidesFilter = [];
  filteredMovies.forEach((movies) => {
    slidesFilter.push(
      <img
        className="carousel-img"
        src={movies.posterUrl}
        alt=""
        onClick={handleInfoDisplay}
      />
    );
  });

  let slidesAll = [];
  moviesArray.forEach((movies) => {
    slidesAll.push(
      <img
        className="carousel-img"
        src={movies.posterUrl}
        alt=""
        onClick={handleInfoDisplay}
        onChange={() => console.log(movies.id)}
      />
    );
  });

  return (
    <div className="movie-container">
      <div className="carousel">
        {isGenreClicked ? (
          <Carousel slides={slidesFilter} />
        ) : (
          <Carousel slides={slidesAll} moviesArray={moviesArray} />
        )}
        {/* <MovieSlider filteredMovies={filteredMovies} /> */}
      </div>
    </div>
  );
}

export default MoviesContainer;
