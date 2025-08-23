import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Define the navigation data structure
interface NavItem {
  id: string;
  label: string;
  route: string;
  isMainLink: boolean;
}

interface NavColors {
  background: string;
  text: string;
  activeLink: string;
  button: string;
  buttonText: string;
  buttonBorder: string;
  dropdownBackground: string;
  dropdownShadow: string;
  mobileBorder: string;
}

interface NavBreakpoints {
  small: number;
}

interface MainNavData {
  logo: {
    src: string;
    alt: string;
    smallWidth: number;
    smallHeight: number;
    largeWidth: number;
    largeHeight: number;
  };
  colors: NavColors;
  breakpoints: NavBreakpoints;
  navigation: NavItem[];
  buttonText: string;
  dropdownLabel: string;
}

// UpperNav data structure
interface UpperNavData {
  languages: Array<{
    code: string;
    label: string;
  }>;
  contactInfo: {
    phone: string;
    email: string;
    distribution: string;
  };
  colors: {
    background: string;
    text: string;
    selectBackground: string;
  };
  breakpoints: {
    mobile: number;
  };
  layout: {
    padding: {
      mobile: string;
      desktop: string;
    };
    fontSize: {
      mobile: string;
      desktop: string;
    };
    gap: string;
    marginRight: string;
    marginLeft: string;
  };
  shadows: {
    mobile: string;
    desktop: string;
  };
  animation: {
    duration: string;
    keyframes: string;
  };
  icons: {
    phone: string;
    email: string;
    distribution: string;
    globe: string;
  };
}

// Default navigation data (fallback)
const defaultNavData: MainNavData = {
  logo: {
    src: '/images/mainlogo.png',
    alt: 'Millboard Logo',
    smallWidth: 140,
    smallHeight: 35,
    largeWidth: 160,
    largeHeight: 40
  },
  colors: {
    background: '#efcfac',
    text: '#000000ff',
    activeLink: '#D3A069',
    button: '#D3A069',
    buttonText: 'white',
    buttonBorder: 'white',
    dropdownBackground: '#fff',
    dropdownShadow: '0 4px 8px rgba(0,0,0,0.1)',
    mobileBorder: '#d3a069'
  },
  breakpoints: {
    small: 768
  },
  navigation: [
    { id: 'home', label: 'Home', route: 'home', isMainLink: true },
    { id: 'product', label: 'Product', route: 'product', isMainLink: true },
    { id: 'decor', label: 'Decor', route: 'decor', isMainLink: true },
    { id: 'thankyou', label: 'Thank You', route: 'thankyou', isMainLink: false },
    { id: 'basket', label: 'Basket', route: 'basket', isMainLink: false },
    { id: 'order', label: 'Order', route: 'order', isMainLink: false },
    { id: 'showrooms', label: 'Showrooms', route: 'showrooms', isMainLink: false },
    { id: 'blogs', label: 'Blogs', route: 'blogs', isMainLink: false }
  ],
  buttonText: 'Request free sample',
  dropdownLabel: 'More ▾'
};

// Default UpperNav data
const defaultUpperNavData: UpperNavData = {
  languages: [
    { code: "en", label: "English" },
    { code: "es", label: "Spanish" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "zh", label: "Chinese" },
    { code: "hi", label: "Hindi" },
    { code: "ar", label: "Arabic" },
    { code: "ru", label: "Russian" },
    { code: "ja", label: "Japanese" },
    { code: "pt", label: "Portuguese" },
    { code: "it", label: "Italian" },
    { code: "ko", label: "Korean" },
    { code: "tr", label: "Turkish" },
    { code: "bn", label: "Bengali" },
    { code: "pa", label: "Punjabi" },
    { code: "jv", label: "Javanese" },
    { code: "vi", label: "Vietnamese" },
    { code: "ur", label: "Urdu" },
    { code: "fa", label: "Persian" },
    { code: "uk", label: "Ukrainian" },
  ],
  contactInfo: {
    phone: "+91 6123456789",
    email: "Dummy@gmail.com",
    distribution: "Global Distribution"
  },
  colors: {
    background: "#8c7b67",
    text: "white",
    selectBackground: "black"
  },
  breakpoints: {
    mobile: 768
  },
  layout: {
    padding: {
      mobile: "4px 12px",
      desktop: "8px 86px"
    },
    fontSize: {
      mobile: "14px",
      desktop: "16px"
    },
    gap: "16px",
    marginRight: "24px",
    marginLeft: "4px"
  },
  shadows: {
    mobile: 'rgba(0, 0, 0, 0.15) 0px 2px 4px',
    desktop: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
  },
  animation: {
    duration: "20s",
    keyframes: `
      @keyframes scroll-left {
        0% { transform: translateX(100vw); }
        100% { transform: translateX(-100vw); }
      }
    `
  },
  icons: {
    phone: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
    email: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
    distribution: "M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25",
    globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
  }
};

