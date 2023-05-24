import React from 'react';
import Dashboard from './components/Dashboard';
import { Route, Switch, Link } from "react-router-dom";

import Home from './Home';
import About from './About';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      
      <Dashboard />
    </div>
  );
}

export default App;
