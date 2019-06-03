import React from 'react'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = ({ post }) => {
  return (
    <div>
      <Post
        thumbnailUrl={post.thumbnailUrl}
        username={post.username}
        postImageUrl={post.imageUrl}
      />
      <CommentSection
        comments={post.comments}
        postTime={post.timestamp}
      />
    </div>
  )
}

export default PostContainer
