import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment';

const CommentSection = ({ postTime, comments }) => {
  return (
    <div>
      <div className="comment-reaction">
        <img alt="Like" />
        <img alt="Comment" />
      </div>

      {
        comments
          .map((comment, index) => (
            <Comment
              key={index}
              username={comment.username}
              text={comment.text}
            />
          )
        )
      }

      <div>
        <p>{postTime}</p>
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      
    </div>
  )
}

CommentSection.propTypes = {
  postTime: PropTypes.string,
  comments: PropTypes.array,
}

export default CommentSection
