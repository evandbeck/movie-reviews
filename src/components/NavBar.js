import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
      <Link to="/" style={{textDecoration:"none"}}>
        <li className="navbar-elements" >Home</li>
      </Link>
      <Link to="/review" style={{textDecoration:"none"}}>
        <li className="navbar-elements">Review</li>
      </Link>
      <Link to="/profile" style={{textDecoration:"none"}}>
        <li className="navbar-elements">Profile</li>
      </Link>
    </div>
  );
}

export default NavBar;
