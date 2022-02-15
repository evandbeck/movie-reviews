import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import MoviesContainer from "./components/MoviesContainer.js";
import GenresContainer from "./components/GenresContainer.js";

function App() {
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

  // const movieTest = moviesArray.genres.map(movie => movie.genres.filter(movieGenre => movieGenre === genre))
  // console.log(movieTest)

  const filteredMovies = moviesArray.filter(movie => movie.genres.map(movieGenre => movieGenre === genre));
  console.log(filteredMovies);

  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <MoviesContainer />
        <GenresContainer
          genresArray={genresArray}
          onClickDisplayMovies={onClickDisplayMovies}
        />
      </main>
    </div>
  );
}

export default App;
