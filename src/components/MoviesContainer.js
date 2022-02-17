import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard.js";
import { v4 as uuidv4 } from "uuid";
import MovieReview from "./MovieReview.js";
import MovieSlider from "./MovieSlider.js";
import { Carousel } from "3d-react-carousal";

function MoviesContainer({
  filteredMovies,
  onChangeSearch,
  searchDisplay,
  searchTerm,
  setSearchTerm,
  comments,
  setComments,
  handleDeleteComment,
  isGenreClicked,
  moviesArray,
}) {
  const [movieReviewForm, setMovieReviewForm] = useState(false);
  const [movieId, setMovieId] = useState("");

  // const displayMovieCards= filteredMovies.map(movie => {
  //   return (
  //     <MovieCard key={uuidv4()} {...movie} handleInfoDisplay={handleInfoDisplay} />
  //   )
  // })

  function handleSearch(e) {
    setSearchTerm(e.target.value);
    onChangeSearch(searchTerm);
  }

  function handleInfoDisplay(id) {
    setMovieId(id);
    setMovieReviewForm(true);
  }

  function handleUpdateComments(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  const searchForm = (
    <form className="search-form">
      <label>Search: </label>
      <input type="text" value={searchTerm} onChange={handleSearch}></input>
    </form>
  );

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
  console.log(moviesArray);

  let slidesAll = [];
  moviesArray.forEach((movies) => {
    slidesAll.push(
      <img
        className="carousel-img"
        src={movies.posterUrl}
        alt=""
        onClick={handleInfoDisplay}
      />
    );
  });

  return (
    <div className="movie-container">
      {searchDisplay ? searchForm : null}
      <div className="carousel">
        {isGenreClicked ? (
          <Carousel slides={slidesFilter} />
        ) : (
          <Carousel slides={slidesAll} />
        )}
        {/* <MovieSlider filteredMovies={filteredMovies} /> */}
      </div>

      {movieReviewForm ? (
        <MovieReview
          comments={comments}
          movieId={movieId}
          handleUpdateComments={handleUpdateComments}
          handleDeleteComment={handleDeleteComment}
        />
      ) : null}
      {/* {displayMovieCards} */}
    </div>
  );
}

export default MoviesContainer;
