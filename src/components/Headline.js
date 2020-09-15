import React from 'react';

import '../App.css';

const Headline = () => {
  return (
    <div className="headline">
      <h1 className="sr-only">Kailua House Cleaning</h1>
      <img className="landscape-logo" src="/logo.jpg" alt="Kailua House Cleaning" />
      <img className="default-logo" src="/logo-vertical.jpg" alt="Kailua House Cleaning" /> 
    </div>
  )
}

export default Headline;

