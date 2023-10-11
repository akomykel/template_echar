import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Login from './Login';
import { getHomeSettings } from '../utils/Settings';

const Home = () => {
  const { hasLandingPage } = getHomeSettings();

  return (
    <div className="home">
      { hasLandingPage ? <LandingPage /> : <Login /> }
    </div>
  );
}
 
export default Home;