import React from 'react';
import MovieCard from "./MovieCard.js"
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({ filteredMovies }) {

  const displayMovieCards= filteredMovies.map(movie => {
    return (
      <MovieCard  key={uuidv4()} {...movie} />
    )
  })

  return (
    <div className="movieContainer">
      {displayMovieCards}
    </div>
  )
}

export default MoviesContainer;