/* eslint-disable global-require */
import React from 'react';
import logo from '../assets/pacersLogo.jpg';

function WelcomePage() {
  return (
    <div className="welcomePageCtn">

      <div className="logoCtn">
        <img alt="Pacer's Logo" src={logo} className="logo" />
      </div>
      <div className="welcomePageFooter">Welcome Pacers Fans</div>
    </div>
  );
}

export default WelcomePage;
