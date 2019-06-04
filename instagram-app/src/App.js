import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      comments: [],
      newComment: ''
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
      comments: dummyData.map(post => post.comments)
    })
  }

  addCommentInputChangeHandler = (event) => {
    const newComment = event.target.value
    this.setState({
      newComment: newComment
    })
  }

  addNewCommentHandler = (event, postIndex) => {
    event.preventDefault();
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
  }

  render() {
    return (
      <div className="app-container">
        <div className="search-bar-container">
          <SearchBar />
        </div>
        <div className="main-post-container">
          {
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
                />
              ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
