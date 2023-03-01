import React from 'react';

import { Hero } from './layout/Hero';
import { GlobalStyles } from './styles/globalStyles';
import { Features } from './layout/Features';
import { Footer } from './layout/Footer';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
