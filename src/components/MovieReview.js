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
    const filteredMovieObj = moviesArray.filter(movie => movie.title.toLowerCase() === reviewTitleInput.toLowerCase())
    console.log(filteredMovieObj.id)
    // Update State
    const newComment = { comment: reviewFormInput, movieId: filteredMovieObj.id };
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
      <p>Leave a comment!</p>
      <form onSubmit={handleSubmitReview}>
      <lable>Title:</lable>
      <input
          type="text"
          value={reviewTitleInput}
          onChange={(e) => setReviewTitleInput(e.target.value)}
        ></input>
        <lable>Review:</lable>
        <input
          type="text"
          value={reviewFormInput}
          onChange={(e) => setReviewFormInput(e.target.value)}
        ></input>
        <button>Submit!</button>
      </form>
      <p>{reviewFormInput}</p>
    </div>
  );
}

export default MovieReview;
