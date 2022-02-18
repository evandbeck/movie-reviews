import React, { useState } from "react";
import CommentCard from "./CommentCard.js";
import { v4 as uuidv4 } from "uuid";

function ProfileContainer({ comments, handleDeleteComment }) {
  const commentList = comments.map((comment) => (
    <CommentCard
      key={uuidv4()}
      {...comment}
      handleDeleteComment={handleDeleteComment}
    />
  ));

  return (
    <div className="profile-container">
      <div className="profile-information">
        {/* User Information */}
        <div className="profile-details">
          <h2>Dr. Woof</h2>
          <p>Joined: February 2022</p>
        </div>
        <div className="profile-picture">
          <img src="./dogcritic.jpeg" className="pro-pic"></img>
       
        </div>
        
        <div className="profile-details">
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus.
          </p>
          <div className="favorites-container">
          <h4>My Top Five Movies</h4>
          <li>
            <ul>Shrek</ul>
            <ul>Inception</ul>
            <ul>Social Network</ul>
            <ul>Pulp Fiction</ul>
            <ul>Looper</ul>
          </li>
        </div>
        </div>
      </div>
      <div className="content-container">
        <div className="comments-container">
          <h1 className="movie-header">Comment History</h1>
          {commentList}
          </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
