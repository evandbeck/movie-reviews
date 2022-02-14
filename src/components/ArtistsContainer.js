import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Genre from "./Artists";

function ArtistsContainer({ artistArray }) {

  const artistList = artistArray.map(artist => <Genre key={uuidv4()} {...artist} />)

  constfilteredArtistList = artistArray.map

  return (
    <div>
      {artistList}
    </div>
  )
}

export default ArtistsContainer;