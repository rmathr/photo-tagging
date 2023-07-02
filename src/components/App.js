import React, { createContext, useContext, useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import { getData } from './handleFirebaseData';

// import characterData from './CharacterData';
const characterData = await getData('characters');
const CharacterDataContext = createContext(null);

const App = () => {
  const [characters, setCharacters] = useState(
    characterData.map((character) => {
      return { ...character, found: false };
    })
  );

  console.log(characters);
  return (
    <CharacterDataContext.Provider
      value={{
        characters,
        setCharacters,
      }}
    >
      <div>
        <Header />
        <MainContent />
      </div>
    </CharacterDataContext.Provider>
  );
};

export default App;
