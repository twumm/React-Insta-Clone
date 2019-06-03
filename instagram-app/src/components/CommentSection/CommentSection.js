import React from 'react'
import Comment from './Comment';

const CommentSection = ({ comments }) => {
  return (
    <div>
      <div className="comment-reaction">
        <img alt="Like" />
        <img alt="Comment" />
      </div>
      {
        comments
          .map(comment => (
            <Comment
              key={comment.id}
              username={comment.username}
              text={comment.text}
            />
          )
        )
      }
      
    </div>
  )
}

export default CommentSection
