import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getData } from './handleFirebaseData';
import LeaderboardTable from './LeaderboardTable';
import _ from 'lodash';

const leaderboardData = await getData('leaderboard');

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([...leaderboardData]);
  // const [leaderboard, setLeaderboard] = useState(
  //   _.sortBy([...leaderboardData], (obj) => parseInt(obj.time, 10)).map((item, index) => {
  //     item.order = index + 1;
  //     return item;
  //   })
  // );

  const [orderedLeaderboard, setOrderedLeaderboard] = useState(
    _.sortBy([...leaderboard], (obj) => parseInt(obj.time, 10)).map((item, index) => {
      item.order = index + 1;
      return item;
    })
  );
  // console.log(leaderboard);

  const updateLeaderboard = async () => {
    setLeaderboard(await getData('leaderboard'));
  };

  const updateOrderedLeaderboard = () => {
    let leaderTable = [...leaderboard];
    let sortedLeaderTable = _.sortBy(leaderTable, (obj) => parseInt(obj.time, 10));
    let finalLeaderTable = sortedLeaderTable.map((item, index) => {
      item.order = index + 1;
      return item;
    });
    setOrderedLeaderboard(finalLeaderTable);
  };

  useEffect(() => {
    updateLeaderboard();
    updateOrderedLeaderboard();
  }, []);

  // useEffect(() => {

  // }, [leaderboard]);

  return (
    <>
      <div className="top-0 fixed w-full h-[10dvh] bg-black text-white flex flex-row items-center justify-around">
        <NavLink to="/">
          <p className="uppercase">Home</p>
        </NavLink>
        Info
      </div>
      <div className="h-[10vh]"></div>
      <div className="m-16 w-full flex flex-col items-center justify-center">
        <div className="min-w-[70%] shadow-lg shadow-black">
          <LeaderboardTable leaderboard={orderedLeaderboard} />
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
