import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';

import Home from '../src/components/pages/home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
