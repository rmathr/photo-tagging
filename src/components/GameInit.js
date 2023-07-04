import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import background2 from './assets/images/background2.jpg';

const GameInit = (props) => {
  return (
    <div className="w-full">
      <img
        src={background2}
        id="image"
        className="relative"
        style={{ width: '100vw', height: 'auto' }}
      />
      <div
        className="w-[30%] min-h-[40dvh] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
      bg-black shadow-lg shadow-black rounded-xl flex flex-col items-center justify-around text-white text-center px-5"
      >
        <p className="text-2xl">
          Find the characters above in the shortest possible time.
        </p>
        <p className="text-md italic">
          When you find a character, click on its position on the image and select it from
          the list that will open.
        </p>
        <Button
          onClick={props.handleClick}
          size="lg"
          variant="solid"
          color="success"
          sx={{ borderRadius: 16, width: 120 }}
        >
          Start
        </Button>
        {/* <button onClick={props.handleClick}>Start</button> */}
      </div>
    </div>
  );
};

export default GameInit;
