import React, {useState, useEffect} from 'react';
import MovieCard from "./MovieCard.js"
import { v4 as uuidv4 } from "uuid";
import MovieReview from "./MovieReview.js"

function MoviesContainer({ filteredMovies, onChangeSearch, searchDisplay, searchTerm, setSearchTerm, comments, setComments }) {
  const [movieReviewForm, setMovieReviewForm] = useState(false)
  const [movieId, setMovieId] = useState("")

  const displayMovieCards= filteredMovies.map(movie => {
    return (
      <MovieCard key={uuidv4()} {...movie} handleInfoDisplay={handleInfoDisplay} />
    )
  })

  function handleSearch (e) {
    setSearchTerm(e.target.value)
    onChangeSearch(searchTerm)
  }

  function handleInfoDisplay (id) {
    setMovieId(id)
    setMovieReviewForm(true)
  }

  function handleUpdateComments (newComment) {
    setComments(comments => [...comments, newComment])
  }

  const searchForm = (<form className='search-form'>
                       <label>Search: </label>
                       <input type="text" value={searchTerm} onChange={handleSearch}></input>
                      </form>
                     )

  
  return (
    <div className="movie-container">
      {searchDisplay ? searchForm : null }
      {movieReviewForm ? <MovieReview comments={comments} movieId={movieId} handleUpdateComments={handleUpdateComments} /> : null}
      {displayMovieCards}
    </div>
  )
}

export default MoviesContainer;