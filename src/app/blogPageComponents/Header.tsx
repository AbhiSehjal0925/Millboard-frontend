import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const bannerStyle: React.CSSProperties = {
    width: '100%',
    minHeight: isMobile ? '400px' : '588px',
    backgroundImage: "url('/imagesForBlogPage/Rectangle%206.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    overflow: 'hidden',
    padding: isMobile ? '32px 16px' : '2rem 1rem',
  };

  const contentStyle: React.CSSProperties = {
    zIndex: 1,
    textAlign: 'center',
    maxWidth: '1200px',
    width: '100%',
    padding: isMobile ? '16px' : '0',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 5vw, 3rem)',
    marginBottom: isMobile ? '16px' : '0.5rem',
    fontWeight: 500,
    lineHeight: 1.2,
    textShadow: '4px 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
    marginTop: isMobile ? '16px' : '10px',
    color: '#ffffffce',
  };

  return (
    <header style={bannerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Introducing Modello by Millboard</h1>
        <p style={paragraphStyle}>A Revolution in Composite Decking</p>
      </div>

      <svg style={{
        position: 'absolute',
        bottom: '-1px',
        zIndex: '121',
        transform: 'rotateY(180deg)'
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
        <path fill="#D3A069" stroke='none' d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
        <path fill="#ffffff" stroke='none' d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
      </svg>

    </header>
  );
};

export default Header;
