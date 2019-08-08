import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Private from './pages/Private.js';
import Details from './pages/Details.js';
import NotFound from './pages/NotFound.js';
import Nav from './components/Nav.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/private' exact component={Private} />
        <Route path='/private/:id' exact component={Details} />
        <Route component={NotFound}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
