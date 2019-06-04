import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import Comment from './Comment';
import chat from '../../assets/img/chat.svg'
import like from '../../assets/img/heart.svg'

const CommentSection = ({ likes, postTime, comments }) => {
  return (
    <div className="comment-section-container">
      <div className="comment-reaction">
        <div>
          <img src={like} alt="Like" width={25} />
        </div>
        <div>
          <img src={chat} alt="Comment" width={25} />
        </div>
      </div>

      <div className="post-like">
        <a href="same">{likes} likes</a>
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

      <div className="post-time">
        <a href="#4">{moment(postTime, "MMMM Do YYYY, h:mm:ss a").fromNow()}</a>
      </div>
      
      <div className="add-comment-section">
        <input
          type="text"
          placeholder="Add a comment..."
        />
        <button
          className="post-button"
        >Post</button>
      </div>
      
    </div>
  )
}

CommentSection.propTypes = {
  postTime: PropTypes.string,
  comments: PropTypes.array,
}

export default CommentSection
