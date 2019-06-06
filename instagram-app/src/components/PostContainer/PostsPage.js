import React from 'react'
import styled from 'styled-components'
import PostContainer from './PostContainer'
import SearchBar from '../SearchBar/SearchBar'

const MainPostContainer = styled.div`
  width: 60%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 95%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SearchBarHeader = styled.header`
  display: flex;
  padding: 26px 20px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  background-color: white;
  height: 27px;

  @media (max-width: 800px) {
    justify-content: space-between;
}
`;

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
  postLiked
}) => {
  return (
    <div>
      <SearchBarHeader>
        <SearchBar
          searchQuery={searchQuery}
          searchInputChangeHandler={searchInputChangeHandler}
        />
      </SearchBarHeader>
      {
        searchQuery && searchResults.length >= 1
        ?
        <MainPostContainer>{
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
            postLiked={postLiked}
          />
        ))
        }</MainPostContainer>
        :
        searchQuery && searchResults.length === 0
        ?
          <div>
            <h4 className="not-found">No results found</h4>
          </div>
        :
        <MainPostContainer>
          {
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
                postLiked={postLiked}
              />
            ))
          }
        </MainPostContainer>
      }
    </div>
  )
}

export default PostsPage
