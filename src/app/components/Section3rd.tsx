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
    backgroundColor: "#C6905B",
    color: "white",
    border: "none",
    padding: isMobile ? "0.3rem 0.8rem" : isTablet ? "0.4rem 1rem" : "0.5rem 1.25rem",
    borderRadius: "20px",
    fontSize: isMobile ? "0.8rem" : isTablet ? "0.85rem" : "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const svgOfText: React.CSSProperties = {
    display: "none", // Removed SVG overlay for simplicity on small screens
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#b07f4c";
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#C6905B";
  };

  const renderRow = (imgSrc: string) => (
    <div style={rowStyle}>
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
          <div style={heading1Style}>Board & Batten</div>
          <div style={heading2Style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <button
            style={buttonStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section style={sectionStyle}>
      {renderRow("/images/section3rdimg2.png")}
      {renderRow("/images/section3rdimg1.png")}
    </section>
  );
};

export default Section3rd;