import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWidth(); // Initial check
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    padding: isMobile ? '0' : '2rem 1rem',
  };

  const herosecContentStyle: React.CSSProperties = {
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: isMobile ? '24px' : '2rem',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: isMobile ? 'center' : 'left',
    padding: isMobile ? '60px 16px' : '40px 70px',
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
    lineHeight: 1.6,
    color: '#333',
    // margin: isMobile ? '0 0 24px 0' : '40px',
    fontWeight: 500,
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: isMobile ? '100%' : '700px',
    height: 'auto',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <section style={containerStyle}>
      <div style={herosecContentStyle}>
        <div style={textStyle}>
          <p>
            Modello by Millboard is redefining what&apos;s possible in outdoor design.
            As the world&apos;s first patterned composite decking, it brings together
            cutting-edge innovation, striking aesthetics, and exceptional durability.
            With two distinct styles—Linear and Contour—and a thoughtfully curated
            colour palette, Modello offers a new level of customisation for homeowners
            and design professionals alike. Whether you&apos;re envisioning bold geometric
            layouts or more fluid, organic expressions, Modello delivers a premium
            resin mineral composite decking as creative and unique as your imagination.
          </p>
        </div>
        <div style={imageContainerStyle}>
          <Image
            src="/imagesForBlogPage/Rectangle%206730.png"
            alt="Modello Deck"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
