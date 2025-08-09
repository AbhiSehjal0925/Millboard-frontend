"use client";

import React, { useState, useEffect, useRef } from "react";

const languages = [
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
];

const UpperNav = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    backgroundColor: "#8c7b67",
    color: "white",
    padding: "8px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: isMobile ? "center" : "space-between",
    fontSize: isMobile ? "14px" : "16px",
    position: "sticky",
    top: "0",
    zIndex: 99912121121,
    overflow: "hidden",
    whiteSpace: "nowrap",
  };

  const infoTextStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginRight: "24px",
    gap: "4px",
  };

  const selectStyle: React.CSSProperties = {
    color: "black",
    borderRadius: "4px",
    padding: "4px 6px",
    marginLeft: "4px",
    fontSize: "13px",
  };

  const marqueeContainer: React.CSSProperties = {
    display: "flex",
    animation: "scroll-left 20s linear infinite",
    animationPlayState: paused ? "paused" : "running",
  };

  const keyframes = `
    @keyframes scroll-left {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        {!isMobile ? (
          <>
            <div style={{ display: "flex", gap: "16px" }}>
              <p style={infoTextStyle}>📞 +91 6123456789</p>
              <p style={infoTextStyle}>✉️ Dummy@gmail.com</p>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <p style={infoTextStyle}>🌍 Global Distribution</p>
              <p style={infoTextStyle} ref={marqueeRef}>
                🌐
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
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
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
              <span style={infoTextStyle}>📞 +91 6123456789</span>
              <span style={infoTextStyle}>✉️ Dummy@gmail.com</span>
              <span style={infoTextStyle}>🌍 Global Distribution</span>
              <span style={infoTextStyle}>
                🌐
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
                  {languages.map((lang) => (
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
