import React from 'react'
import { v4 as uuidv4 } from "uuid";
import MoviePoster from "./MoviePoster.js";

function MovieSlider({ moviesArray }) {
    const moviePosters = moviesArray.map(movie => <MoviePoster key={uuidv4()} {...movie} />)

  return (
    <div>
        {moviePosters}
    </div>
  )
}

export default MovieSlider