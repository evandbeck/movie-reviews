import React, {useState, useEffect} from 'react';
import MovieCard from "./MovieCard.js"
import { v4 as uuidv4 } from "uuid";
import MovieReview from "./MovieReview.js"

function MoviesContainer({ filteredMovies, onChangeSearch, searchDisplay, searchTerm, setSearchTerm }) {
  const [movieReviewForm, setMovieReviewForm] = useState(false)
  const [commentsArray, setCommentsArray] = useState([])
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
    setCommentsArray(commentsArray => [...commentsArray, newComment])
  }

  useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then(resp => resp.json())
    .then(setCommentsArray)
  }, [])

  const searchForm = (<form>
                       <label>Search: </label>
                       <input type="text" value={searchTerm} onChange={handleSearch}></input>
                      </form>
                     )

  

  return (
    <div className="movieContainer">
      {searchDisplay ? searchForm : null }
      {movieReviewForm ? <MovieReview commentsArray={commentsArray} movieId={movieId} handleUpdateComments={handleUpdateComments} /> : null}
      {displayMovieCards}
    </div>
  )
}

export default MoviesContainer;