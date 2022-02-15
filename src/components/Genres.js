import React from "react";

function Genres({ genre, onClickDisplayMovies }) {
  function handleClick() {
    onClickDisplayMovies(genre)
  }

  return (
    <div>
      <li>
        <ul onClick={handleClick}>{genre}</ul>
      </li>
    </div>
  );
}

export default Genres;
