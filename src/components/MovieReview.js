import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";

function MovieReview({
  handleUpdateComments,
  moviesArray,
  movieId,
  comments,
  handleDeleteComment,
}) {
  const [reviewTitleInput, setReviewTitleInput] = useState("");
  const [reviewFormInput, setReviewFormInput] = useState("");

  function handleSubmitReview(e) {
    e.preventDefault();
    const filteredMovieObj = moviesArray.filter(
      (movie) => movie.title.toLowerCase() === reviewTitleInput.toLowerCase()
    );

    // Update State
    const newComment = {
      comment: reviewFormInput,
      movieTitle: filteredMovieObj[0]["title"],
      movieId: filteredMovieObj[0]["id"],
    };
    handleUpdateComments(newComment);
    // Update Database
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
  }

  const filteredComments = comments.filter(
    (comment) => comment.movieId === movieId
  );

  const displayComments = filteredComments.map((comment) => {
    return (
      <CommentCard
        key={uuidv4()}
        {...comment}
        handleDeleteComment={handleDeleteComment}
      />
    );
  });

  // const filteredMovieObj = moviesArray.filter(movie => movie.title.toLowerCase() === reviewTitleInput.toLowerCase())
  // console.log(filteredMovieObj)

  return (
    <div className="comment-container">
      <h3 className="comment-element">My Little Critque</h3>
      <form onSubmit={handleSubmitReview} className="comment-form">
        <lable className="comment-element">Title:</lable>
        <input
          className="search comment-element"
          type="text"
          value={reviewTitleInput}
          onChange={(e) => setReviewTitleInput(e.target.value)}
          placeholder="Movie Title"
        ></input>
        <lable className="comment-element">Review:</lable>
        <textarea
          className="review-input comment-element"
          type="text"
          rows="6"
          cols="50"
          value={reviewFormInput}
          onChange={(e) => setReviewFormInput(e.target.value)}
          placeholder="Let us know what you"
        ></textarea>
        <button className="comment-btn">Submit!</button>
      </form>
      {/* <p>{reviewFormInput}</p> */}
    </div>
  );
}

export default MovieReview;
