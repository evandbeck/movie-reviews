import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HomeCard({ posterUrl, plot, title, year, genres }) {
  const [showMore, setShowMore] = useState(false);
  const [plotDisplay, setPlotDisplay] = useState(true);

  function displayShowMore() {
    setShowMore(true);
  }

  function hideShowMore() {
    setShowMore(false);
    setPlotDisplay(false);
  }

  function handlePlot() {
    setPlotDisplay((prev) => !prev);
  }

  const movieImage = (
    <img
      onClick={handlePlot}
      onMouseLeave={hideShowMore}
      onMouseEnter={displayShowMore}
      className="img-home"
      src={posterUrl}
      alt=""
      onError={(event) => (event.target.style.display = "none")}
    />
  );

  const moviePlot = (
    <div
      onClick={handlePlot}
      onMouseLeave={hideShowMore}
      className="img-home-overlay"
    >
      <h4>{title}</h4>
      <p> {plot}</p>
    </div>
  );

  function handleImageError(event) {
    event.target.style.display = "none";
    setPlotDisplay(false);
  }

  const genreString = genres.join(" ");

  const imgOverlay = (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      whileTap={{
        scale: 0.8,
        transition: { duration: 0.3 },
      }}
      className="image"
      id="postimage"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: -10, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <img
        onError={handleImageError}
        className="image__img"
        src={posterUrl}
        alt=""
      />
      <div className="image__overlay image__overlay--blur">
        <h4 className="image__title">{title}</h4>
        <p className="image__description">{year}</p>
        <p className="image__description">{genreString}</p>
      </div>
    </motion.div>
  );

  return <div>{plotDisplay ? imgOverlay : null}</div>;
}

export default HomeCard;
