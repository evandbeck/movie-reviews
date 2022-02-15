import React from "react";

function MovieCard({ title, artist, year, img_url }) {
  return (
    <div className="movie-card">
      <h3>{title}</h3>
      <img src={img_url}></img>
      <p>{artist}</p>
      <p>{year}</p>
    </div>
  );
}

export default MovieCard;
