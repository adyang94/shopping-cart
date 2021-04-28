import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter, Switch, Route, Link,
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Header from './components/Header';

function App() {
  const [displayedName, setdisplayedName] = useState("WELCOME PACER'S FANS");

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
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>

      <BrowserRouter>
        <div className="body">
          <div className="toggleContainer" style={{ cursor: 'pointer' }} onClick={openSidebar}>
            <div className="navLine" />
            <div className="navLine" />
            <div className="navLine" />
          </div>
          <div className="headerCtn">
            <Header
              displayedName={displayedName}
            />
          </div>
          <div id="sidebar" className="sidebarClose">
            <Link
              to="/welcomepage"
              onClick={() => {
                closeSidebar();
                setdisplayedName("WELCOME PACER'S FANS");
              }}
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
            >
              Product List
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

            <button type="button" className="closeSidebarBtn" onClick={closeSidebar}>&times;</button>
          </div>

          <div className="switch">
            <Switch>
              <Route exact path="/welcomepage" component={WelcomePage} />
              <Route exact path="/productlist" component={ProductList} />
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
