import './App.css';
import React, {Components, useState} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Header from './components/Header';



function App() {
  
  const closeSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('sidebarOpen');
    sidebar.classList.add('sidebarClose');
  }
  const openSidebar = () => {
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.remove('sidebarClose');
    sidebar.classList.add('sidebarOpen');
  }
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div>
      
      <BrowserRouter>
        <div class="toggleContainer" style = {{cursor: "pointer"}} onClick = {openSidebar}>
          <div class="navLine"></div>
          <div class="navLine"></div>
          <div class="navLine"></div>
        </div>

        <div id = 'sidebar' className = 'sidebarClose' >
          <Link to ="/">Homepage</Link>
          <br/>
          <Link to = "/productlist">Product List</Link>
          <br/>
          <Link to = "/checkout">Checkout</Link>
          <br/>
          <Link to= "/productpage">Product Page</Link>
          <br/>
          <button className = 'closeSidebarBtn' onClick = {closeSidebar}>&times;</button>
        </div>
        <Header />
        <Switch>
          <Route exact path = '/' component = {WelcomePage} />
          <Route exact path = '/productlist' component = {ProductList} />
          <Route exact path = '/productpage' component = {ProductPage} />
          <Route exact path = '/checkout' component = {Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
