import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div 
        className = "fixed bg-light-gray top-60percent bottom-0 w-full"
      >
      </div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
