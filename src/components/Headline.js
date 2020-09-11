import React from 'react';

import background from '../background.jpg';
import '../App.css';

const Headline = () => {
  return (
    <div>
     <header className="App-header">
        <img src={background} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default Headline;
