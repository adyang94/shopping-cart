/* eslint-disable react/prop-types */
import React, { Components, useState } from 'react';

function Header(props) {
  const { displayedName } = props;
  const header = document.querySelector('.header');

  switch (displayedName) {
    case 'WELCOME PACER\'S FANS':

      header.style.backgroundColor = 'rgba(0, 45, 98)';
      break;
    default:

      header.style.backgroundColor = 'blue';
  }

  return (
    <div className="header">

      {displayedName}

    </div>
  );
}

export default Header;
