import React, {useState} from 'react';
import MovieCard from "./MovieCard.js"
import { v4 as uuidv4 } from "uuid";

function MoviesContainer({ filteredMovies, onChangeSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const displayMovieCards= filteredMovies.map(movie => {
    return (
      <MovieCard  key={uuidv4()} {...movie} />
    )
  })

  function handleSearch (e) {
    setSearchTerm(e.target.value)
    onChangeSearch(searchTerm)
  }

  return (
    <div className="movieContainer">
      <form>
        <label>Search: </label>
        <input type="text" value={searchTerm} onChange={handleSearch}></input>
      </form>
      {displayMovieCards}
    </div>
  )
}

export default MoviesContainer;