import React from 'react'
import PropTypes from 'prop-types'
import './PostContainer.css'

const Post = ({ thumbnailUrl, username, postImageUrl }) => {
  return (
    <div>
      <div className="post-user-info">
        <div>
          <img
            src={thumbnailUrl}
            alt="User thumbnail"
            width={32}
            height={32}
          />
        </div>
        <h5>{username}</h5>
      </div>

      <div className="post-image">
        <img src={postImageUrl} alt="Post" />
      </div>
    </div>
  )
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postImageUrl: PropTypes.string.isRequired,
}

export default Post
