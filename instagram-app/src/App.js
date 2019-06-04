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

  addCommentInputChange = (event) => {
    // console.log('change')
    const newComment = event.target.value
    this.setState({
      newComment: newComment
    })
  }

  addNewComment = (event, postIndex) => {
    // debugger
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
                  addCommentInputChange={this.addCommentInputChange}
                  addNewComment={this.addNewComment}
                />
              ))
          }
        </div>
        
      </div>
    );
  }
}

export default App;
