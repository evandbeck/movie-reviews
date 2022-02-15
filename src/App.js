import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";

import ProfileContainer from "./components/ProfileContainer";
import { Routes, Route, Link, Switch } from "react-router-dom";
import MainContainer from "./MainContainer";

function App() {


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainContainer />
        </Route>
        <Route exact path="/profile">
          <ProfileContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
