import React from "react";

function CommentCard({ id, comment, handleDeleteComment, title }) {
  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <div>
        <h5 className="comment-username">Evan Beck</h5>
        <p className="comment-movie">{title}</p>
        <br></br>
        <p className="comment-content">{comment}</p>
      </div>
      <div className="comment-delete">
        <img src="./trash.png" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CommentCard;
