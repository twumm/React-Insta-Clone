import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'
import './PostContainer.css'

const PostContainer = ({ post }) => {
  return (
    <div className="post-container">
      <Post
        thumbnailUrl={post.thumbnailUrl}
        username={post.username}
        postImageUrl={post.imageUrl}
      />
      <CommentSection
        comments={post.comments}
        postTime={post.timestamp}
        likes={post.likes}
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
