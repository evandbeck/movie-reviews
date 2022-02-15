import React from "react";

function MoviePoster({ posterUrl }) {
  return (
    <div>
      <img
        alt=""
        src={posterUrl}
        onError={(event) => (event.target.style.display = "none")}
      />
    </div>
  );
}

export default MoviePoster;
