import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MainContent from './MainContent';
import About from './About';
import Leaderboard from './Leaderboard';
import { getData } from './handleFirebaseData';
import { CharacterDataContext } from './CharacterDataContext';
import GameInit from './GameInit';
import GameEnd from './GameEnd';

const characterData = await getData('characters');

const App = () => {
  const [characters, setCharacters] = useState(
    characterData.map((character) => {
      return { ...character, found: false };
    })
  );

  const [gameInit, setGameInit] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [time, setTime] = useState(0);

  const handleClick = () => {
    setGameInit(true);
  };

  const resetGame = () => {
    setGameInit(false);
    setGameEnd(false);
    setCharacters(
      characters.filter((character) => {
        character.found = false;
        return character;
      })
    );
    setTime(0);
  };

  const endGame = () => {
    setGameEnd(true);
  };

  return (
    <HashRouter basename="/">
      <CharacterDataContext.Provider
        value={{
          characters,
          setCharacters,
          gameInit,
          gameEnd,
          setGameEnd,
          resetGame,
          time,
          setTime,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/game"
            element={
              <div>
                <Header start={gameInit} end={gameEnd} />
                {!gameInit && <GameInit handleClick={handleClick} />}
                {gameInit && <MainContent endGame={endGame} />}
                {gameEnd && <GameEnd />}
              </div>
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CharacterDataContext.Provider>
    </HashRouter>
  );
};

export default App;
