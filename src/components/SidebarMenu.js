import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SidebarMenu = ({ menuName }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sidebar-menu">
      <button className={`menu-button ${expanded ? 'expanded' : ''}`} onClick={handleExpand}>
        {menuName}
      </button>
      <div className={`sub-options ${expanded ? 'expanded' : ''}`}>
        <Link to="/" className="sub-option">Home</Link>
        <Link to="/about" className="sub-option">About</Link>
        <Link to="/Menu Test" className="sub-option">Menu Test</Link>
      </div>
    </div>
  );
};

export default SidebarMenu;