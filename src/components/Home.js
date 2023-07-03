import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="w-full h-[7dvh] bg-slate-700 text-white flex flex-row items-center justify-around">
        <NavLink to="/leaderboard">
          <p>Leaderboard</p>
        </NavLink>
        <p>Home</p>
        <p>About</p>
      </div>
      <div>
        <p>Find the characters!</p>
        <button>
          <NavLink to="/game">Play now</NavLink>
        </button>
      </div>
    </>
  );
};

export default Home;
