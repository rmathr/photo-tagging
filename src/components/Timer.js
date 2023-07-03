import React, { useEffect, useContext, useState } from 'react';
import { CharacterDataContext } from './CharacterDataContext';

import useTimer from '../hooks/useTimer';
import { formatTime } from '../utils';

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  const [time, setTime] = useState(0);
  const { gameInit, gameEnd } = useContext(CharacterDataContext);
  //   console.log(gameInit);

  useEffect(() => {
    if (gameInit) {
      handleStart();
    }
    if (gameEnd) {
      //   handlePause()
      //   time = time + +timer;
      setTime(timer);
      //   console.log(time);
    }
  }, [gameInit, gameEnd]);

  return (
    <div className="app">
      <div className="stopwatch-card">
        {!gameEnd && <p>{formatTime(timer)}</p>}
        {gameEnd && <p>{formatTime(time)}</p>}
        {/* <div className="buttons">
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Timer;
