import React from "react";

function CommentCard({ id, comment, handleDeleteComment }) {
  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <div>
        <h4 className="comment-username">USERNAME</h4>
        <p className="comment-content">{comment}</p>
        <p className="comment-movie">Movie</p>
      </div>
      <div className="comment-delete">
        <p onClick={handleDelete}>DELETE</p>
      </div>
    </div>
  );
}

export default CommentCard;
