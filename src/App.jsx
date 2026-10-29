import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
          <div className="background-image"></div>
          <div className="content">
            <div className="landing_content">
              <h1 className="company-title">
                <span className="leaf-icon">🌿</span> Paradise Nursery
              </h1>
              <p className="company-tagline">Where Green Meets Serenity</p>
              <div className="divider"></div>
              <p className="company-intro">
                Step into our botanical haven. We curate the healthiest, most stunning houseplants 
                to breathe life, tranquility, and natural beauty into your living spaces and workspace.
              </p>
              <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started &rarr;
              </button>
            </div>
            <div className="about-us-wrapper">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;
