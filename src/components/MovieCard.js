import React from "react";

function MovieCard({ title, year, runtime, genres, director, actors, plot, posterUrl }) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img src={posterUrl}></img>
      <p>{director}</p>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
