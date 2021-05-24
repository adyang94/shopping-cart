import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  const [displayedName, setdisplayedName] = useState("WELCOME PACER'S FANS");
  const [cartItems, setCartItems] = useState(new Array(5).fill(0));
  const [numItems, setNumItems] = useState(0); // number of items in cart

  const closeSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('sidebarOpen');
    sidebar.classList.add('sidebarClose');
  };
  const openSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('sidebarClose');
    sidebar.classList.add('sidebarOpen');
  };
  const addToCart = (itemID) => {
    console.log(cartItems);
    console.log(`itemID: ${itemID}`);
    const newArr = [...cartItems];
    newArr[itemID] += 1;
    setCartItems(newArr);
    setNumItems(newArr.reduce((acc, val) => (acc + val)));
    console.log(cartItems);
    console.log(`numItems: ${numItems}`);
  };
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="toggleContainer" onClick={openSidebar} onKeyDown={openSidebar} role="button" tabIndex="0">
        <div className="navLine" />
        <div className="navLine" />
        <div className="navLine" />
      </div>
      <BrowserRouter>
        <div className="body">
          <div className="headerCtn">
            <Header
              displayedName={displayedName}
            />
          </div>
          <Sidebar
            closeSidebar={closeSidebar}
            setdisplayedName={setdisplayedName}
          />

          <div className="switch">
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route
                exact
                path="/productlist"
                render={() => (
                  <ProductList
                    addToCart={addToCart}
                    numItems={numItems}
                  />

                )}
              />
              <Route exact path="/productpage" component={ProductPage} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
