import React from 'react';
import AlbumCard from "./AlbumCard.js"
import { v4 as uuidv4 } from "uuid";

function AlbumsContainer({displayTitle}) {

  const displayAlbumCards= displayTitle.map(title => {
    return (
      <AlbumCard  key={uuidv4()} {...title} />
    )
  })

  return (
    <div className="albumsContainer">
      {displayAlbumCards}
    </div>
  )
}

export default AlbumsContainer;