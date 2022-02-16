import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function HomeCard({ posterUrl, plot, title }) {
  const [showMore, setShowMore] = useState(false);
  const [plotDisplay, setPlotDisplay] = useState(false);

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
    <div onClick={handlePlot} onMouseLeave={hideShowMore} className="home-plot">
      <h4>{title}</h4>
      <p> {plot}</p>
    </div>
  );

  return (
    <div className="home-movies-container">
      {plotDisplay ? moviePlot : movieImage}
      {showMore ? <p className="hover-show">Show More</p> : null}
    </div>
  );
}

export default HomeCard;
