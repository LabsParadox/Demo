import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ menuName, subOptions }) => {
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
        {subOptions.map((option, index) => {
          const [linkType, link, text] = option;
          const Tag = linkType === 'a' ? 'a' : Link;
          const linkProps = linkType === 'a' ? { href: link } : { to: link };

          return (
            <Tag {...linkProps} className="sub-option" key={index}>
              {text}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarMenu;