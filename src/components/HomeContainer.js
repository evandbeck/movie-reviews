import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import HomeCard from "./HomeCard";
import { motion } from "framer-motion";

function HomeContainer() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((resp) => resp.json())
      .then(setMoviesArray);
  }, []);

  const filterTitles = moviesArray.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const displayTitles = filterTitles.map((movie) => {
    return <HomeCard key={uuidv4()} {...movie} />;
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="home-container">
      <motion.form
        className="home-search"
        initial={{ y: -60 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="search movie by title"
          className="search text-center"
        ></input>
      </motion.form>
      <motion.div
        className="home-movie-container"
        initial={{ y: -60 }}
        animate={{ y: -15 }}
        transition={{ type: "spring", stiffness: 250 }}
      >
        {displayTitles}
      </motion.div>
    </div>
  );
}

export default HomeContainer;
