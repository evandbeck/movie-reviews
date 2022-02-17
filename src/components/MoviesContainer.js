import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";
import CommentCard from "./CommentCard";
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({
  filteredMovies,
  isGenreClicked,
  moviesArray,
  handleInfoDisplay,
  comments,
  movieId,
  handleUpdateComments,
  handleDeleteComment,
  genre,
}) {
  // const displayMovieCards= filteredMovies.map(movie => {
  //   return (
  //     <MovieCard key={uuidv4()} {...movie} handleInfoDisplay={handleInfoDisplay} />
  //   )
  // })

  // const filteredComments = comments.filter(
  //   (comment) => comment.movieId === movieId
  // );

  // const displayComments = filteredComments.map((comment) => {
  //   return (
  //     <CommentCard
  //       key={uuidv4()}
  //       {...comment}
  //       handleInfoDisplay={handleInfoDisplay}
  //       handleDeleteComment={handleDeleteComment}
  //     />
  //   );
  // });

  let slidesFilter = [];
  filteredMovies.forEach((movies) => {
    slidesFilter.push(
      <div className="carousel-display-container">
        <div className="carousel-details-container">
          <div className="carousel-img-container">
            <img className="carousel-img" src={movies.posterUrl} alt="" />
          </div>
          <div className="carousel-info">
            <span>
              <b> {movies.title}</b> {movies.year}
            </span>

            <em>
              <p>{movies.genres.join(" ")}</p>
            </em>
            <br></br>
            <p>{movies.plot}</p>

            <br></br>
       
            <p> <b>Director: </b>{movies.director}</p>
            <p> <b> Actors:</b> {movies.actors} </p>
          </div>
        </div>
        <div className="carousel-comment">
          {comments
            .filter((comment) => comment.movieId === movies.id)
            .map((comment) => {
              return (
                <CommentCard
                  key={uuidv4()}
                  {...comment}
                  handleInfoDisplay={handleInfoDisplay}
                  handleDeleteComment={handleDeleteComment}
                />
              );
            })}
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
        </div>
        {/* <div className="carousel-comment">
          {comments.filter((comment) => comment.movieId === movies.id).map((comment) => {
              return (
                <CommentCard
                  key={uuidv4()}
                  {...comment}
                  handleInfoDisplay={handleInfoDisplay}
                  handleDeleteComment={handleDeleteComment}
                />
              )
            })
          }
        </div> */}
      </div>
    );
  });

  return (
    <div className="movie-container">
      <div className="movie-header">
        <h2>Movie Review Selection</h2>
        <p className="movie-genre"> {genre}</p>
      </div>
      <div className="carousel">
        {isGenreClicked ? (
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
