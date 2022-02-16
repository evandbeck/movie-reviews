import React from "react";

function CommentCard({ id, comment, handleDeleteComment, title }) {

  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <div>
        <h4 className="comment-username">USERNAME</h4>
        <p className="comment-content">{comment}</p>
        <p className="comment-movie">{title}</p>
      </div>
      <div className="comment-delete">
        <img src="./trash.png" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CommentCard;
