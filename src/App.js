import './App.css';
import React, {Components} from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Header from './components/Header';



function App() {
  return (
    <div>
      
      <BrowserRouter>
        
        <Link to ="/">Homepage</Link>
        <br/>
        <Link to = "/productlist">Product List</Link>
        <br/>
        <Link to = "/checkout">Checkout</Link>
        <br/>
        <Link to= "/productpage">Product Page</Link>
        <br/>
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
