import React from 'react'
import PropTypes from 'prop-types'

const Comment = ({ username, text }) => {
  return (
    <div>
      <h6>{username}</h6>
      <p>{text}</p>
    </div>
  )
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string,
}

export default Comment
