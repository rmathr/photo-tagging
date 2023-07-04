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

      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/ash.png?alt=media&token=97cd221b-73f2-407b-ae2e-d2e09bfbaeee"
        className="w-7 h-auto"
      /> */}
    </div>
  );
};

export default Header;
