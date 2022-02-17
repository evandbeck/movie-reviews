import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer.js";
import GenresContainer from "./GenresContainer.js";
import MovieReview from "./MovieReview.js";

function MainContainer({ comments, setComments, handleDeleteComment }) {
  const [genresArray, setGenresArray] = useState([]);
  const [genre, setGenre] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState(false);

  const [isGenreClicked, setIsGenreClicked] = useState(false);

  // const [movieReviewForm, setMovieReviewForm] = useState(true);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/genres")
      .then((resp) => resp.json())
      .then(setGenresArray);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  function onClickDisplayMovies(specificGenre) {
    setGenre(specificGenre);
    setIsGenreClicked(true);
  }

  const filteredMovies = moviesArray.filter((movie) =>
    movie.genres.includes(genre)
  );

  function handleSearchDisplay() {
    setSearchDisplay(true);
  }

  function handleInfoDisplay(id) {
    setMovieId(id);
  }

  function handleUpdateComments(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  return (
    <main className="main">
      {/* <main className="main"> */}
      <GenresContainer
        genresArray={genresArray}
        onClickDisplayMovies={onClickDisplayMovies}
        handleSearchDisplay={handleSearchDisplay}
      />
      <MoviesContainer
        filteredMovies={filteredMovies}
        searchDisplay={searchDisplay}
        comments={comments}
        setComments={setComments}
        handleUpdateComments={handleUpdateComments}
        handleDeleteComment={handleDeleteComment}
        isGenreClicked={isGenreClicked}
        moviesArray={moviesArray}
        handleInfoDisplay={handleInfoDisplay}
        // Review Form Integration
        genre={genre}
      />
      <MovieReview
          moviesArray={moviesArray}
          comments={comments}
          movieId={movieId}
          handleUpdateComments={handleUpdateComments}
          handleDeleteComment={handleDeleteComment}
       
      />
    </main>
  );
}

export default MainContainer;
