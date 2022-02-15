import React from "react";
import { v4 as uuidv4 } from "uuid";
import Genres from "./Genres";

function GenresContainer({ genresArray, onClickDisplayMovies }) {
  // let filteredArtistList = [];

  // artistArray.map((artist) => filteredArtistList.push(artist.artist));

  // const unqiueArray = filteredArtistList.filter(function (value, index, self) {
  //   return self.indexOf(value) === index;
  // });

  const genreList = genresArray.map((genre) => (
    <Genres key={uuidv4()}  genre={genre} onClickDisplayMovies={onClickDisplayMovies}/>
  ));


  return (
      <div className="genres-container"> 
        {genreList}
      </div>)
}

export default GenresContainer;
