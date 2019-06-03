import React from 'react'

const Post = ({ thumbnailUrl, username, postImageUrl }) => {
  return (
    <div>
      <div>
        <div className="post-user-info">
          <img src={thumbnailUrl} alt="User thumbnail" />
          <h5>{username}</h5>
        </div>
      </div>

      <div className="post-image">
        <img src={postImageUrl} alt="Post" />
      </div>
    </div>
  )
}

export default Post
