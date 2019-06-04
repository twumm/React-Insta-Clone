import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const PostContainer = ({ post, comments, newComment, postIndex, addCommentInputChangeHandler, addNewCommentHandler, likePostHandler }) => {
  return (
    <div className="post-container">
      <Post
        thumbnailUrl={post.thumbnailUrl}
        username={post.username}
        postImageUrl={post.imageUrl}
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
      />
    </div>
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
