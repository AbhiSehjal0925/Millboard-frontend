import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface MainNavProps {
  onNavigate: (route: string) => void;
  current: string;
}

const MainNav: React.FC<MainNavProps> = ({ onNavigate, current }) => {
  const [screenWidth, setScreenWidth] = useState(1920);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmall = screenWidth <= 768;
  const isMedium = screenWidth > 768 && screenWidth <= 1024;

  const handleRequestSample = () => {
    onNavigate('order');
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#efcfac',
    color: '#000000ff',
    borderBottom: '1px solid #000000ff',
    position: 'sticky',
    top: '47px',
    width: '100%',
    zIndex: '11111',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmall ? 'center' : 'space-between',
    padding: isSmall ? '8px 10px' : '12px 16px',
    flexWrap: isSmall ? 'wrap' : 'nowrap',
    gap: isSmall ? '8px' : '12px',
    textAlign: isSmall ? 'center' : 'left',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isSmall ? '8px' : '12px',
    // flex: isSmall ? '1 1 100%' : '1',
    justifyContent: isSmall ? 'center' : 'flex-start',
    order: isSmall ? 2 : 1,
    padding: 0,
    margin: 0,
  };

  const linkButtonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: isSmall ? '16px' : '20px',
    color: '#000000ff',
    padding: isSmall ? '6px 8px' : '4px 8px',
    transition: 'all 0.3s ease',
  };

  const logoContainerStyle: React.CSSProperties = {
    flex: isSmall ? '1 1 100%' : 'unset',
    display: 'flex',
    justifyContent: 'center',
    order: isSmall ? 1 : 2,
  };

  const sampleButtonStyle: React.CSSProperties = {
    backgroundColor: '#D3A069',
    color: 'white',
    padding: isSmall ? '8px 14px' : '10px 20px',
    borderRadius: '9999px',
    border: '2px solid white',
    fontSize: isSmall ? '16px' : '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    order: isSmall ? 3 : 3,
    width: isSmall ? '100%' : 'auto',
    alignSelf: 'center',
  };

  const onActiveLink: React.CSSProperties = {
    color: '#D3A069',
  };

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <ul style={navLinksStyle}>
          {['home', 'product', 'decor', 'thankyou', 'basket', 'order', 'showrooms', 'blogs'].map((item) => (
            <li key={item} style={{ listStyle: 'none' }}>
              <button
                onClick={() => onNavigate(item)}
                style={{
                  ...linkButtonStyle,
                  color: current === item ? onActiveLink.color : linkButtonStyle.color,
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </button>
            </li>
          ))}
        </ul>

        <div style={logoContainerStyle}>
          <Image
            src="/images/mainlogo.png"
            alt="Millboard Logo"
            width={isSmall ? 140 : 160}
            height={isSmall ? 35 : 40}
            style={{ display: 'block', margin: '0 auto' }}
            priority
          />
        </div>

        <button
          onClick={handleRequestSample}
          style={sampleButtonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D9C6A0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#D3A069')}
        >
          Request free sample
        </button>
      </nav>
    </header>
  );
};

export default MainNav;
