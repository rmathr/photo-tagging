import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CharacterDataContext } from './CharacterDataContext';
import { addData } from './handleFirebaseData';
import { format } from 'date-fns';

const GameEnd = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const { time, setTime, resetGame } = useContext(CharacterDataContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      time: time,
      date: `${format(new Date(), 'MM/dd/yyyy')}`,
    };
    addData(userData, 'leaderboard');
    console.log(userData);
    // props.saveInputValue(formData);
    setUsername('');
    setTime(0);
    navigate('/leaderboard');
  };

  return (
    <div className="w-[50%] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-slate-300">
      <p>You finished in {time} seconds!</p>
      <div>
        <p>Enter your username below to submit your score</p>
        <form className="flex flex-col" onSubmit={onSubmitForm}>
          <label>
            Username
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <NavLink onClick={resetGame} to="/">
            <button type="button">cancel</button>
          </NavLink>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default GameEnd;
