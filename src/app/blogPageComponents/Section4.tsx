import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section4 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle: React.CSSProperties = {
    backgroundImage: "url('/imagesForBlogPage/Rectangle 6736 (1).png')",
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: isMobile ? '24px 16px' : '2rem 1rem',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: isMobile ? '24px 16px' : '40px',
  };

  const flowMainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '116px',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  const contentStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '50%',
    color: 'black',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 5vw, 2.2rem)',
    fontWeight: 500,
    color: 'white',
    marginBottom: isMobile ? '24px' : '0',
  };

  const paragraphStyle: React.CSSProperties = {
    marginTop: isMobile ? '24px' : '17px',
    lineHeight: 1.8,
    fontSize: 'clamp(1rem, 2vw, 1rem)',
    color: '#ffffffee',
    marginBottom: isMobile ? '24px' : '0',
  };

  const buttonStyle: React.CSSProperties = {
    background: '#D3A069',
    color: 'white',
    borderRadius: '20px',
    padding: isMobile ? '12px 24px' : '4px 14px',
    marginTop: isMobile ? '24px' : '40px',
    border: '2px solid white',
    cursor: 'pointer',
    fontSize: 'clamp(1rem, 2vw, 1rem)',
  };

  const imageContainerStyle: React.CSSProperties = {
    width: isMobile ? '100%' : '25%',
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
        <div style={flowMainStyle}>
          <div style={contentStyle}>
            <h1 style={headingStyle}>Contour: The Artistry of Flow</h1>
            <p style={paragraphStyle}>
              Inspired by the gentle curves of nature, the Contour pattern introduces a sense of fluidity and movement to decking designs. This style creates organic,
              flowing layouts that bring a softer, artistic touch to outdoor spaces. Contour is ideal for defining zonal areas with a harmonious aesthetic, creating intricate
              feature inlays that act as captivating centrepieces, or constructing full deck layouts that appear dynamic and visually stunning. A versatile colour palette,
              including Antique Oak, Limed Oak, and Coppered Oak, ensures that every project can be tailored to the desired ambiance. With over 50 unique patterns, Contour allows
              limitless creativity, whether through symmetrical designs or bold, unconventional configurations. Engineered for durability, it boasts a Lastane™ surface which provides
              excellent resistance to slippages, weather and wear, and is paired with a reinforced polymer resin core for enduring strength. By choosing Modello Contour, homeowners
              and design professionals can enhance decking from a functional surface to a work of art – offering a distinctive, high-performance surface that seamlessly blends beauty,
              durability, and creative freedom.
            </p>
            <button style={buttonStyle} className="coolBeans">Modello Linear</button>
          </div>
          <div style={imageContainerStyle}>
            <Image
              src="/imagesForBlogPage/Subtract (2).png"
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

export default Section4;
