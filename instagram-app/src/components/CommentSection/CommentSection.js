import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import Comment from './Comment';
import chat from '../../assets/img/chat.svg'
import like from '../../assets/img/heart.svg'

const CommentSection = ({ postTime, comments }) => {
  return (
    <div>
      <div className="comment-reaction">
        <img src={like} alt="Like" width={30} />
        <img src={chat} alt="Comment" width={30} />
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
        <p>{moment().startOf('day').fromNow()}</p>
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
