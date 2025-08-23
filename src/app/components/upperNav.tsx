"use client";

import React, { useState, useEffect, useRef } from "react";

// Define the section data structure
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

// Default section data (fallback)
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
    globe: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
  }
};

interface UpperNavProps {
  navData?: UpperNavData;
}

const UpperNav: React.FC<UpperNavProps> = ({ navData = defaultUpperNavData }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const [showUpperNav, setShowUpperNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= navData.breakpoints.mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide UpperNav when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowUpperNav(false);
      } else if (currentScrollY < lastScrollY) {
        setShowUpperNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navData.breakpoints.mobile, lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (marqueeRef.current && !marqueeRef.current.contains(e.target as Node)) {
        setPaused(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: navData.colors.background,
    color: navData.colors.text,
    padding: isMobile ? navData.layout.padding.mobile : navData.layout.padding.desktop,
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between",
    fontSize: isMobile ? navData.layout.fontSize.mobile : navData.layout.fontSize.desktop,
    position: "fixed",
    top: showUpperNav ? '0' : '-100px',
    left: 0,
    right: 0,
    zIndex: 111113311,
    overflow: "hidden",
    whiteSpace: "nowrap",
    boxShadow: isMobile ? navData.shadows.mobile : navData.shadows.desktop,
    marginBottom: '0',
    margin: '0 auto',
    transition: 'top 0.3s ease-in-out'
  };

  const infoTextStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginRight: navData.layout.marginRight,
    gap: "4px",
  };

  const selectStyle: React.CSSProperties = {
    borderRadius: "4px",
    padding: "4px 6px",
    marginLeft: navData.layout.marginLeft,
  };

  const marqueeContainer: React.CSSProperties = {
    display: "flex",
    animation: `scroll-left ${navData.animation.duration} linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  const renderIcon = (path: string) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );

  return (
    <>
      <style>{navData.animation.keyframes}</style>
      <div style={containerStyle}>
        {!isMobile ? (
          <>
            <div style={{ display: "flex", gap: navData.layout.gap }}>
              <p style={infoTextStyle}>
                {renderIcon(navData.icons.phone)}
                {navData.contactInfo.phone}
              </p>
              <p style={infoTextStyle}>
                {renderIcon(navData.icons.email)}
                {navData.contactInfo.email}
              </p>
            </div>
            <div style={{ display: "flex", gap: navData.layout.gap }}>
              <p style={infoTextStyle}>
                {renderIcon(navData.icons.distribution)}
                {navData.contactInfo.distribution}
              </p>
              <p style={infoTextStyle} ref={marqueeRef}>
                {renderIcon(navData.icons.globe)}
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
                  {navData.languages.map((lang) => (
                    <option key={lang.code} value={lang.code} style={{ color: navData.colors.selectBackground }}>
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
                {renderIcon(navData.icons.phone)}
                {navData.contactInfo.phone}
              </span>
              <span style={infoTextStyle}>
                {renderIcon(navData.icons.email)}
                {navData.contactInfo.email}
              </span>
              <span style={infoTextStyle}>
                {renderIcon(navData.icons.distribution)}
                {navData.contactInfo.distribution}
              </span>
              <span style={infoTextStyle}>
                {renderIcon(navData.icons.globe)}
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
                  {navData.languages.map((lang) => (
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
    </>
  );
};

export default UpperNav;
