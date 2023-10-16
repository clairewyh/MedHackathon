import React, { useState } from 'react';
import Home from './home'; // Import the Home component
import About from './about'; // Import the About component
import Contact from './contact';
import Resources from './resources';


function App() {
  // Create a state variable to track the currently displayed page 
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the selected page based on the state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'resources':
        return <Resources />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Links to the Home and About pages */}
      <button className="custom-button" onClick={() => setCurrentPage('home')}>Home Page</button>
      <button className="custom-button" onClick={() => setCurrentPage('about')}>About Page</button>
      <button className="custom-button" onClick={() => setCurrentPage('contact')}>Contact Info</button>
      <button className="custom-button" onClick={() => setCurrentPage('resources')}>Resources</button>

      {/* Render the selected page */}
      {renderPage()}
    </div>
  );
}

export default App;
