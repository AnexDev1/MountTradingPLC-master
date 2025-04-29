'use client';

import { useEffect, useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const ResponsiveNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false); // State to prevent flicker on initial load

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.visualViewport?.width || window.innerWidth;
      setIsMobile(viewportWidth <= 1024);
    };

    handleResize(); // Run on mount to set initial state

    window.visualViewport?.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on unmount
    return () => {
      window.visualViewport?.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Ensure the component is loaded before rendering
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // Don't render anything until the component is loaded
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
};

export default ResponsiveNavbar;
