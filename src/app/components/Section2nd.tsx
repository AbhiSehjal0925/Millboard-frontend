'use client';

import React, { useEffect, useState } from 'react';

const Section2nd = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 600;

  const section2Style: React.CSSProperties = {
    width: '100%',
    backgroundImage: 'url("/images/section2stImg1.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '1.2rem' : '2rem',
    padding: isMobile ? '18px 0.5rem' : isTablet ? '40px 2vw' : '60px 4vw',
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset',
    WebkitBoxShadow: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset',
    MozBoxShadow: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset',
  };

  const section2bgStyle: React.CSSProperties = {
    height: '100%',
    width: isTablet ? '90%' : '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const section2imgStyle: React.CSSProperties = {
    backgroundImage: 'url("/images/section2stImg2.png")',
    backgroundRepeat: 'no-repeat',
    borderRadius: isMobile ? '1rem' : '2rem',
    width: '100%',
    height: isMobile ? '48vw' : isTablet ? '55vw' : '60vw',
    maxHeight: isMobile ? '180px' : isTablet ? '320px' : '620px',
    minHeight: isMobile ? '80px' : isTablet ? '160px' : '220px',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
  };

  const section2textStyle: React.CSSProperties = {
    height: '100%',
    width: isTablet ? '90%' : '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: '1rem',
    padding: isMobile ? '1.1rem 0.7rem' : isTablet ? '2rem 1.2rem' : '2.5rem 2rem',
    marginLeft: isTablet ? 0 : '2vw',
    marginTop: isTablet ? '0.5rem' : 0,
    zIndex: 2,
    color: '#fff',
  };

  const heading1Style: React.CSSProperties = {
    fontSize: isMobile ? '1.3rem' : '60px',
    fontWeight: 500,
    marginBottom: '0.5rem',
  };

  const heading2Style: React.CSSProperties = {
    fontSize: isMobile ? '1.05rem' : '30px',
    fontWeight: 500,
    marginBottom: '1.1rem',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : '20px',
    lineHeight: 1.8,
    fontWeight: 'lighter',
    marginBottom: 0,
  };

  const pngStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-1px',
    width: '100%',
  };

  return (
    <section style={section2Style}>
      <div style={section2bgStyle}>
        <div style={section2imgStyle}></div>
      </div>

      <div style={section2textStyle}>
        <h2 style={heading1Style}>Reasons to choose?</h2>
        <h3 style={heading2Style}>Precision in every detail, power in every product</h3>
        <p style={paragraphStyle}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <svg style={pngStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
        <path fill="#D3A069" stroke='none' d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
        <path fill="#ffffff" stroke='none' d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
      </svg>
    </section>
  );
};

export default Section2nd;