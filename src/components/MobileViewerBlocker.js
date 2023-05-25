import React, { useEffect, useState } from 'react';

import MenuAndContent from './MenuAndContent';

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
    // Links to a seperate component with Menu Sidebar and all content
    <MenuAndContent />
  );
};

export default MobileViewerBlocker;
