import React from "react";
// import { motion } from "framer-motion";

function Genres({ genre, onClickDisplayMovies, handleSearchDisplay }) {
  function handleClick() {
    onClickDisplayMovies(genre);
    handleSearchDisplay();
  }

  return (
    <div>
      <ul className="genre-element" onClick={handleClick}>{genre}</ul>
      {/* <motion.ul
        whileHover={{
          scale: 1.25,
          originX: 0,
          textShadown: "0px 0px 100px rgb(255,0,0)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="genre-element"
        onClick={handleClick}
      >
        {genre}
      </motion.ul> */}
    </div>
  );
}

export default Genres;
