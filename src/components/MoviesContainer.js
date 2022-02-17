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
  handleDeleteComment
})
{
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
          <h4>{movies.title} </h4>
          <p>{movies.plot}</p>
        </div>
      </div>
      <div className="carousel-comment">
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
