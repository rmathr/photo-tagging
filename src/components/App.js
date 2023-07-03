import React, { createContext, useContext, useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import { getData } from './handleFirebaseData';
import { CharacterDataContext } from './CharacterDataContext';
import GameInit from './GameInit';

// import characterData from './CharacterData';
const characterData = await getData('characters');

const App = () => {
  const [characters, setCharacters] = useState(
    characterData.map((character) => {
      return { ...character, found: false };
    })
  );

  const [gameInit, setGameInit] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

  const handleClick = () => {
    setGameInit(true);
  };

  const endGame = () => {
    setGameEnd(true);
  };

  // console.log(characters);
  return (
    <CharacterDataContext.Provider
      value={{
        characters,
        setCharacters,
        gameInit,
        gameEnd,
      }}
    >
      <div>
        <Header start={gameInit} end={gameEnd} />
        {!gameInit && <GameInit handleClick={handleClick} />}
        {gameInit && <MainContent />}
      </div>
    </CharacterDataContext.Provider>
  );
};

export default App;
