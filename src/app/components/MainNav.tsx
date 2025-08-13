import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import UpperNav from './upperNav';

interface MainNavProps {
  onNavigate: (route: string) => void;
  current: string;
}

const MainNav: React.FC<MainNavProps> = ({ onNavigate, current }) => {
  const [screenWidth, setScreenWidth] = useState(1920);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isSmall = screenWidth <= 768;

  const handleRequestSample = () => {
    onNavigate('order');
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#efcfac',
    color: '#000000ff',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    position: 'fixed',
    top: showNavbar ? '0' : '-150px',
    width: '100%',
    zIndex: '11111',
    transition: 'top 0.3s ease-in-out',
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
    gap: isSmall ? '8px' : '25px',
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
    padding: isSmall ? '6px 0px' : '4px 0px',
    transition: 'all 0.3s ease',
    position: 'relative',
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

    <>
      <header style={headerStyle}>
      <UpperNav />
        <nav style={navStyle}>
          <ul style={navLinksStyle}>
            {['home', 'product', 'decor', 'thankyou','basket', 'order', 'showrooms', 'blogs'].map((item) => (
              <li key={item} style={{ listStyle: 'none' }}>
                <button
                  onClick={() => onNavigate(item)}
                  style={{
                    ...linkButtonStyle,
                    color: current === item ? onActiveLink.color : linkButtonStyle.color,
                  }}
                  className="nav-link-btn underline-hover"
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
            className="sample-btn coolBeans"
          >
            Request free sample
          </button>
        </nav>

        <style jsx>{`
        ul:hover .nav-link-btn {
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }
        ul .nav-link-btn:hover {
          opacity: 1 !important;
        }
        .nav-link-btn:hover {
          background: #fff3e0;
          border-radius: 8px;
          transition: background 0.2s, color 0.2s, opacity 0.3s;
        }
        .underline-hover::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 2px;
          background-color: #ca8c4aff;
          transition: width 0.3s ease;
        }
        .underline-hover:hover::after {
          width: 100%;
        }
      `}</style>
      </header>
    </>
  );
};

export default MainNav;
