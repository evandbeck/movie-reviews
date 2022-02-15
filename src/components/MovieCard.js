import React from "react";

function MovieCard({ id, title, year, runtime, genres, director, actors, plot, posterUrl, handleInfoDisplay }) {

  return (
    <div className="movie-card" onClick={() => handleInfoDisplay(id)}>
      <h3>{title}</h3>
      <img src={posterUrl} alt="" className="review-img"></img>
      <p>{director}</p>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
