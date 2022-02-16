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
    console.log("hello");
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

  let slides = [  ];


  const imgurlArr = filteredMovies.forEach((movies) => {
    slides.push(<img className="carousel-img" src={movies.posterUrl} alt="" />)
  });

  
  return (
    <div className="movie-container">
      {searchDisplay ? searchForm : null}
      <div className="carousel">
        <Carousel slides={slides} />
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
