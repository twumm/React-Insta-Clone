import React from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import dummyData from './dummy-data'
import './App.css';

function App() {
  return (
    <div className="app-container">
      <SearchBar />
      <div className="main-post-container">
        {
          dummyData
            .map(post => (
              <PostContainer key={post.timestamp.trim()} post={post} />
            ))
        }
      </div>
      
    </div>
  );
}

export default App;
