import React from 'react';

import { Route, Switch } from "react-router-dom";
import SidebarMenu from '../components/SidebarMenu';

import Home from '../Pages/Home';
import About from '../Pages/About';
import MenuTest from '../Pages/MenuTest';

const MenuAndContent = () => {
    const subOptions = [
        ['link', '/', 'Home'],
        ['link', '/about', 'About'],
        ['a', 'https://example.com', 'External Link'],
      ];

    return (
    <div className="nav-content-grid ">
        {/* Website Menu */}
        <div className='nav-container'>
        <SidebarMenu menuName="Menu" subOptions={subOptions} />
        <SidebarMenu menuName="Menu" subOptions={subOptions} />
        <SidebarMenu menuName="Menu" subOptions={subOptions} />
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

export default MenuAndContent;
