import React, { useEffect, useState, useContext } from 'react';
import CharacterSelector from './CharacterSelector';
import { CharacterDataContext } from './CharacterDataContext';

import background from './assets/images/background.jpg';
import background2 from './assets/images/background2.jpg';

const MainContent = (props) => {
  const [clickedPoint, setClickedPoint] = useState(null);
  const [circle, setCircle] = useState([]);
  const { characters, setCharacters, setGameEnd } = useContext(CharacterDataContext);

  let remainingCharacters = characters.filter((character) => !character.found);
  useEffect(() => {
    if (remainingCharacters.length === 0) {
      props.endGame();
    }
  }, [remainingCharacters]);

  const screenWidth = window.innerWidth;
  const screenHeight = screen.height;
  const radius = (0.032552 * screenWidth) / 2;
  const adjustY = -1.25 * radius + 0.07 * screenHeight;

  const getMouseCoords = (e) => {
    const height = screen.height;
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    console.log(height);
  };

  const getClickCoords = (event) => {
    if (event != null) {
      let e = event.target;
      let dim = e.getBoundingClientRect();
      let x = event.clientX - dim.left;
      let y = event.clientY - dim.top;
      return [x, y];
    }
  };

  const addCircle = (event) => {
    let [x, y] = getClickCoords(event);
    const screenWidth = window.innerWidth;
    const screenHeight = screen.height;
    const radius = (0.032552 * screenWidth) / 2;

    const adjustY = -1.25 * radius + 0.1 * screenHeight;

    let newCircle = (
      <div
        className={`absolute rounded-full  z-10 border-dashed border-4 border-red-600`}
        // onClick={(e) => handleClick(e)}
        style={{
          width: 2 * radius,
          height: 2 * radius,
          top: y + adjustY,
          left: x - radius,
        }}
      ></div>
    );
    setCircle(newCircle);
    return {
      center: [(x + radius) / (screenWidth / 1920), (y - radius) / (screenWidth / 1920)],
      radius: 70,
    };
  };

  const defineEvent = (e) => {
    setClickedPoint(e);
  };

  useEffect(() => {
    clickedPoint === null ? null : addCircle(clickedPoint);
  }, [clickedPoint]);

  const verifyCharacter = (characterCircle) => {
    // const screenWidth = window.innerWidth;
    // const screenHeight = screen.height;
    // const radius = (0.032552 * screenWidth) / 2;
    const clickedCircle = addCircle(clickedPoint);

    console.log(checkIfContains(clickedCircle, characterCircle));
    return checkIfContains(clickedCircle, characterCircle);
  };

  const checkIfContains = (circle1, circle2) => {
    const distSq = parseInt(
      Math.sqrt(
        (circle1.center[0] - circle2.center[0]) *
          (circle1.center[0] - circle2.center[0]) +
          (circle1.center[1] - circle2.center[1]) *
            (circle1.center[1] - circle2.center[1])
      )
    );

    if (distSq + circle2.radius <= circle1.radius) {
      return true;
    }
    return false;
  };

  return (
    <>
      <CharacterSelector
        radius={radius}
        getClickCoords={getClickCoords}
        verifyCharacter={verifyCharacter}
      >
        <div className="w-full">
          {remainingCharacters.length > 0 && circle}
          {/* {characterCircle} */}

          <img
            src={background2}
            id="image"
            //   onClick={(e) => verifyCharacter(e)}
            onClick={(e) => defineEvent(e)}
            // onClick={(e) => getMouseCoords(e)}
            className="relative"
            style={{ width: '100vw', height: 'auto' }}
          />
        </div>
      </CharacterSelector>
    </>
  );
};

export default MainContent;
