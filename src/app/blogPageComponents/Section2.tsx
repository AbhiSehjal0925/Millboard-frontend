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
    padding: '80px',
    background: '#efcfac',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    margin: '0 auto',
    padding: '40px',
  };

  const featuresMainStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '2rem' : '70px',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const featuresLeftStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: '600px',
    width: '100%',
  };

  const featuresRightStyle: React.CSSProperties = {
    flex: 1,
    color: 'black',
  };

  const featuresContentStyle: React.CSSProperties = {
    color: 'black',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    color: 'black',
    marginBottom: '1.5rem',
  };

  const paragraphStyle: React.CSSProperties = {
    color: 'black',
    fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
    fontWeight: 500,
    marginTop: '1rem',
    marginBottom: '0.5rem',
  };

  const listItemStyle: React.CSSProperties = {
    color: 'black',
    marginBottom: '1rem',
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

      {/* SVG Wave */}
      <svg
        width="100%"
        height="68"
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: '-2px',
          zIndex: '121',
        }}
      >
        <path
          fill="#ffffffff"
          fillOpacity="1"
          d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
        />
      </svg>

      <svg
        width="100%"
        height="68"
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          bottom: '-1px',
          filter: 'drop-shadow(0 -15px 10px #d3a069)',
        }}
      >
        <path
          fill="#d3a069"
          fillOpacity="1"
          d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
        />
      </svg>
    </section>

  );
};

export default Section2;
