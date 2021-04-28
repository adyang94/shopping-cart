import React, {Components, useState} from 'react';

// import WelcomePage from './components/WelcomePage';
// import ProductList from './components/ProductList';
// import ProductPage from './components/ProductPage';
// import Checkout from './components/Checkout';


function Header (props) {
  

  return(
    <div className = 'headerCtn'>
      
      {props.displayedName}
      
    </div>
  )
}

export default Header;