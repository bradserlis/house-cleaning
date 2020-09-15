import React from 'react';

import Headline from './components/Headline';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Headline />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
