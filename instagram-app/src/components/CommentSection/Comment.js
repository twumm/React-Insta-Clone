import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const UserCommentDiv = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0 16px;
  justify-content: space-between;
`;

const CommentUsernameParagraph = styled.p`
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 2px;
  font-weight: bold;
`;

const CommentTextSpan = styled.span`
  font-weight: 400;
  padding-left: 5px;
`;

const CommentDeleteParagraph = styled.p`
  margin-top: 2px;
  margin-bottom: 2px;
  color: rgb(207, 110, 110);
  font-weight: bold;
  cursor: pointer;
  padding: 0 2px;
`;

const Comment = ({ comment, commentIndex, postIndex, deleteCommentHandler }) => {
  const onDeleteComment = (event, postIndex, commentIndex) => {
    deleteCommentHandler(event, postIndex, commentIndex)
  }

  return (
    <UserCommentDiv>
      <CommentUsernameParagraph>
        {comment.username}
        <CommentTextSpan>
          {comment.text}
        </CommentTextSpan>
      </CommentUsernameParagraph>
      <CommentDeleteParagraph
        onClick={(event) => onDeleteComment(event, postIndex, commentIndex)}
      >
        x
      </CommentDeleteParagraph>
    </UserCommentDiv>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
}

export default Comment
