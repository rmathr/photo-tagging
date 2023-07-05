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
          className={`w-9 ${char.found ? 'grayscale' : 'grayscale-0'} `}
        />
        <p className="ml-2 text-md">{char.name}</p>
      </div>
    );
  });

  return (
    <div className="w-full h-[10dvh] bg-black text-white flex flex-row items-center justify-around">
      <NavLink onClick={resetGame} to="/">
        <p className="uppercase">Home</p>
      </NavLink>
      <div className="w-[50%] flex flex-row items-center justify-around">
        {charDisplay}
      </div>
      <div className="font-bold text-xl">
        <Timer />
      </div>
    </div>
  );
};

export default Header;
