import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import Comment from './Comment';
import chat from '../../assets/img/chat.svg'
import like from '../../assets/img/heart.svg'
import { formatNumber } from '../../helpers/formatNumber';

const CommentSection = ({ likes, postTime, comments, newComment, postIndex, addCommentInputChangeHandler, addNewCommentHandler, likePostHandler, deleteCommentHandler }) => {
  const onCommentInputChange = (event) => {
    addCommentInputChangeHandler(event);
  }

  const onAddNewComment = (event, postIndex) => {
    addNewCommentHandler(event, postIndex);
  }

  const onLikePost = (event, postIndex) => {
    likePostHandler(event, postIndex);
  }
  
  return (
    <div className="comment-section-container">
      <div className="comment-reaction">
        <div>
          <img src={like} alt="Like" width={25} onClick={(event) => onLikePost(event, postIndex)} />
        </div>
        <div>
          <img src={chat} alt="Comment" width={25} />
        </div>
      </div>

      <div className="post-like">
        <a href="same">{formatNumber(likes)} likes</a>
      </div>
      {
        comments
          .map((comment, index) => (
            <Comment
              key={index}
              comment={comment}
              postIndex={postIndex}
              commentIndex={index}
              deleteCommentHandler={deleteCommentHandler}
            />
          )
        )
      }

      <div className="post-time">
        <a href="#4">{moment(postTime, "MMMM Do YYYY, h:mm:ss a").fromNow()}</a>
      </div>
      
      <div className="add-comment-section">
        <form
          className="add-comment-form"
          onSubmit={(event) => onAddNewComment(event, postIndex)}
        >
          <input
            type="text"
            placeholder="Add a comment..."
            className="post-input"
            value={newComment}
            onChange={onCommentInputChange}
          />

          <input
            type="submit"
            value="Post"
            className="post-button"
          />
        </form>
      </div>
      
    </div>
  )
}

CommentSection.propTypes = {
  postTime: PropTypes.string,
  comments: PropTypes.array,
}

export default CommentSection
