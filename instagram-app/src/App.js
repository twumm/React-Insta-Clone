import React, { Component } from 'react';
import FuzzySearch from 'fuzzy-search'
import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/PostContainer/PostsPage'
import withAuthenticate from './authentication/withAuthenticate'

import dummyData from './dummy-data'
import './App.css';

const randomUsername = require('username-generator')
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

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
      username: randomUsername.generateUsername(),
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
    const searcher = new FuzzySearch(this.state.posts, ['username'], {
      caseSensitive: true,
    })
    // const results = this.state.posts
    //   .filter(post => 
    //     post.username.toUpperCase().indexOf(searchQuery.toUpperCase()) > -1
    //   )
    const results = searcher.search(searchQuery)
      
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
          <ComponentFromWithAuthenticate
            posts={this.state.posts}
            comments={this.state.comments}
            searchQuery={this.state.searchQuery}
            searchResults={this.state.searchResults}
            newComment={this.state.newComment}
            addCommentInputChangeHandler={this.addCommentInputChangeHandler}
            addNewCommentHandler={this.addNewCommentHandler}
            likePostHandler={this.likePostHandler}
            deleteCommentHandler={this.deleteCommentHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
