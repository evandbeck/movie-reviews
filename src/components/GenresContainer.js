import React from "react";
import { v4 as uuidv4 } from "uuid";
import Genres from "./Genres";

function GenresContainer({
  genresArray,
  onClickDisplayMovies,
  handleSearchDisplay,
}) {
  // let filteredArtistList = [];

  // artistArray.map((artist) => filteredArtistList.push(artist.artist));

  // const unqiueArray = filteredArtistList.filter(function (value, index, self) {
  //   return self.indexOf(value) === index;
  // });

  const genresArrayAlpha = genresArray.sort();

  console.log(genresArrayAlpha);

  const genreList = genresArrayAlpha.map((genre) => (
    <Genres
      key={uuidv4()}
      genre={genre}
      handleSearchDisplay={handleSearchDisplay}
      onClickDisplayMovies={onClickDisplayMovies}
    />
  ));

  return <div className="genres-container">{genreList}</div>;
}

export default GenresContainer;
