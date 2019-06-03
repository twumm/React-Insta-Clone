import React from 'react';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

import dummyData from './dummy-data'
import './App.css';

function App() {
  return (
    <div className="">
      <SearchBar />
      {
        dummyData
          .map(post => (
            <PostContainer key={post.id} post={post} />
          ))
      }
      
    </div>
  );
}

export default App;
