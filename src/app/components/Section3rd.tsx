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

  const rowStyle2: React.CSSProperties = {
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

  const imageBoxStyle2: React.CSSProperties = {
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
    margin: isMobile ? "5px" : "10px",
    display: "flex",
    justifyContent: "center",
  };

  const textBoxStyle2: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: isMobile ? "90%" : isTablet ? "400px" : "600px",
    minWidth: isMobile ? "180px" : isTablet ? "250px" : "280px",
    margin: isMobile ? "5px" : "10px",
    display: "flex",
    justifyContent: "center",
  };

  const absoluteTextStyle: React.CSSProperties = {
    position: "relative",
    top: 0,
    left: isMobile ? '0' : '-50px',
    color: "black",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.58) 0px 3px 8px",
    padding: isMobile ? "15px" : isTablet ? "25px" : "50px 30px",
    background: "white",
    boxSizing: "border-box",
  };
  const absoluteTextStyle2: React.CSSProperties = {
    position: "relative",
    top: 0,
    left: isMobile ? '0' : '50px',
    color: "black",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.58) 0px 3px 8px",
    padding: isMobile ? "15px" : isTablet ? "25px" : "50px 30px",
    background: "white",
    boxSizing: "border-box",
    zIndex: 2,
  };

  const heading1Style: React.CSSProperties = {
    fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
    fontWeight: 500,
    marginBottom: "0.8rem",
  };

  const heading1Style2: React.CSSProperties = {
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

  const heading2Style2: React.CSSProperties = {
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

  const buttonStyle2: React.CSSProperties = {
    backgroundColor: "#d3a069",
    color: "white",
    border: "none",
    padding: isMobile ? "0.3rem 0.8rem" : isTablet ? "0.4rem 1rem" : "0.5rem 1.25rem",
    borderRadius: "20px",
    fontSize: isMobile ? "0.8rem" : isTablet ? "0.85rem" : "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <section style={sectionStyle}>
      {/* First block */}
      <div className="section3rd-block-1" style={rowStyle}>
        <div style={imageBoxStyle}>
          <Image
            src="/images/section3rdimg2.png"
            alt="Board & Batten"
            width={460}
            height={300}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
        <div style={textBoxStyle}>
          <div style={absoluteTextStyle}>
            <div style={heading1Style}>Board & Batten</div>
            <div style={heading2Style}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <button style={buttonStyle} className="coolBeans">
              Read more
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="319"
              height="244"
              viewBox="0 0 319 244"
              fill="none"
              style={{
                position: "absolute",
                top: isMobile ? '-12px' : "-22px",
                right: isMobile ? '-15px' : "-32px",
                zIndex: 1000,
                width: "50%",
                height: "auto",
              }}
            >
              <path d="M319 0H0L287.5 21L319 244V0Z" fill="#D3A069" />
            </svg>
          </div>
        </div>
      </div>

      {/* Second block */}
      <div className="section3rd-block-2" style={rowStyle2}>
        <div style={textBoxStyle2}>
          <div style={absoluteTextStyle2}>
            <div style={heading1Style2}>Premium Decking</div>
            <div style={heading2Style2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <button style={buttonStyle2} className="coolBeans">
              Read more
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="319"
              height="244"
              viewBox="0 0 319 244"
              fill="none"
              style={{
                position: "absolute",
                top: isMobile ? '-9px' : "-22px",
                left: isMobile ? '-15px' : "-32px",
                zIndex: 1000,
                width: "50%",
                height: "auto",
              }}
            >
              <path d="M0 0H319L31.5 21L0 244V0Z" fill="#D3A069" />
            </svg>
          </div>
        </div>
        <div style={imageBoxStyle2}>
          <Image
            src="/images/section3rdimg1.png"
            alt="Premium Decking"
            width={460}
            height={300}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3rd;
