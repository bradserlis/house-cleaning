import React from 'react';

import Headline from './components/Headline';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Headline />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
