import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CommentCard from "./CommentCard";

function MovieReview({ handleUpdateComments, movieId, comments }) {
  const [reviewFormInput, setReviewFormInput] = useState("");

  function handleSubmitReview(e) {
    e.preventDefault();
    // Update State
    const newComment = { comment: reviewFormInput, commentId: movieId };
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
    (comment) => comment.commentId === movieId
  );

  const displayComments = filteredComments.map((comment) => {
    return <CommentCard key={uuidv4()} {...comment} />;
  });

  return (
    <div className="comment-container">
      <p>Leave a comment!</p>
      <form onSubmit={handleSubmitReview}>
        <input
          type="text"
          value={reviewFormInput}
          onChange={(e) => setReviewFormInput(e.target.value)}
        ></input>
        <button>Submit!</button>
      </form>
      <p>{reviewFormInput}</p>
      {displayComments}
    </div>
  );
}

export default MovieReview;
