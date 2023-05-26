import React from 'react';

import { Route, Switch } from "react-router-dom";
import SidebarMenu from '../components/SidebarMenu';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Passage from '../Pages/Passage';
import Google from '../Pages/Google';
import Test from '../Pages/Test';

const MenuAndContent = () => {

    // 1) <a> or <Link>
    // 2) Route or Domain
    // 3) Button Label
    const mainMenu = [
        ['link', '/', 'Home'],
        ['link', '/about', 'About'],
        ['link', '/passage', 'Passage Login'],
        ['link', '/google', 'Google Login'],
        ['a', 'https://paradoxlabs.co', 'Paradox Website'],
      ];

      const socials = [
        ['a', 'https://youtube.com', 'YouTube'],
        ['a', 'https://tiktok.com', 'TikTok'],
        ['a', 'https://instagram.com', 'Instagram'],
        ['a', 'https://facebook.com', 'Facebook'],
        ['a', 'https://snap.com', 'Snapchat'],
        ['a', 'https://twitter.com', 'Twitter'],
        ['a', 'https://analytics.google.com', 'Google Analytics'],
      ];

    return (
    <div className="nav-content-grid ">
        {/* Website Menu */}
        <div className='nav-container'>
        <SidebarMenu menuName="Menu" subOptions={mainMenu} />
        <SidebarMenu menuName="Socials" subOptions={socials} />
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

                <Route path="/passage">
                    <Passage />
                </Route>

                <Route path="/google">
                    <Google />
                </Route>

                <Route path="/test">
                    <Test />
                </Route>

            </Switch>
        </div>
    </div>
  );
};

export default MenuAndContent;
