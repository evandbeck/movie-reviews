import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import AlbumsContainer from "./components/AlbumsContainer.js";
import ArtistsContainer from "./components/ArtistsContainer.js";
import SpotifyApp from "./components/SpotifyApp";

function App() {
  const [artistArray, setArtistArray] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((resp) => resp.json())
      .then(setArtistArray);
  }, []);

  const displayTitle = artistArray.filter((artist) => artist.artist === title);

  function onClickDisplayTitles(clickedArtist) {
    setTitle(clickedArtist);
  }

  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <AlbumsContainer displayTitle={displayTitle} />
        <ArtistsContainer
          artistArray={artistArray}
          onClickDisplayTitles={onClickDisplayTitles}
        />
      </main>
    </div>
  );
}

export default App;
