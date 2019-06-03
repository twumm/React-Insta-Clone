import React from 'react'
import PropTypes from 'prop-types'

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

Post.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postImageUrl: PropTypes.string.isRequired,
}

export default Post
