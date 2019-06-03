import React from 'react'

const Comment = ({ username, text }) => {
  return (
    <div>
      <h6>{username}</h6>
      <p>{text}</p>
    </div>
  )
}

export default Comment
