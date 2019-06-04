import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts:  [],
      comments: [],
      newComment: '',
      searchQuery: '',
      searchResults: []
    }
  }

  componentDidMount() {
    this.getItemsFromLocalStorage('posts')
    this.getItemsFromLocalStorage('comments')
  }

  addCommentInputChangeHandler = (event) => {
    const newComment = event.target.value
    this.setState({
      newComment: newComment
    })
  }

  addNewCommentHandler = (event, postIndex) => {
    event.preventDefault();

    if (!this.state.newComment.trim()) return

    const newComment = {
      username: "randomUser",
      text: this.state.newComment,
    }

    const commentToUpdate = this.state.comments[postIndex];
    commentToUpdate.push(newComment)

    const updatedComments = this.state.comments
      .map((comment, index) => {
        if (index === postIndex) {
          comment = commentToUpdate
        }
        return comment
      })

    this.setState({
      comments: updatedComments,
      newComment: ''
    })

    this.setItemsIntoLocalStorage('comments', updatedComments)
  }

  likePostHandler = (event, postIndex) => {

    const updatedPosts = this.state.posts
      .map((post, index) => {
        if (index === postIndex) {
          post.likes = post.likes + 1
        }
        return post
      })

    this.setState({
      posts: updatedPosts
    })

    this.setItemsIntoLocalStorage('posts', updatedPosts)
  }

  deleteCommentHandler = (event, postIndex, commentIndex) => {
    const commentArrayToDeleteFrom = this.state.comments[postIndex]

    const remainingComments = commentArrayToDeleteFrom
      .filter((comment, index) => index !== commentIndex)

    const updatedComments = this.state.comments
      .map((comment, index) => {
        if (index === postIndex) {
          comment = remainingComments
        }
        return comment
      })
    
    this.setState({
      comments: updatedComments
    })

    this.setItemsIntoLocalStorage('comments', updatedComments)
  }

  searchInputChangeHandler = (event) => {
    const searchQuery = event.target.value
    const results = this.state.posts
      .filter(post => 
        post.username.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1
      )
      
    this.setState({
      searchQuery: searchQuery,
      searchResults: results
    })
  }

  setItemsIntoLocalStorage = (dataName, data) => {
    localStorage.setItem(dataName, JSON.stringify(data))
  }

  getItemsFromLocalStorage = (dataName) => {
    let results

    if (dataName === 'posts') {
      results = JSON.parse(localStorage.getItem(dataName)) || dummyData
    } else if (dataName === 'comments') {
      results = JSON.parse(localStorage.getItem(dataName)) || dummyData.map(post => post.comments)
    }

    this.setState({
      [dataName]: results
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="search-bar-container">
          <SearchBar
            searchQuery={this.state.searchQuery}
            searchInputChangeHandler={this.searchInputChangeHandler}
          />
        </div>
        <div className="main-post-container">
          {
            this.state.searchQuery && this.state.searchResults.length >= 1
              ? 
              this.state.searchResults
                .map((post, index) => (
                  <PostContainer
                    key={post.timestamp.replace(/\s+/g, '')}
                    post={post}
                    postIndex={index}
                    comments={this.state.comments}
                    newComment={this.state.newComment}
                    addCommentInputChangeHandler={this.addCommentInputChangeHandler}
                    addNewCommentHandler={this.addNewCommentHandler}
                    likePostHandler={this.likePostHandler}
                    deleteCommentHandler={this.deleteCommentHandler}
                  />
                ))
              :
              this.state.searchQuery && this.state.searchResults.length === 0
              ?
                <div>
                  <h4 className="not-found">No results found</h4>
                </div>
              :
              this.state.posts
                .map((post, index) => (
                  <PostContainer
                    key={post.timestamp.replace(/\s+/g, '')}
                    post={post}
                    postIndex={index}
                    comments={this.state.comments}
                    newComment={this.state.newComment}
                    addCommentInputChangeHandler={this.addCommentInputChangeHandler}
                    addNewCommentHandler={this.addNewCommentHandler}
                    likePostHandler={this.likePostHandler}
                    deleteCommentHandler={this.deleteCommentHandler}
                  />
                ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
