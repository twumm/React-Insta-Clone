import React from 'react'
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

export default CommentSection
