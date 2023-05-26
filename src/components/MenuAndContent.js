import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from '../js/RequireAuth';
import SidebarMenu from '../components/SidebarMenu';

import Home from '../Pages/Home';
import Dashboard from './Dashboard';
import About from '../Pages/About';
import Passage from '../Pages/Passage';
import Test from '../Pages/Test';

const MenuAndContent = () => {

    // 1) <a> or <Link>
    // 2) Route or Domain
    // 3) Button Label
    const mainMenu = [
        ['link', '/', 'Home'],
        ['link', '/about', 'About'],
        ['link', '/passage', 'Passage Login'],
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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
            <Route path="/passage" element={<RequireAuth><Passage /></RequireAuth>} />
            <Route path="/test" element={<RequireAuth><Test /></RequireAuth>} />
        </Routes>
    </div>
    </div>
  );
};

export default MenuAndContent;
