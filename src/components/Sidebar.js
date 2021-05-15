/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ closeSidebar, setdisplayedName }) {
  return (

    <div id="sidebar" className="sidebarClose">
      <Link
        to="/"
        onClick={() => {
          closeSidebar();
          setdisplayedName("WELCOME PACER'S FANS");
        }}
        id="sidebarHomepage"
      >
        Homepage
      </Link>
      <br />

      <Link
        to="/productlist"
        onClick={() => {
          closeSidebar();
          setdisplayedName('PRODUCT LIST');
        }}
        id="sidebarProductlist"
      >
        Product List
      </Link>
      <br />

      <Link
        to="/productpage"
        onClick={() => {
          closeSidebar();
          setdisplayedName('PRODUCT PAGE');
        }}
      >
        Product Page
      </Link>
      <br />

      <Link
        to="/checkout"
        onClick={() => {
          closeSidebar();
          setdisplayedName('CHECKOUT');
        }}
      >
        Checkout
      </Link>
      <br />

      <button type="button" className="closeSidebarBtn" onClick={closeSidebar}>&times;</button>
    </div>
  );
}
export default Sidebar;
