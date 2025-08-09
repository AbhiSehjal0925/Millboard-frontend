import React, { useEffect, useState } from 'react';

const Section2 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const sectionStyle = {
    width: '100%',
    minHeight: '803px',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    overflow: 'hidden',
    padding: '2rem 1rem',
    background:'#efcfac'
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding:'40px'
  };

  const featuresMainStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '2rem' : '70px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const featuresLeftStyle = {
    flex: 1,
    maxWidth: '600px',
    width: '100%',
  };

  const featuresRightStyle = {
    flex: 1,
    color: 'black',
  };

  const featuresContentStyle = {
    color: 'black',
  };

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    color: 'black',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    color: 'black',
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontWeight: 500,
    marginTop: '1rem',
    marginBottom: '0.5rem',
  };

  const listItemStyle = {
    color: 'black',
    marginBottom: '1rem',
    lineHeight: 1.5,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={featuresMainStyle}>
          <div style={featuresLeftStyle}>
            <img
              src="/imagesForBlogPage/Rectangle 6733 (1).png"
              width={600}
              height={400}
              style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
              alt="Key Features"
            />
          </div>
          <div style={featuresRightStyle}>
            <div style={featuresContentStyle}>
              <h1 style={headingStyle}>Key Features at a Glance</h1>
              <ul style={{ paddingLeft: 0, listStyle: 'none' }}>
                <p style={paragraphStyle}>World First Patterned Decking</p>
                <li style={listItemStyle}>
                  No other company offers the unique patterned designs that Modello introduces, making it a global innovation in decking.
                </li>
                <p style={paragraphStyle}>Two Signature Styles</p>
                <li style={listItemStyle}>
                  No other company offers the unique patterned designs that Modello introduces, making it a global innovation in decking.
                </li>
                <p style={paragraphStyle}>Extensive Colour options</p>
                <li style={listItemStyle}>
                  With ten striking shades ranging from Golden Oak to Brushed Basalt, Modello offers a variety of choices to complement any outdoor setting.
                </li>
                <p style={paragraphStyle}>Unmatched Customization</p>
                <li style={listItemStyle}>
                  With ten striking shades ranging from Golden Oak to Brushed Basalt, Modello offers a variety of choices to complement any outdoor setting.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
