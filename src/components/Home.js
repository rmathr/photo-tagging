import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import background2 from './assets/images/background2.jpg';

const Home = () => {
  return (
    <>
      <div className="w-full h-[10dvh] bg-black text-white flex flex-row items-center justify-around uppercase">
        <NavLink to="/leaderboard">
          <p className="min-w-[135px]">Leaderboard</p>
        </NavLink>
        <p className="min-w-[135px] text-3xl">
          Where's... <span className="text-red-800 italic font-bold">Everyone?</span>
        </p>
        <NavLink to="/about">
          <p className="min-w-[135px]">About</p>
        </NavLink>
      </div>
      <div className="w-full h-[90dvh] flex flex-col items-center pt-6">
        <GradientCover>
          <Button size="md" variant="solid" color="success">
            <NavLink to="/game">Play now</NavLink>
          </Button>
        </GradientCover>
      </div>
    </>
  );
};

export default Home;

function GradientCover(props) {
  return (
    <Card sx={{ width: '50vw', minHeight: '70dvh' }}>
      <CardCover>
        <img src={background2} loading="lazy" alt="" />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 500px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Typography level="h2" fontSize="2xl" textColor="#fff" mb={1}>
          Find the hidden characters!
        </Typography>
        {props.children}
      </CardContent>
    </Card>
  );
}
