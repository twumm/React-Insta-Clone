import React from 'react'
import PostContainer from './PostContainer'

const PostsPage = ({
  posts,
  comments,
  searchQuery,
  searchResults,
  newComment,
  addCommentInputChangeHandler,
  addNewCommentHandler,
  likePostHandler,
  deleteCommentHandler,
}) => {
  return (
    <div>
      {
        searchQuery && searchResults.length >= 1
        ?
        searchResults.map((post, index) => (
          <PostContainer
            key={post.timestamp.replace(/\s+/g, '')}
            post={post}
            postIndex={index}
            comments={comments}
            newComment={newComment}
            addCommentInputChangeHandler={addCommentInputChangeHandler}
            addNewCommentHandler={addNewCommentHandler}
            likePostHandler={likePostHandler}
            deleteCommentHandler={deleteCommentHandler}
          />
        ))
        :
        searchQuery && searchResults.length === 0
        ?
          <div>
            <h4 className="not-found">No results found</h4>
          </div>
        :
        posts.map((post, index) => (
          <PostContainer
            key={post.timestamp.replace(/\s+/g, '')}
            post={post}
            postIndex={index}
            comments={comments}
            newComment={newComment}
            addCommentInputChangeHandler={addCommentInputChangeHandler}
            addNewCommentHandler={addNewCommentHandler}
            likePostHandler={likePostHandler}
            deleteCommentHandler={deleteCommentHandler}
          />
        ))
      }
      
    </div>
  )
}

export default PostsPage
