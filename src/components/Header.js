import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Timer from './Timer';
import edward from '../components/assets/images/characters/edward.png';
import { CharacterDataContext } from './CharacterDataContext';

const Header = () => {
  const { characters, setCharacters, resetGame } = useContext(CharacterDataContext);
  let charDisplay = characters.map((char) => {
    return (
      <div
        key={char.name}
        className="flex flex-row items-center flex-grow justify-center"
      >
        <img
          src={char.img}
          className={`w-7 ${char.found ? 'grayscale' : 'grayscale-0'} `}
        />
        <p className="ml-2 text-sm">{char.name}</p>
      </div>
    );
  });

  return (
    <div className="w-full h-[7dvh] bg-slate-700 text-white flex flex-row items-center justify-around">
      <NavLink onClick={resetGame} to="/">
        <p>Home</p>
      </NavLink>
      <div className="w-[50%] flex flex-row items-center justify-around">
        {charDisplay}
      </div>
      <Timer />

      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/ash.png?alt=media&token=97cd221b-73f2-407b-ae2e-d2e09bfbaeee"
        className="w-7 h-auto"
      /> */}
    </div>
  );
};

export default Header;
