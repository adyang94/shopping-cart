/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Header(props) {
  const { displayedName } = props;
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 45, 98)');
  const [fontColor, setFontColor] = useState('rgba(253, 187, 48)');

  useEffect(() => {
    switch (displayedName) {
      case "WELCOME PACER'S FANS":
        setFontColor('rgba(253, 187, 48)');
        setBackgroundColor('rgba(0, 45, 98)');
        break;
      case 'PRODUCT LIST':
        setFontColor('rgba(253, 187, 48)');
        setBackgroundColor('rgba(0, 45, 98)');
        break;
      case 'CHECKOUT':
        setFontColor('rgba(0, 45, 98)');
        setBackgroundColor('rgba(253, 187, 48)');
        break;
      case 'PRODUCT PAGE':
        setFontColor('rgba(253, 187, 48)');
        setBackgroundColor('rgba(0, 45, 98)');
        break;
      default:
        setFontColor('rgba(253, 187, 48)');
        setBackgroundColor('rgba(0, 45, 98)');
        break;
    }
  });

  return (
    <h4
      className="header"
      style={{
        color: `${fontColor}`,
        backgroundColor: `${backgroundColor}`,
      }}
    >

      {displayedName}

    </h4>
  );
}

export default Header;
