import React, { useEffect, useState } from 'react';
import ImageMapper from 'react-img-mapper';

import background from './assets/images/background.jpg';
import background2 from './assets/images/background2.jpg';

const characters = [
  {
    name: 'Edward Elric',
    found: false,
    xCoord: 1144,
    yCoord: 7380,
  },
  {
    name: 'Brian',
    found: false,
    xCoord: 275,
    yCoord: 5800,
  },
  {
    name: 'Ash',
    found: false,
    xCoord: 54,
    yCoord: 7060,
  },
  {
    name: 'Link',
    found: false,
    xCoord: 450,
    yCoord: 7734,
  },
  {
    name: 'Wilson',
    found: false,
    xCoord: 1610,
    yCoord: 8007,
  },
];

const MainContent = () => {
  const screenWidth = window.innerWidth;
  const screenHeight = screen.height;
  const radius = (0.032552 * screenWidth) / 2;

  let characterCircle = (
    <div
      className={`absolute rounded-full opacity-50 bg-green-700 z-10`}
      // style={{ top: y + 25, left: x - 25 }}
      style={{
        width: 2 * radius,
        height: 2 * radius,
        top: characters[0].yCoord * (screenWidth / 1920) + 0.07 * screenHeight - radius,
        //   top: 7380 * (screenWidth / 1920) + 0.07 * screenHeight - radius,
        left: characters[0].xCoord * (screenWidth / 1920) - radius,
        //   left: 1144 * (screenWidth / 1920) - radius,
      }}
    ></div>
  );

  const [circle, setCircle] = useState([]);

  const getMouseCoords = (e) => {
    const height = screen.height;
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    console.log(height);
  };

  const getClickCoords = (event) => {
    // from: https://stackoverflow.com/a/29296049/14198287
    let e = event.target;
    let dim = e.getBoundingClientRect();
    // let x = event.clientX;
    let x = event.clientX - dim.left;
    let y = event.clientY - dim.top;
    // let y = event.clientY;
    return [x, y];
  };

  const addCircle = (event) => {
    let [x, y] = getClickCoords(event);
    const screenWidth = window.innerWidth;
    const screenHeight = screen.height;
    const radius = (0.032552 * screenWidth) / 2;
    let newCircle = (
      <div
        className={`absolute rounded-full opacity-50 bg-red-600 z-10`}
        // style={{ top: y + 25, left: x - 25 }}
        onClick={(e) => handleClick(e)}
        style={{
          width: 2 * radius,
          height: 2 * radius,
          top: y - 1.25 * radius + 0.07 * screenHeight,
          //   top: 7380 * (screenWidth / 1920) + 0.07 * screenHeight - radius,
          left: x - radius,
          //   left: 1144 * (screenWidth / 1920) - radius,
        }}
      ></div>
    );
    setCircle(newCircle);
    // console.log(x, y);
    return {
      center: [(x + radius) / (screenWidth / 1920), (y - radius) / (screenWidth / 1920)],
      radius: 50,
    };
  };

  const handleClick = (e) => {
    const screenWidth = window.innerWidth;
    const screenHeight = screen.height;
    const radius = (0.032552 * screenWidth) / 2;
    const clickedCircle = addCircle(e);
    const circle2 = {
      center: [characters[2].xCoord, characters[2].yCoord - radius],
      radius: 1,
    };

    console.log(clickedCircle);
    console.log(checkIfContains(clickedCircle, circle2));
    // const width = window.innerWidth;
    // console.log(width);
    // alert(checkIfContains(circle1, circle2));
  };

  const circle1 = {
    center: [280, 5797],
    radius: 20,
  };
  const circle2 = {
    center: [80, 5797],
    radius: 10,
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
    <div className="w-full">
      {circle}
      {/* {characterCircle} */}

      <img
        src={background2}
        id="image"
        onClick={(e) => handleClick(e)}
        // onClick={(e) => getMouseCoords(e)}
        className="relative"
        style={{ width: '100vw', height: 'auto' }}
      />
      {/* <svg width={'100%'} height={8000} onClick={addCircle}>
      </svg> */}

      {/* <ImageMapper src={background2} map={MAP} /> */}

      {/* <map name="workmap">
        <area
          className="border-red-600 bg-red-600 cursor-pointer"
          shape="circle"
          coords="280,5797,20"
          onClick={handleClick}
        />
      </map> */}
    </div>
  );
};

export default MainContent;
