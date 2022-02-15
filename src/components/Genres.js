import React from "react";

function Genres({ genre, onClickDisplayMovies, handleSearchDisplay }) {
  function handleClick() {
    onClickDisplayMovies(genre)
    handleSearchDisplay()
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
