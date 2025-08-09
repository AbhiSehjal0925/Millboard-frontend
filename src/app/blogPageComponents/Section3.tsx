import React, { useEffect, useState } from 'react';

const Section3 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const sectionStyle = {
    width: '100%',
    minHeight: '803px',
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '2rem 1rem',
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding:'40px'
  };

  const eleganceMainStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '49px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contentStyle = {
    width: isMobile ? '100%' : '50%',
    color: 'black',
  };

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 5vw, 2.3rem)',
    fontWeight: 700,
    color: 'black',
  };

  const paragraphStyle = {
    marginTop: '23px',
    lineHeight: 1.8,
    color: 'black',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  };

  const buttonStyle = {
    background: '#D3A069',
    color: 'white',
    borderRadius: '20px',
    padding: '4px 14px',
    marginTop: '40px',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  };

  const imageContainerStyle = {
    width: isMobile ? '100%' : '50%',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    objectFit: 'cover' as const,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={eleganceMainStyle}>
          <div style={contentStyle}>
            <h1 style={headingStyle}>Linear The Geometry of Elegance</h1>
            <p style={paragraphStyle}>
              The Linear pattern in Modello captures the harmony of precise, clean lines, bringing a sleek and structured aesthetic to outdoor spaces.
              This design is ideal for contemporary settings, offering versatility across various applications. Whether used for full deck layouts to achieve
              a seamless, cohesive appearance, zonal demarcations to define specific areas such as dining or entertainment spaces, or as feature inlays that
              add striking focal points, Linear provides a refined modern touch. The range of available colours, including Smoked Oak, Golden Oak, and Brushed Basalt,
              allows for seamless integration into different design themes. Additionally, its durable composition features a Lastane™ surface layer, making it highly
              slip resistant, and a core blend of natural minerals bonded with polymer resin, ensuring long-lasting performance. More than just decking, Linear is an
              architectural statement that merges practicality with aesthetic excellence.
            </p>
            <button style={buttonStyle}>Explore Linear</button>
          </div>
          <div style={imageContainerStyle}>
            <img
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
