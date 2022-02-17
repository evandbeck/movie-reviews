import React from "react";

function CommentCard({ id, comment, movieTitle, handleDeleteComment }) {
  function handleDelete() {
    handleDeleteComment(id);
  }

  return (
    <div className="comment-card">
      <div className="profile-comment">
        <div className="profile-pic-container">
          <img src="./dogcritic.jpeg" className="pro-pic2 emoji"></img>
        </div>
        <div>
          <div className="comment-tophalf">
            <div>
              <h5 className="comment-username">Dr.Woof</h5>
              <br></br>
              <p className="comment-movie">{movieTitle}</p>
              <p className="comment-content">{comment}</p>
            </div>
            <div className="comment-delete">
              <p className="emoji" onClick={() => handleDelete()}>
                🚮
              </p>
            </div>
          </div>
          <div className="comment-icons">
            <ul className="emoji">❤️</ul>
            <ul className="emoji">📫</ul>
            <ul className="emoji">💭</ul>
            <ul className="emoji">👯‍♀️</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
