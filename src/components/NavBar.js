import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/review">Review</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default NavBar;
