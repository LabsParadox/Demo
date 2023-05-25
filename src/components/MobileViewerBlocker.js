import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SidebarMenu from '../components/SidebarMenu';

import Home from '../Pages/Home';
import About from '../Pages/About';
import MenuTest from '../Pages/MenuTest';

const MobileViewerBlocker = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  if (isMobile) {
    return (
      <div className="mobile-message">
        <p>Lets not do that! We don't support mobile yet folks. 🤡</p>
      </div>
    );
  }

  return (
    <div className="nav-content-grid ">

      {/* Website Menu */}
      <div className='nav-container'>
        <SidebarMenu menuName="Page Navigator"/>
      </div>

      {/* Pages are rendered with React Router */}
      <div>
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
};

export default MobileViewerBlocker;
