import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getData } from './handleFirebaseData';
import LeaderboardTable from './LeaderboardTable';

const leaderboardData = await getData('leaderboard');

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([...leaderboardData]);
  console.log(leaderboard);

  const updateLeaderboard = async () => {
    setLeaderboard(await getData('leaderboard'));
  };

  useEffect(() => {
    updateLeaderboard();
  }, []);

  return (
    <>
      <div className="w-full h-[7dvh] bg-slate-700 text-white flex flex-row items-center justify-around">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        Info
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[70%]">
          <LeaderboardTable leaderboard={leaderboard} />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
