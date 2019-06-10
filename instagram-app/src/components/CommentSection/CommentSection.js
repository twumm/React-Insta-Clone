import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';
import styled from 'styled-components'
import Comment from './Comment';
import chat from '../../assets/img/chat.svg'
import likeHeart from '../../assets/img/likedHeart.svg'
import unlikedHeart from '../../assets/img/unlikedHeart.svg'
import { formatNumber } from '../../helpers/formatNumber';

const CommentSectionDiv = styled.div``;

const CommentReactionDiv = styled.div`
  display: flex;
  padding: 0 16px;
  margin-top: 10px;

  img {
    padding-right: 20px;
    padding-bottom: 5px;
  }
`;

const PostLikeDiv = styled.div`
  padding: 0 16px;

  a {
    margin: 0;
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
`;

const PostTimeDiv = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  a {
    font-size: 11px;
    letter-spacing: .2px;
    text-transform: uppercase;
    font-weight: 200;
    padding: 0 16px;
    text-decoration: none;
    color: inherit;
    vertical-align: top;
  }
`;

const AddCommentDiv = styled.div`
  border-top: 1px solid #efefef;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;

  input {
    border: none;
    height: 50px;
    padding-right: 30px;
  }

  input::placeholder {
    color: #999999;
  }

  input:focus {
    outline: none;
  }

  .post-input {
    width: 90%;
  }

  .post-button {
    border: none;
    background: none;
    padding: 0;
    text-align: center;
    color: rgb(146, 146, 241);
    letter-spacing: .5px;
    outline: none;
    cursor: pointer;
  }

  .post-button:hover {
    color: blue;
  }
`;

const AddCommentForm = styled.form`
  display: flex;
  width: 100%;
`;

const CommentSection = ({ likes, postTime, comments, newComment,
  postIndex, addCommentInputChangeHandler, addNewCommentHandler, 
  likePostHandler, deleteCommentHandler, postLiked }) => {

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
    <CommentSectionDiv>
      <CommentReactionDiv>
        <div>
          <img
            src={postLiked ? likeHeart : unlikedHeart}
            alt="Like"
            width={25}
            onClick={(event) => onLikePost(event, postIndex)}
          />
        </div>
        <div>
          <img
            src={chat}
            alt="Comment"
            width={25}
          />
        </div>
      </CommentReactionDiv>

      <PostLikeDiv>
        <a href="same">{formatNumber(likes)} likes</a>
      </PostLikeDiv>
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

      <PostTimeDiv>
        <a href="#4">{moment(postTime, "MMMM Do YYYY, h:mm:ss a").fromNow()}</a>
      </PostTimeDiv>
      
      <AddCommentDiv>
        <AddCommentForm
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
        </AddCommentForm>
      </AddCommentDiv>
      
    </CommentSectionDiv>
  )
}

CommentSection.propTypes = {
  postTime: PropTypes.string,
  comments: PropTypes.array,
}

export default CommentSection
