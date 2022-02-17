import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="app-name">
        <li className="name-element">My Little Cinemas</li>
      </div>
      <div className="navBar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="navbar-elements">Home</li>
        </Link>
        <Link to="/review" style={{ textDecoration: "none" }}>
          <li className="navbar-elements">Review</li>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <li className="navbar-elements">Profile</li>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
