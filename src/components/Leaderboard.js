import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getData } from './handleFirebaseData';
import LeaderboardTable from './LeaderboardTable';
import _ from 'lodash';

const leaderboardData = await getData('leaderboard');

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([...leaderboardData]);

  const orderedLeaderboard = _.sortBy([...leaderboard], (obj) =>
    parseInt(obj.time, 10)
  ).map((item, index) => {
    item.order = index + 1;
    return item;
  });

  const updateLeaderboard = async () => {
    setLeaderboard(await getData('leaderboard'));
  };

  useEffect(() => {
    updateLeaderboard();
  }, []);

  return (
    <>
      <div className="top-0 fixed w-full h-[10dvh] bg-black text-white flex flex-row items-center justify-around uppercase">
        <NavLink to="/">
          <p className="">Home</p>
        </NavLink>
        <p className="min-w-[135px] text-3xl">
          Where's... <span className="text-red-800 italic font-bold">Everyone?</span>
        </p>
        <NavLink to="/about">
          <p className="">About</p>
        </NavLink>
      </div>
      <div className="h-[10vh]"></div>
      <div className="m-16 max-w-full flex flex-col items-center justify-center">
        <div className="min-w-[70%] shadow-lg shadow-black">
          <LeaderboardTable leaderboard={orderedLeaderboard} />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
