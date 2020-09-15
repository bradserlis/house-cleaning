import React from 'react';

import '../App.css';
import logo from '../logo.jpg';
import logoVerical from '../logo-vertical.jpg';

const Headline = () => {
  return (
    <div className="headline">
      <h1 className="sr-only">Kailua House Cleaning</h1>
      <img className="landscape-logo" src={logo} alt="Kailua House Cleaning" />
      <img className="default-logo" src={logoVertical} alt="Kailua House Cleaning" /> 
    </div>
  )
}

export default Headline;

