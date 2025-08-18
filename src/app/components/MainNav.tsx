import React, { useState, useEffect, useRef } from 'react';
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Ref for dropdown
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isSmall = screenWidth <= 768;

  const handleRequestSample = () => {
    onNavigate('order');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileNavigation = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  // Calculate header height for proper positioning
  const headerHeight = isSmall ? 72 : 112; // Further reduced for small screens to eliminate white space

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#efcfac',
    color: '#000000ff',
    boxShadow: isSmall ? 'rgba(0, 0, 0, 0.1) 1px 1px 2px' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    position: 'fixed',
    top: showNavbar ? '0' : `-${headerHeight + 10}px`, // Add extra 10px to ensure complete hiding
    width: '100vw',
    zIndex: '11111',
    transition: 'top 0.3s ease-in-out',
    marginTop: '0', // Eliminate any gap between UpperNav and MainNav
    lineHeight: '1', // Ensure no line height gaps
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmall ? 'space-between' : 'space-between',
    padding: isSmall ? '10px 8px' : '10px 16px',
    flexWrap: isSmall ? 'nowrap' : 'nowrap',
    gap: isSmall ? '4px' : '12px',
    textAlign: isSmall ? 'center' : 'left',
    maxWidth: '1850px',
    margin: '0 auto'
  };

  const navLinksStyle: React.CSSProperties = {
    display: isSmall ? 'none' : 'flex',
    flexWrap: 'wrap',
    gap: isSmall ? '8px' : '25px',
    justifyContent: isSmall ? 'center' : 'flex-start',
    order: isSmall ? 2 : 1,
    padding: 0,
    margin: 0,
    position: 'relative',
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
    flex: isSmall ? '1' : 'unset',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    order: isSmall ? 1 : 2,
    position: 'relative',
  };

  const mobileMenuButtonStyle: React.CSSProperties = {
    display: isSmall ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    marginLeft: '15px',
    zIndex: 1000,
  };

  const mobileMenuIconStyle: React.CSSProperties = {
    width: '24px',
    height: '3px',
    backgroundColor: '#000000ff',
    margin: '3px 0',
    transition: '0.3s',
    transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
  };

  const mobileMenuIconStyle2: React.CSSProperties = {
    width: '24px',
    height: '3px',
    backgroundColor: '#000000ff',
    margin: '3px 0',
    transition: '0.3s',
    opacity: mobileMenuOpen ? 0 : 1,
  };

  const mobileMenuIconStyle3: React.CSSProperties = {
    width: '24px',
    height: '3px',
    backgroundColor: '#000000ff',
    margin: '3px 0',
    transition: '0.3s',
    transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
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
    width: isSmall ? 'auto' : 'auto',
    alignSelf: 'center',
    display: isSmall ? 'none' : 'block',
    marginRight: '35px',
  };

  const onActiveLink: React.CSSProperties = {
    color: '#D3A069',
  };

  const navItems = ['home', 'product', 'decor', 'thankyou', 'basket', 'order', 'showrooms', 'blogs'];
  const mainLinks = navItems.slice(0, 3);
  const dropdownLinks = navItems.slice(3);

  return (
    <>
      <header style={headerStyle}>
        <UpperNav />
        <nav style={navStyle}>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            style={mobileMenuButtonStyle}
            aria-label="Toggle mobile menu"
          >
            <div style={mobileMenuIconStyle}></div>
            <div style={mobileMenuIconStyle2}></div>
            <div style={mobileMenuIconStyle3}></div>
          </button>

          {/* Logo */}
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

          {/* Desktop Navigation */}
          <ul style={navLinksStyle}>
            {mainLinks.map((item) => (
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

            {/* Dropdown */}
            <li style={{ listStyle: 'none', position: 'relative' }} ref={dropdownRef}>
              <button
                style={linkButtonStyle}
                className="nav-link-btn underline-hover"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                More ▾
              </button>
              {dropdownOpen && (
                <ul
                  style={{
                    position: 'absolute',
                    top: '120%',
                    left: 0,
                    background: '#fff',
                    padding: '10px 8px',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    minWidth: '150px',
                    zIndex: 9999,
                  }}
                >
                  {dropdownLinks.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          onNavigate(item);
                          setDropdownOpen(false);
                        }}
                        style={{
                          ...linkButtonStyle,
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '8px 16px',
                          fontSize: '20px',
                        }}
                        className="nav-link-btn"
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          <button
            onClick={handleRequestSample}
            style={sampleButtonStyle}
            className="sample-btn coolBeans"
          >
            Request free sample
          </button>
        </nav>

        {/* Mobile Navigation Menu - Connected to navbar */}
        {mobileMenuOpen && (
          <div
            style={{
              width: '100vw',
              backgroundColor: '#efcfac',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 1000,
              padding: '20px',
              borderTop: '1px solid #d3a069',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Main Navigation Links */}
              {mainLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMobileNavigation(item)}
                  style={{
                    ...linkButtonStyle,
                    color: current === item ? onActiveLink.color : linkButtonStyle.color,
                    fontSize: '18px',
                    padding: '12px 0',
                    textAlign: 'left',
                    borderBottom: '1px solid #d3a069',
                    width: '100%',
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              ))}

              {/* Dropdown Links */}
              {dropdownLinks.map((item) => (
                <button
                  key={item}
                  onClick={() => handleMobileNavigation(item)}
                  style={{
                    ...linkButtonStyle,
                    fontSize: '18px',
                    padding: '12px 0',
                    textAlign: 'left',
                    borderBottom: '1px solid #d3a069',
                    width: '100%',
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              ))}

              {/* Mobile Sample Button */}
              <button
                onClick={handleRequestSample}
                style={{
                  ...sampleButtonStyle,
                  display: 'block',
                  width: '100%',
                  marginTop: '20px',
                  padding: '15px',
                  fontSize: '18px',
                }}
                className="sample-btn coolBeans"
              >
                Request free sample
              </button>
            </div>
          </div>
        )}

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
          .coolBeans {
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: all 0.4s ease;
          }
          .coolBeans::before {
            content: '';
            position: absolute;
            top: 0;
            left: -300%;
            width: 300%;
            height: 100%;
            background: linear-gradient(120deg, #d3a069, #f5c28f, #d3a069);
            transition: all 0.5s ease;
            z-index: -1;
          }
          .coolBeans:hover::before {
            left: 0;
          }
          .coolBeans:hover {
            box-shadow: 0 8px 20px rgba(211, 160, 105, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
        `}</style>
      </header>
    </>
  );
};

export default MainNav;
