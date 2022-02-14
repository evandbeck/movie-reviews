import React from "react";

function AlbumCard({ title, artist, year, img_url }) {
  return (
    <div className="album-card">
      <h3>{title}</h3>
      <img src={img_url}></img>
      <p>{artist}</p>
      <p>{year}</p>
    </div>
  );
}

export default AlbumCard;
