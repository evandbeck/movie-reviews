import React from 'react';
import MovieCard from "./MovieCard.js"
import { v4 as uuidv4 } from "uuid";

function MoviesContainer() {

  // const displayMovieCards= displayTitle.map(title => {
  //   return (
  //     <MovieCard  key={uuidv4()} {...title} />
  //   )
  // })

  return (
    <div className="movieContainer">
    </div>
  )
}

export default MoviesContainer;