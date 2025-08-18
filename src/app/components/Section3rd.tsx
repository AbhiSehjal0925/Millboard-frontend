import Image from "next/image";
import React, { useEffect, useState } from "react";

const Section3rd: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 600;
  const isTablet = windowWidth <= 1024;

  const sectionStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: isMobile ? "20px 2vw" : isTablet ? "40px 3vw" : "80px 4vw",
    boxSizing: "border-box",
    marginBottom: isMobile ? "20px" : isTablet ? "40px" : "60px",
  };

  const imageBoxStyle: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: isMobile ? "100%" : isTablet ? "400px" : "600px",
    minWidth: isMobile ? "180px" : isTablet ? "250px" : "280px",
    margin: isMobile ? "5px" : "10px",
    position: "relative",
    overflow: "hidden",
  };

  const textBoxStyle: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: isMobile ? "90%" : isTablet ? "400px" : "600px",
    minWidth: isMobile ? "180px" : isTablet ? "250px" : "280px",
    // position: "relative",
    margin: isMobile ? "5px" : "10px",
    display: "flex",
    justifyContent: "center",
  };

  const absoluteTextStyle: React.CSSProperties = {
    position: "relative", // Changed from absolute to relative for better stacking on small screens
    top: 0, // Reset top positioning
    left: 0, // Reset left positioning
    color: "black",
    width: "100%",
    // maxHeight: isMobile ? "250px" : isTablet ? "350px" : "460px",
    boxShadow: "rgba(0, 0, 0, 0.58) 0px 3px 8px",
    padding: isMobile ? "15px" : isTablet ? "25px" : "50px 30px",
    background: "white",
    // borderRadius: "10px",
    boxSizing: "border-box",
  };

  const svgStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: 1,
    width: isMobile ? "80px" : isTablet ? "120px" : "160px",
    height: "auto",
  };

  const heading1Style: React.CSSProperties = {
    fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
    fontWeight: 500,
    marginBottom: "0.8rem",
  };

  const heading2Style: React.CSSProperties = {
    fontSize: isMobile ? "0.9rem" : isTablet ? "1rem" : "1rem",
    lineHeight: 1.6,
    color: "#333",
    marginBottom: "1.2rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#d3a069",
    color: "white",
    border: "none",
    padding: isMobile ? "0.3rem 0.8rem" : isTablet ? "0.4rem 1rem" : "0.5rem 1.25rem",
    borderRadius: "20px",
    fontSize: isMobile ? "0.8rem" : isTablet ? "0.85rem" : "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const renderRow = (imgSrc: string, title: string, description: string, isReversed: boolean = false) => (
    <div style={rowStyle}>
      {isReversed ? (
        <>
          <div style={textBoxStyle}>
            <div style={absoluteTextStyle}>
              <div style={heading1Style}>{title}</div>
              <div style={heading2Style}>{description}</div>
              <button
                style={buttonStyle}
                className="coolBeans"
              >
                Read more
              </button>

              <svg xmlns="http://www.w3.org/2000/svg" width="319" height="244" viewBox="0 0 319 244" fill="none" style={{ position: "absolute", top: "-22px", left: "-32px", zIndex: 1000, width: "50%", height: "auto" }}>
                <path d="M0 0H319L31.5 21L0 244V0Z" fill="#D3A069" />
              </svg>

            </div>
          </div>
          <div style={imageBoxStyle}>
            <Image
              src={imgSrc}
              alt="Section Image"
              width={460}
              height={300}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </>
      ) : (
        <>
          <div style={imageBoxStyle}>
            <Image
              src={imgSrc}
              alt="Section Image"
              width={460}
              height={300}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div style={textBoxStyle}>
            <div style={absoluteTextStyle}>
              <div style={heading1Style}>{title}</div>
              <div style={heading2Style}>{description}</div>
              <button
                style={buttonStyle}
                className="coolBeans"
              >
                Read more
              </button>

              <svg xmlns="http://www.w3.org/2000/svg" width="319" height="244" viewBox="0 0 319 244" fill="none" style={{ position: "absolute", top: "-22px", right: "-32px", zIndex: 1000, width: "50%", height: "auto" }}>
                <path d="M319 0H0L287.5 21L319 244V0Z" fill="#D3A069" />
              </svg>

            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section style={sectionStyle}>
      {renderRow(
        "/images/section3rdimg2.png",
        "Board & Batten",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      )}
      {renderRow(
        "/images/section3rdimg1.png",
        "Premium Decking",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        true
      )}
    </section>
  );
};

export default Section3rd;