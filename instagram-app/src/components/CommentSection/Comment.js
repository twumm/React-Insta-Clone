import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.css'

const Comment = ({ comment }) => {
  return (
    <div className="user-comment">
      {/* <h6>{comment.username}</h6>
      <p>{comment.text}</p> */}
      <p className="comment-user">
        {comment.username}
        <span className="comment-text">
          {comment.text}
        </span>
      </p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
}

export default Comment
