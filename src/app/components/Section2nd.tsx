'use client';

import React, { useEffect, useState } from 'react';

// Define the section data structure
interface Section2Data {
  background: {
    image: string;
    overlay: string;
  };
  content: {
    heading1: string;
    heading2: string;
    paragraph: string;
  };
  image: {
    src: string;
    alt: string;
  };
  colors: {
    text: string;
    wavePrimary: string;
    waveSecondary: string;
  };
  breakpoints: {
    tablet: number;
    mobile: number;
  };
  shadows: {
    inset: string;
    webkit: string;
    moz: string;
  };
}

// Default section data (fallback)
const defaultSection2Data: Section2Data = {
  background: {
    image: '/images/section2stImg1.png',
    overlay: 'rgba(0,0,0,0.57)'
  },
  content: {
    heading1: 'Reasons to choose?',
    heading2: 'Precision in every detail, power in every product',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  image: {
    src: '/images/section2stImg2.png',
    alt: 'Section 2 Image'
  },
  colors: {
    text: '#fff',
    wavePrimary: '#D3A069',
    waveSecondary: '#ffffff'
  },
  breakpoints: {
    tablet: 1024,
    mobile: 600
  },
  shadows: {
    inset: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset',
    webkit: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset',
    moz: '-36px -2px 110px 83px rgba(0,0,0,0.57) inset'
  }
};

interface Section2Props {
  sectionData?: Section2Data;
}

const Section2nd: React.FC<Section2Props> = ({ sectionData = defaultSection2Data }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth <= sectionData.breakpoints.tablet;
  const isMobile = windowWidth <= sectionData.breakpoints.mobile;

  const section2Style: React.CSSProperties = {
    width: '100%',
    backgroundImage: `url("${sectionData.background.image}")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '1.2rem' : '2rem',
    padding: isMobile ? '18px 0' : isTablet ? '40px 0' : '60px 0',
    boxSizing: 'border-box',
    position: 'relative',
    boxShadow: sectionData.shadows.inset,
    WebkitBoxShadow: sectionData.shadows.webkit,
    MozBoxShadow: sectionData.shadows.moz,
  };

  const section2Container: React.CSSProperties = {
    margin: '0 auto',
    maxWidth: '1850px',
    width: '100%',
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '1.2rem' : '2rem',
    padding: '0',
    boxSizing: 'border-box',
  };

  const section2bgStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const section2imgStyle: React.CSSProperties = {
    backgroundImage: `url("${sectionData.image.src}")`,
    backgroundRepeat: 'no-repeat',
    borderRadius: isMobile ? '1rem' : '2rem',
    width: '100%',
    height: isMobile ? '65vw' : isTablet ? '45vw' : '35vw', // bigger on mobile
    maxHeight: isMobile ? '320px' : isTablet ? '360px' : '620px',
    minHeight: isMobile ? '220px' : isTablet ? '240px' : '280px', // ⬅ raised minHeight
    backgroundSize: 'cover',   // fill box
    backgroundPosition: isMobile ? 'contain' : 'center',
    marginLeft: isTablet ? '0' : '40px',
  };



  const section2textStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: isTablet ? 'center' : 'flex-start',
    textAlign: isTablet ? 'center' : 'left',
    justifyContent: 'center',
    borderRadius: '1rem',
    padding: isMobile ? '1.1rem 0.7rem' : isTablet ? '2rem 1.2rem' : '2.5rem 2rem',
    marginLeft: 0,
    marginTop: isTablet ? '1rem' : 0,
    zIndex: 2,
    color: sectionData.colors.text,
  };

  const heading1Style: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(1.2rem, 4vw, 1.6rem)' : 'clamp(2rem, 5vw, 3.8rem)',
    fontWeight: 500,
    marginBottom: '0.5rem',
  };

  const heading2Style: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(1rem, 3.5vw, 1.2rem)' : 'clamp(1.3rem, 3vw, 1.8rem)',
    fontWeight: 500,
    marginBottom: '1.1rem',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: isMobile ? 'clamp(0.85rem, 3vw, 1rem)' : 'clamp(1rem, 2vw, 1.25rem)',
    lineHeight: 1.7,
    fontWeight: 300,
    marginBottom: 0,
  };

  const pngStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '-1px',
    width: '100%',
  };

  return (
    <section style={section2Style}>
      <div style={section2Container}>
        <div style={section2bgStyle}>
          <div style={section2imgStyle}></div>
        </div>

        <div style={section2textStyle}>
          <h2 style={heading1Style}>{sectionData.content.heading1}</h2>
          <h3 style={heading2Style}>{sectionData.content.heading2}</h3>
          <p style={paragraphStyle}>
            {sectionData.content.paragraph}
          </p>
        </div>
      </div>

      <svg style={pngStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
        <path fill={sectionData.colors.wavePrimary} stroke="none" d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
        <path fill={sectionData.colors.waveSecondary} stroke="none" d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
      </svg>
    </section>
  );
};

export default Section2nd;
