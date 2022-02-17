import React from "react";

function CommentCard({ id, comment, handleDeleteComment, title }) {
  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <div className="profile-comment">
        <div className="profile-pic">
          <p>😀</p>
        </div>
        <div>
          <div className="comment-tophalf">
            <div>
              <h5 className="comment-username">Evan Beck</h5>
              <p className="comment-movie">{title}</p>
              <br></br>
              <p className="comment-content">{comment}</p>
            </div>
            <div className="comment-delete">
              <p>🚮</p>
            </div>
          </div>
          <div className="comment-icons">
            <ul> ❤️</ul>
            <ul>📫</ul>
            <ul>💭</ul>
            <ul>👯‍♀️</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
