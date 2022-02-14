import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import AlbumsContainer from "./components/AlbumsContainer.js";
import ArtistsContainer from "./components/ArtistsContainer.js";


function App() {
  const [artistArray, setArtistArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/songs")
    .then(resp => resp.json())
    .then(setArtistArray)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <main className="main">
        <AlbumsContainer />
        <ArtistsContainer artistArray={artistArray} />
      </main>
    </div>
  );
}

export default App;
