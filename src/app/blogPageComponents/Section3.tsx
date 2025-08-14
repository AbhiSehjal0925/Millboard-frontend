import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section3: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: isMobile ? '24px 16px' : '2rem 1rem',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: isMobile ? '24px 16px' : '40px',
  };

  const eleganceMainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '49px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '50%',
    color: 'black',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    fontWeight: 500,
    color: 'black',
    marginBottom: isMobile ? '24px' : '0',
  };

  const paragraphStyle: React.CSSProperties = {
    marginTop: isMobile ? '24px' : '23px',
    lineHeight: 1.8,
    color: '#333',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    width: isMobile ? '100%' : '80%',
    marginBottom: isMobile ? '24px' : '0',
  };

  const buttonStyle: React.CSSProperties = {
    background: '#D3A069',
    color: 'white',
    borderRadius: '50px',
    padding: isMobile ? '12px 24px' : '8px 16px',
    marginTop: isMobile ? '24px' : '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
    transition: 'background 0.3s ease',
  };

  const imageContainerStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '40%',
    marginTop: isMobile ? '24px' : '0',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={eleganceMainStyle}>
          <div style={contentStyle}>
            <h1 style={headingStyle}>Linear — The Geometry of Elegance</h1>
            <p style={paragraphStyle}>
              The Linear pattern in Modello captures the harmony of precise, clean lines, bringing a sleek and structured aesthetic to outdoor spaces.
              This design is ideal for contemporary settings, offering versatility across various applications. Whether used for full deck layouts to achieve
              a seamless, cohesive appearance, zonal demarcations to define specific areas such as dining or entertainment spaces, or as feature inlays that
              add striking focal points, Linear provides a refined modern touch. The range of available colours, including Smoked Oak, Golden Oak, and Brushed Basalt,
              allows for seamless integration into different design themes. Additionally, its durable composition features a Lastane™ surface layer, making it highly
              slip resistant, and a core blend of natural minerals bonded with polymer resin, ensuring long-lasting performance. More than just decking, Linear is an
              architectural statement that merges practicality with aesthetic excellence.
            </p>
            <button
              style={buttonStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#b9864d')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#D3A069')}
            >
              Explore Linear
            </button>
          </div>
          <div style={imageContainerStyle}>
            <Image
              src="/imagesForBlogPage/Union (2).png"
              alt="Elegance Linear Setting"
              width={600}
              height={400}
              style={imageStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
