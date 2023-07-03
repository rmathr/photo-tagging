import React, { useState } from 'react';
import background2 from './assets/images/background2.jpg';

const GameInit = (props) => {
  return (
    <div className="w-full">
      <img
        src={background2}
        id="image"
        className="relative "
        style={{ width: '100vw', height: 'auto' }}
      />
      <div className="w-[30%] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-slate-300">
        <p>Initialize game</p>
        <button onClick={props.handleClick}>Start</button>
      </div>
    </div>
  );
};

export default GameInit;
