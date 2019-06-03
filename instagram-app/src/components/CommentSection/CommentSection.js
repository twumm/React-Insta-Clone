import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
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
        <p>{moment(postTime).startOf('day').fromNow()} ago</p>
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
