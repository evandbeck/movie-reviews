import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="profile">
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default UserProfile;
