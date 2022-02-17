import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import CommentCard from "./CommentCard";

function MoviesContainer({
  filteredMovies,
  isGenreClicked,
  moviesArray,
  handleInfoDisplay,
}) {
  // const displayMovieCards= filteredMovies.map(movie => {
  //   return (
  //     <MovieCard key={uuidv4()} {...movie} handleInfoDisplay={handleInfoDisplay} />
  //   )
  // })

  let slidesFilter = [];
  filteredMovies.forEach((movies) => {
    slidesFilter.push(
      <div className="carousel-display-container">
        <div className="carousel-info">
          <img className="carousel-img" src={movies.posterUrl} alt="" />
          <h4>{movies.title} </h4>
          <p>{movies.plot}</p>
          <button onClick={handleInfoDisplay}>See Reviews</button>
        </div>
        <div>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    );
  });

  let slidesAll = [];
  moviesArray.forEach((movies) => {
    slidesAll.push(
      <div className="carousel-display-container">
        <div className="carousel-details-container">
          <div className="carousel-img-container">
          <img className="carousel-img" src={movies.posterUrl} alt="" />
          </div>
          <div className="carousel-info">
            <h4>{movies.title} </h4>
            <p>{movies.plot}</p>
          </div>
        </div>
        <div className="carousel-comment">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    );
  });

  return (
    <div className="movie-container">
      <div className="carousel">
        {false ? (
          <Carousel slides={slidesFilter} />
        ) : (
          <Carousel slides={slidesAll} />
        )}
        {/* <MovieSlider filteredMovies={filteredMovies} /> */}
      </div>
    </div>
  );
}

export default MoviesContainer;
