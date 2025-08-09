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
    minHeight: isTablet ? '60vh' : '70vh',
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
  };

  const section2bgStyle: React.CSSProperties = {
    height: '100%',
    width: isTablet ? '90%' : '50%',
    maxWidth: isTablet ? '700px' : '600px',
    minWidth: isTablet ? '0' : '320px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const section2imgStyle: React.CSSProperties = {
    backgroundImage: 'url("/images/section2stImg2.png")',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    borderRadius: isMobile ? '1rem' : '2rem',
    width: '100%',
    height: isMobile ? '48vw' : isTablet ? '55vw' : '60vw',
    maxHeight: isMobile ? '180px' : isTablet ? '320px' : '572px',
    minHeight: isMobile ? '80px' : isTablet ? '160px' : '220px',
  };

  const section2textStyle: React.CSSProperties = {
    height: '100%',
    width: isTablet ? '90%' : '35%',
    maxWidth: isTablet ? '700px' : '500px',
    minWidth: isTablet ? '0' : '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: '1rem',
    padding: isMobile ? '1.1rem 0.7rem' : isTablet ? '2rem 1.2rem' : '2.5rem 2rem',
    marginLeft: isTablet ? 0 : '2vw',
    marginTop: isTablet ? '0.5rem' : 0,
    zIndex: 2,
    background: '#000000a2',
    color: '#fff',
  };

  const heading1Style: React.CSSProperties = {
    fontSize: isMobile ? '1.3rem' : '2.2rem',
    fontWeight: 700,
    marginBottom: '0.5rem',
  };

  const heading2Style: React.CSSProperties = {
    fontSize: isMobile ? '1.05rem' : '1.35rem',
    fontWeight: 500,
    marginBottom: '1.1rem',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: isMobile ? '0.85rem' : '1.05rem',
    lineHeight: 1.7,
    marginBottom: 0,
  };

  const pngStyle: React.CSSProperties = {
    backgroundImage: 'url("/png/section2ndPng2.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '60%',
    position: 'absolute',
    bottom: '-200px',
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

      <div style={pngStyle}></div>
    </section>
  );
};

export default Section2nd;
