import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";

import ProfileContainer from "./components/ProfileContainer";
import { Routes, Route, Link, Switch } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import HomeContainer from "./components/HomeContainer";

function App() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/comments")
    .then(resp => resp.json())
    .then(setComments)
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route exact path="/review">
          <MainContainer />
        </Route>
        <Route exact path="/profile">
          <ProfileContainer comments={comments} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
