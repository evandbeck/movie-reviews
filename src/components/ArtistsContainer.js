import React from "react";
import { v4 as uuidv4 } from "uuid";
import Artists from "./Artists";

function ArtistsContainer({ artistArray, onClickDisplayTitles }) {
  let filteredArtistList = [];

  artistArray.map((artist) => filteredArtistList.push(artist.artist));

  const unqiueArray = filteredArtistList.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });

  const artistList = unqiueArray.map((artist) => (
    <Artists key={uuidv4()}  artist={artist} onClickDisplayTitles={onClickDisplayTitles}/>
  ));

  return (
      <div className="artists-container"> 


        {artistList}
      
      </div>)
}

export default ArtistsContainer;
