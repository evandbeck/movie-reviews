import React from "react";

function Artists({ artist, onClickDisplayTitles }) {
  function handleClick() {
    onClickDisplayTitles(artist)
  }

  return (
    <div>
      <li>
        <ul onClick={handleClick}>{artist}</ul>
      </li>
    </div>
  );
}

export default Artists;
