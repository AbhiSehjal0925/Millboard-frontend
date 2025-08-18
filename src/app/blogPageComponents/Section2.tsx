import Image from 'next/image';
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

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    overflow: 'hidden',
    padding: isMobile ? '48px 16px' : '80px',
    background: '#efcfac',
    paddingBottom: '320px',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: isMobile ? '24px 16px' : '40px',
  };

  const featuresMainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '24px' : '70px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const featuresLeftStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: isMobile ? '100%' : '600px',
    width: '100%',
    marginBottom: isMobile ? '24px' : '0',
  };

  const featuresRightStyle: React.CSSProperties = {
    flex: 1,
    color: 'black',
    zIndex: '1000',
  };

  const featuresContentStyle: React.CSSProperties = {
    color: 'black',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    color: 'black',
    marginBottom: isMobile ? '24px' : '1.5rem',
  };

  const paragraphStyle: React.CSSProperties = {
    color: 'black',
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontWeight: 500,
    marginTop: isMobile ? '24px' : '1rem',
    marginBottom: isMobile ? '16px' : '0.5rem',
  };

  const listItemStyle: React.CSSProperties = {
    color: 'black',
    marginBottom: isMobile ? '24px' : '1rem',
    lineHeight: 1.5,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={featuresMainStyle}>
          <div style={featuresLeftStyle}>
            <Image
              src="/imagesForBlogPage/Rectangle%206733%20(1).png" // encoded spaces and parentheses
              width={600}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
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

      <svg xmlns="http://www.w3.org/2000/svg" width="2000" height="451" viewBox="0 0 1440 451" fill="none" style={{
        position: 'absolute',
        bottom: '-2px',
        zIndex: '121',
      }}>
        <g filter="url(#filter0_f_143_2)">
          <path d="M-335 228.596C-335 161.123 -268.64 113.665 -204.79 135.473L-175.358 145.526C-143.132 156.532 -107.755 153.407 -77.9575 136.922L-59.1315 126.506C-18.1876 103.854 30.3095 99.1703 74.8316 113.569L152.623 138.726C200.44 154.19 252.367 150.726 297.706 129.046C348.314 104.847 406.857 103.456 458.557 125.223L466.85 128.715C518.778 150.578 577.187 151.318 629.652 130.779L653.263 121.536C703.152 102.005 759.393 103.638 808.262 125.595C860.446 149.04 920.894 148.86 972.707 124.605C1018.76 103.046 1071.38 100.183 1119.5 116.619L1180.91 137.593C1228.67 153.907 1280.59 153.301 1327.96 135.877L1368.85 120.839C1420.99 101.66 1478.46 102.919 1529.71 124.362L1587.26 148.439C1609.13 157.591 1633.85 157.077 1655.33 147.024L1685.45 132.921C1727.15 113.4 1775 143.833 1775 189.875C1775 265.607 1713.61 327 1637.87 327H-236.596C-290.943 327 -335 282.943 -335 228.596Z" fill="#D3A069" />
        </g>
        <path d="M-335 303.481C-335 220.084 -248.15 165.102 -172.768 200.776C-142.338 215.177 -107.087 215.342 -76.5225 201.227L77.6201 130.04C114.057 113.212 157.313 124.784 180.48 157.558C206.449 194.294 256.91 203.746 294.414 178.898L325.359 158.395C357.952 136.801 398.945 132.212 435.506 146.065L482.515 163.877C524.485 179.779 570.723 180.349 613.072 165.485L670.306 145.396C707.302 132.41 748.477 142.67 775.054 171.497C803.692 202.558 848.983 211.828 887.522 194.515L965.448 159.509C1016.19 136.712 1073.76 134.29 1126.24 152.741L1260.82 200.058C1302.25 214.623 1348.27 206.624 1382.36 178.934C1423.06 145.863 1479.97 141.39 1525.34 167.694L1582.05 200.571C1606.32 214.638 1636.45 213.868 1659.98 198.604C1709.5 166.483 1775 201.975 1775 261C1775 365.934 1689.93 451 1585 451H-208.235C-278.245 451 -335 394.245 -335 324.235V303.481Z" fill="white" />
        <defs>
          <filter id="filter0_f_143_2" x="-440" y="0.359863" width="2320" height="431.64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="52.5" result="effect1_foregroundBlur_143_2" />
          </filter>
        </defs>
      </svg>
    </section>

  );
};

export default Section2;
