import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CharacterDataContext } from './CharacterDataContext';
import { addData } from './handleFirebaseData';
import { format } from 'date-fns';
import Filter from 'bad-words';
import Button from '@mui/joy/Button';

const GameEnd = (props) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const { time, setTime, resetGame } = useContext(CharacterDataContext);

  const handleChange = (e) => {
    setUsername(e.target.value);
    e.preventDefault();
  };

  const onSubmitForm = (e) => {
    const customFilter = new Filter({ placeHolder: 'x' });
    e.preventDefault();
    const userData = {
      username: customFilter.clean(username),
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
    <div
      className="w-[30%] min-h-[40dvh] fixed top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
    bg-black shadow-lg shadow-black rounded-xl flex flex-col items-center justify-between text-white text-center p-5"
    >
      <p className="text-2xl w-full pb-3 border-b border-[#EFEFEF] ">
        You finished in {time} seconds!
      </p>
      <div className="w-full flex flex-col flex-grow justify-between">
        <form
          className="w-full flex flex-col flex-grow justify-between"
          onSubmit={onSubmitForm}
        >
          <div className="w-full flex flex-col flex-grow justify-evenly items-start">
            <p className="text-lg">Enter your username below to submit your score</p>
            <label className="w-full flex flex-col items-start text-sm">
              Username
              <input
                className="w-full mt-2 border border-[#EFEFEF] bg-transparent rounded-md pl-2 text-lg"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="w-full flex flex-row items-center justify-between  pt-3 border-[#EFEFEF] ">
            <NavLink onClick={resetGame} to="/">
              <Button variant="solid" size="md" color="danger" type="button">
                CANCEL
              </Button>
            </NavLink>
            <span className="p-2"></span>
            <Button variant="solid" size="md" color="success" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GameEnd;
