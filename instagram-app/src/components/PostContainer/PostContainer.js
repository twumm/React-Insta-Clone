import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'

const PostContainerDiv = styled.div`
  margin: 60px auto;
  border: 1px solid #e6e6e6;
  background-color: white;
`;

const PostContainer = ({ post, comments, newComment, postIndex, addCommentInputChangeHandler, addNewCommentHandler, likePostHandler, deleteCommentHandler }) => {
  return (
    <PostContainerDiv>
      <Post
        thumbnailUrl={post.thumbnailUrl}
        username={post.username}
        postImageUrl={post.imageUrl}
        postIndex={postIndex}
      />
      <CommentSection
        comments={comments[postIndex]}
        newComment={newComment}
        postIndex={postIndex}
        postTime={post.timestamp}
        likes={post.likes}
        addCommentInputChangeHandler={addCommentInputChangeHandler}
        addNewCommentHandler={addNewCommentHandler}
        likePostHandler={likePostHandler}
        deleteCommentHandler={deleteCommentHandler}
      />
      <Route path="/single-post/:postIndex" component={Post} />
    </PostContainerDiv>
  )
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    comments: PropTypes.array,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    username: PropTypes.string.isRequired,
  })
}

export default PostContainer
