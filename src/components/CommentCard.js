import React from "react";

function CommentCard({ id, comment, handleDeleteComment }) {
  console.log(id);
  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <p>USERNAME</p>
      <p>{comment}</p>
      <p onClick={handleDelete}>DELETE</p>
    </div>
  );
}

export default CommentCard;
