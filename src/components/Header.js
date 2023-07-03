import React, { useContext } from 'react';
import Timer from './Timer';
import edward from '../components/assets/images/characters/edward.png';
import { CharacterDataContext } from './CharacterDataContext';

const Header = () => {
  const { characters, setCharacters } = useContext(CharacterDataContext);
  return (
    <div className="w-full h-[7dvh] bg-slate-700 text-white flex flex-row items-center justify-around">
      <div>Header</div>
      <Timer />
      {/* <img
        src="https://firebasestorage.googleapis.com/v0/b/phototagging-a690c.appspot.com/o/ash.png?alt=media&token=97cd221b-73f2-407b-ae2e-d2e09bfbaeee"
        className="w-7 h-auto"
      /> */}
    </div>
  );
};

export default Header;
