import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostUserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #efefef;
`;

const UserThumbnail = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;

const Username = styled.h5`
  margin: 0;
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const Post = ({ thumbnailUrl, username, postImageUrl }) => {
  return (
    <div>
      <PostUserInfo>
        <div>
          <UserThumbnail
            src={thumbnailUrl}
            alt="User thumbnail"
            width={32}
            height={32}
          />
        </div>
        <Username>{username}</Username>
      </PostUserInfo>

      <PostImage>
        <img src={postImageUrl} alt="Post" />
      </PostImage>
    </div>
  )
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postImageUrl: PropTypes.string.isRequired,
}

export default Post
