import React, {useState} from 'react'
import CommentCard from "./CommentCard.js"
import { v4 as uuidv4 } from "uuid";

function ProfileContainer({ comments }) {
  const [userName, setUserName] = useState("")

  const commentList = comments.map(comment => <CommentCard key={uuidv4()} {...comment} />)

  function handleUserInput (e) {
    setUserName(e.target.value)
  }

  return (
    <div>
      {/* User Information */}
      <form>
        <label>Username: </label>
        <input type="text" value={userName} onChange={handleUserInput}></input>
      </form>
      <p>{userName}</p>
      {commentList}
    </div>
  )
}

export default ProfileContainer