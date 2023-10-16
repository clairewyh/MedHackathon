import './App.css'
import React from 'react';
import SearchBar from './SearchBar';

function Home() {
  return (
    <div className="custom-background">
      <h1>Bad Blood <span role="img" aria-label="Blood Drop">🩸</span></h1>
      <SearchBar />
      {/* Additional components and content can go here */}
    </div>
  );
}

export default Home;
