// Standard Imports
import React from 'react';
import './styles.css';

// Page Specific Imports
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import MenuTest from './Pages/MenuTest';
import SidebarMenu from './components/SidebarMenu';



function App() {
  return (
    <div className='nav-content-grid'>
      {/* Website Menu */}
      <div className='nav-container'>
        <SidebarMenu menuName="Page Navigator"/>
      </div>

      {/* Website content is rendered here */}
      <div>
        <div className="App" />

        {/* React Router (invisible) */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/menutest">
            <MenuTest />
          </Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
