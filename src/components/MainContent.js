import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';

import background from './assets/images/background.jpg';
import background2 from './assets/images/background2.jpg';

const MainContent = () => {
  const [circle, setCircle] = useState([]);

  const getClickCoords = (event) => {
    // from: https://stackoverflow.com/a/29296049/14198287
    let e = event.target;
    let dim = e.getBoundingClientRect();
    let x = event.clientX - dim.left;
    let y = event.clientY - dim.top;
    return [x, y];
  };

  const addCircle = (event) => {
    // get click coordinates
    let [x, y] = getClickCoords(event);

    // make new svg circle element
    // top-[${y}px] left-[${x}px]
    // more info here: https://www.w3schools.com/graphics/svg_circle.asp
    let newCircle = (
      //   <circle cx={x} cy={y} r="20" stroke="black" strokeWidth="1" fill="red" />
      <div
        className={`absolute w-[100px] h-[100px] rounded-full opacity-50 bg-red-600 z-10`}
        style={{ top: y, left: x - 50 }}
      ></div>
    );

    // update the array of circles; you HAVE to spread the current array
    // as 'circles' is immutible and will not accept new info
    // let allCircles = [...circles, newCircle];

    // update 'circles'
    setCircle(newCircle);
    console.log(x, y);
  };

  const handleClick = () => {
    alert(checkIfContains(circle1, circle2));
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
      <img src={background2} onClick={addCircle} className="relative" />
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
