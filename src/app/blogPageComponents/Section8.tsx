import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section8 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: isMobile ? '300px' : 'clamp(300px, 50vw, 600px)',
    padding: isMobile ? '24px 16px' : '0',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const playButtonStyle: React.CSSProperties = {
    width: isMobile ? '60px' : 'clamp(50px, 8vw, 80px)',
    height: isMobile ? '60px' : 'clamp(50px, 8vw, 80px)',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  };

  const triangleStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: isMobile ? '14px solid #000' : 'clamp(10px, 2vw, 18px) solid #000',
    borderTop: isMobile ? '10px solid transparent' : 'clamp(7px, 1.4vw, 12px) solid transparent',
    borderBottom: isMobile ? '10px solid transparent' : 'clamp(7px, 1.4vw, 12px) solid transparent',
    marginLeft: isMobile ? '4px' : 'clamp(3px, 0.5vw, 6px)',
  };

  const handlePlayClick = () => {
    console.log('Play video');
    // Later replace this with video player logic
  };

  return (
    <section style={containerStyle}>
      <Image
        src="/imagesForBlogPage/Rectangle 6740.png"
        alt="Video Thumbnail"
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <div style={overlayStyle} onClick={handlePlayClick}>
        <div style={playButtonStyle}>
          <div style={triangleStyle}></div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
