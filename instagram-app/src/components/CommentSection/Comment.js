import React from 'react'
import PropTypes from 'prop-types'
import './CommentSection.css'

const Comment = ({ comment, commentIndex, postIndex, deleteCommentHandler }) => {
  const onDeleteComment = (event, postIndex, commentIndex) => {
    deleteCommentHandler(event, postIndex, commentIndex)
  }

  return (
    <div className="user-comment">
      <p className="comment-user">
        {comment.username}
        <span className="comment-text">
          {comment.text}
        </span>
      </p>
      <p
        className="comment-delete"
        onClick={(event) => onDeleteComment(event, postIndex, commentIndex)}
      >
        x
      </p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
}

export default Comment
