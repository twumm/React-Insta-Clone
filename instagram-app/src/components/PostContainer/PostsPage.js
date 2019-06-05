import React from 'react'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

const PostsPage = ({
  posts,
  comments,
  searchQuery,
  searchResults,
  searchInputChangeHandler,
  newComment,
  addCommentInputChangeHandler,
  addNewCommentHandler,
  likePostHandler,
  deleteCommentHandler,
}) => {
  return (
    <div>
      <div className="search-bar-container">
        <SearchBar
          searchQuery={searchQuery}
          searchInputChangeHandler={searchInputChangeHandler}
        />
        </div>
      {
        searchQuery && searchResults.length >= 1
        ?
        <div className="main-post-container">{
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
        }</div>
        :
        searchQuery && searchResults.length === 0
        ?
          <div>
            <h4 className="not-found">No results found</h4>
          </div>
        :
        <div className="main-post-container">{
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
      }</div>
      }
      
    </div>
  )
}

export default PostsPage
