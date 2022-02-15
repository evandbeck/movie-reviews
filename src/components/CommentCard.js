import React from "react";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment}</p>
    </div>
  );
}

export default CommentCard;
