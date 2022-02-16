import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeCard from "./HomeCard";

function HomeContainer() {
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  const displayTitles = moviesArray.map((movie) => {
    return <HomeCard key={uuidv4()} {...movie} />;
  });

  return <div className="home-container">{displayTitles}</div>;
}

export default HomeContainer;
