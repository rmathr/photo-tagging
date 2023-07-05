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

  const { gameInit, gameEnd, time, setTime } = useContext(CharacterDataContext);

  useEffect(() => {
    if (gameInit) {
      handleStart();
    }
    if (gameEnd) {
      setTime(timer);
    }
  }, [gameInit, gameEnd]);

  return (
    <div>
      <div>
        {!gameEnd && <p>{formatTime(timer)}</p>}
        {gameEnd && <p>{formatTime(time)}</p>}
      </div>
    </div>
  );
};

export default Timer;
