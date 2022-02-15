import React, { useState, useEffect } from "react";
import MoviesContainer from "./MoviesContainer.js";
import GenresContainer from "./GenresContainer.js";
import MovieSlider from "./MovieSlider.js";

function MainContainer() {
  const [genresArray, setGenresArray] = useState([]);
  const [genre, setGenre] = useState("");
  const [moviesArray, setMoviesArray] = useState([]);

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
  }

  const filteredMovies = moviesArray.filter((movie) =>
    movie.genres.includes(genre)
  );

  function onChangeSearch (searchTerm) {
    console.log(searchTerm)
  }

  // const searchMovies = filteredMovies.filter(movie => movie.title === searchTerm)

  return (
    <main className="main">
      <MovieSlider moviesArray={moviesArray} />
      {/* <main className="main"> */}
      <MoviesContainer filteredMovies={filteredMovies} onChangeSearch={onChangeSearch} />
      <GenresContainer
        genresArray={genresArray}
        onClickDisplayMovies={onClickDisplayMovies}
      />
    </main>
  );
}

export default MainContainer;
