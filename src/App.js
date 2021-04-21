import './App.css';
import React, {Components} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path = '/welcomepage' component = {WelcomePage} />
        <Route path = '/productlist' component = {ProductList} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
