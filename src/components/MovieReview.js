import React, {useState} from 'react'

function MovieReview({ handleUpdateComments, movieId, commentsArray }) {
    const [reviewFormInput, setReviewFormInput] = useState("")

    function handleSubmitReview (e) {
        e.preventDefault();
        // Update State
        const newComment = {comment: reviewFormInput, commentId: movieId}
        handleUpdateComments(newComment)
        // Update Database
        fetch("http://localhost:3000/comments", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newComment)
        })
    }

    const filteredComments

  return (
    <div>
        <p>Leave a comment!</p>
        <form onSubmit={handleSubmitReview}>
            <input type="text" value={reviewFormInput} onChange={(e) => setReviewFormInput(e.target.value)}></input>
            <button>Submit!</button>
        </form>
        <p>{reviewFormInput}</p>
        <p></p>
    </div>
  )
}

export default MovieReview