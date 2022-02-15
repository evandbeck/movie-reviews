import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function HomeContainer() {
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  const displayTitles = moviesArray.map((movie) => {
    return (
      <img
        className="img-home"
        src={movie.posterUrl}
        alt=""
        key={uuidv4()}
        onError={(event) => (event.target.style.display = "none")}
      />
    );
  });

  return <div className="home-container">{displayTitles}</div>;
}

export default HomeContainer;