interface MainNavProps {
  onNavigate: (route: string) => void;
  current: string;
  navData?: MainNavData;
  upperNavData?: UpperNavData;
}

const MainNav: React.FC<MainNavProps> = ({ onNavigate, current, navData = defaultNavData, upperNavData = defaultUpperNavData }) => {
  const [screenWidth, setScreenWidth] = useState(1920);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showUpperNav, setShowUpperNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // UpperNav states
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMobileUpper, setIsMobileUpper] = useState(false);
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Ref for dropdown
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide upper nav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowUpperNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowUpperNav(true);
      }

      // Main navbar always stays visible (no hiding)
      setShowNavbar(true);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // UpperNav resize effect
  useEffect(() => {
    const handleResize = () => {
      setIsMobileUpper(window.innerWidth <= upperNavData.breakpoints.mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [upperNavData.breakpoints.mobile]);

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

  // UpperNav click outside effect
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (marqueeRef.current && !marqueeRef.current.contains(e.target as Node)) {
        setPaused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const isSmall = screenWidth <= navData.breakpoints.small;

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

  // Calculate the upper nav height dynamically
  const upperNavHeight = isMobileUpper ? 40 : 48; // Approximate height based on padding and font size

  const headerStyle: React.CSSProperties = {
    backgroundColor: navData.colors.background,
    color: navData.colors.text,
    boxShadow: isSmall ? 'rgba(0, 0, 0, 0.1) 1px 1px 2px' : 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
    position: 'fixed',
    top: showUpperNav ? `${upperNavHeight}px` : '0', // Position directly below upper nav when visible
    width: '100vw',
    zIndex: '111113310',
    marginTop: '0',
    lineHeight: '1',
    transition: 'top 0.3s ease-in-out'
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSmall ? 'space-between' : 'space-between',
    padding: isSmall ? '10px 8px' : '10px 16px',
    flexWrap: isSmall ? 'nowrap' : 'nowrap',
    gap: isSmall ? '4px' : '12px',
    textAlign: isSmall ? 'center' : 'left',
    maxWidth: '1780px',
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
    color: navData.colors.text,
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
    backgroundColor: navData.colors.text,
    margin: '3px 0',
    transition: '0.3s',
    transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
  };

  const mobileMenuIconStyle2: React.CSSProperties = {
    width: '24px',
    height: '3px',
    backgroundColor: navData.colors.text,
    margin: '3px 0',
    transition: '0.3s',
    opacity: mobileMenuOpen ? 0 : 1,
  };

  const mobileMenuIconStyle3: React.CSSProperties = {
    width: '24px',
    height: '3px',
    backgroundColor: navData.colors.text,
    margin: '3px 0',
    transition: '0.3s',
    transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none',
  };

  const sampleButtonStyle: React.CSSProperties = {
    backgroundColor: navData.colors.button,
    color: navData.colors.buttonText,
    padding: isSmall ? '8px 14px' : '10px 20px',
    borderRadius: '9999px',
    border: `2px solid ${navData.colors.buttonBorder}`,
    fontSize: isSmall ? '16px' : '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    order: isSmall ? 3 : 3,
    width: isSmall ? 'auto' : 'auto',
    alignSelf: 'center',
    display: isSmall ? 'none' : 'block',
  };

  const onActiveLink: React.CSSProperties = {
    color: navData.colors.activeLink,
  };

  // UpperNav styles
  const upperNavContainerStyle: React.CSSProperties = {
    backgroundColor: upperNavData.colors.background,
    color: upperNavData.colors.text,
    padding: isMobileUpper ? upperNavData.layout.padding.mobile : upperNavData.layout.padding.desktop,
    display: "flex",
    alignItems: "center",
    justifyContent: isMobileUpper ? "center" : "space-between",
    fontSize: isMobileUpper ? upperNavData.layout.fontSize.mobile : upperNavData.layout.fontSize.desktop,
    position: "fixed",
    top: showUpperNav ? '0' : `-${upperNavHeight}px`, // Hide upper nav above screen when scrolling down
    left: '0',
    right: '0',
    width: '100vw',
    height: `${upperNavHeight}px`, // Set explicit height
    zIndex: 111113311, // Higher than main nav to ensure proper layering
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxShadow: isMobileUpper ? upperNavData.shadows.mobile : upperNavData.shadows.desktop,
    marginBottom: '0',
    margin: '0 auto',
    transition: 'top 0.3s ease-in-out'
  };

  const infoTextStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginRight: upperNavData.layout.marginRight,
    gap: "4px",
  };

  const selectStyle: React.CSSProperties = {
    borderRadius: "4px",
    padding: "4px 6px",
    marginLeft: upperNavData.layout.marginLeft,
  };

  const marqueeContainer: React.CSSProperties = {
    display: "flex",
    animation: `scroll-left ${upperNavData.animation.duration} linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  const renderIcon = (path: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );

  const mainLinks = navData.navigation.filter(item => item.isMainLink);
  const dropdownLinks = navData.navigation.filter(item => !item.isMainLink);

  return (
    <>
      <style>{upperNavData.animation.keyframes}</style>
      <header style={headerStyle}>
        {/* UpperNav integrated */}
        <div style={upperNavContainerStyle}>
          {!isMobileUpper ? (
            <>
              <div style={{ display: "flex", gap: upperNavData.layout.gap }}>
                <p style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.phone)}
                  {upperNavData.contactInfo.phone}
                </p>
                <p style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.email)}
                  {upperNavData.contactInfo.email}
                </p>
              </div>
              <div style={{ display: "flex", gap: upperNavData.layout.gap }}>
                <p style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.distribution)}
                  {upperNavData.contactInfo.distribution}
                </p>
                <p style={infoTextStyle} ref={marqueeRef}>
                  {renderIcon(upperNavData.icons.globe)}
                  <select
                    value={selectedLanguage}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPaused(true);
                    }}
                    onChange={(e) => {
                      setSelectedLanguage(e.target.value);
                      setPaused(false);
                    }}
                    style={selectStyle}
                  >
                    {upperNavData.languages.map((lang) => (
                      <option key={lang.code} value={lang.code} style={{ color: upperNavData.colors.selectBackground }}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </p>
              </div>
            </>
          ) : (
            <div style={marqueeContainer} ref={marqueeRef}>
              <span
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "center",
                }}
              >
                <span style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.phone)}
                  {upperNavData.contactInfo.phone}
                </span>
                <span style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.email)}
                  {upperNavData.contactInfo.email}
                </span>
                <span style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.distribution)}
                  {upperNavData.contactInfo.distribution}
                </span>
                <span style={infoTextStyle}>
                  {renderIcon(upperNavData.icons.globe)}
                  <select
                    value={selectedLanguage}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPaused(true);
                    }}
                    onChange={(e) => {
                      setSelectedLanguage(e.target.value);
                      setPaused(false);
                    }}
                    style={selectStyle}
                  >
                    {upperNavData.languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.label}
                      </option>
                    ))}
                  </select>
                </span>
              </span>
            </div>
          )}
        </div>

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
              src={navData.logo.src}
              alt={navData.logo.alt}
              width={isSmall ? navData.logo.smallWidth : navData.logo.largeWidth}
              height={isSmall ? navData.logo.smallHeight : navData.logo.largeHeight}
              style={{ display: 'block', margin: '0 auto' }}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <ul style={navLinksStyle}>
            {mainLinks.map((item) => (
              <li key={item.id} style={{ listStyle: 'none' }}>
                <button
                  onClick={() => onNavigate(item.route)}
                  style={{
                    ...linkButtonStyle,
                    color: current === item.route ? onActiveLink.color : linkButtonStyle.color,
                  }}
                  className="nav-link-btn underline-hover"
                >
                  {item.label}
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
                {navData.dropdownLabel}
              </button>
              {dropdownOpen && (
                <ul
                  style={{
                    position: 'absolute',
                    top: '120%',
                    left: 0,
                    background: navData.colors.dropdownBackground,
                    padding: '10px 8px',
                    margin: 0,
                    listStyle: 'none',
                    boxShadow: navData.colors.dropdownShadow,
                    minWidth: '150px',
                    zIndex: 9999,
                  }}
                >
                  {dropdownLinks.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          onNavigate(item.route);
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
                        {item.label}
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
            {navData.buttonText}
          </button>
        </nav>

        {/* Mobile Navigation Menu - Connected to navbar */}
        {mobileMenuOpen && (
          <div
            style={{
              width: '100vw',
              backgroundColor: navData.colors.background,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 1000,
              padding: '20px',
              borderTop: `1px solid ${navData.colors.mobileBorder}`,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Main Navigation Links */}
              {mainLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavigation(item.route)}
                  style={{
                    ...linkButtonStyle,
                    color: current === item.route ? onActiveLink.color : linkButtonStyle.color,
                    fontSize: '18px',
                    padding: '12px 0',
                    textAlign: 'left',
                    borderBottom: `1px solid ${navData.colors.mobileBorder}`,
                    width: '100%',
                  }}
                >
                  {item.label}
                </button>
              ))}

              {/* Dropdown Links */}
              {dropdownLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavigation(item.route)}
                  style={{
                    ...linkButtonStyle,
                    fontSize: '18px',
                    padding: '12px 0',
                    textAlign: 'left',
                    borderBottom: `1px solid ${navData.colors.mobileBorder}`,
                    width: '100%',
                  }}
                >
                  {item.label}
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
                {navData.buttonText}
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
