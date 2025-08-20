import React, { useEffect, useState } from "react";

const Section4th: React.FC = () => {

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
    background: "#EFCFAC",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: isMobile ? '10px' : "0 54px",
    position: "relative",
    paddingBottom: isMobile ? '100px' : '0',
  };

  const leftBoxStyle: React.CSSProperties = {
    flex: "1 1 100%",
    maxWidth: "850px",
    height: "80vw",
    maxHeight: "1000px",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: "20px",
  };

  const leftInnerStyle: React.CSSProperties = {
    background: "url('/images/section4thimg1.png') center / cover no-repeat",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: isMobile ? '0' : '36px'
  };

  const playBtnStyle: React.CSSProperties = {
    background: "url('/png/playBtn.png') center / cover no-repeat",
    width: "60px", // smaller for mobile
    height: "60px",
    cursor: "pointer",
  };

  const yellowBarStyle: React.CSSProperties = {
    height: "90%",
    width: "20px",
    background: "#D3A069",
    position: "absolute",
    right: "-20px",
    bottom: 0,
    borderTopRightRadius: "20px",
  };

  const rightBoxStyle: React.CSSProperties = {
    flex: "1 1 100%", // full width on mobile
    maxWidth: "900px",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const rightInnerStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: isMobile ? '10px' : "20px",
    gap: "20px",
    marginLeft: isMobile ? '10px' : "40px",
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: "clamp(1.8rem, 5vw, 60px)", // responsive font size
    lineHeight: "100%",
    fontFamily: "Mansfield, sans-serif",
    color: "#000",
    marginBottom: "20px",
    textShadow: "3px 2px 4px rgba(0, 0, 0, 0.3)",
    // textAlign: "center",
  };

  const paragraphStyle: React.CSSProperties = {
    fontWeight: 400,
    fontSize: "clamp(0.9rem, 2vw, 16.75px)",
    lineHeight: "150%",
    color: "#000",
    // textAlign: "center",
  };

  const svgofsection4: React.CSSProperties = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "auto",
  };

  return (
    <section style={sectionStyle}>
      {/* Left Image Box */}
      <div style={leftBoxStyle}>
        <div style={leftInnerStyle}>
          <div style={playBtnStyle} />
          <div style={yellowBarStyle} />
        </div>
      </div>

      {/* Right Text Box */}
      <div style={rightBoxStyle}>
        <div style={rightInnerStyle}>
          <div style={headingStyle}>
            A Stylish Retreat in the Heart of Stratford-upon-Avon
          </div>
          <div style={paragraphStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <svg
        style={svgofsection4}
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="180"
        viewBox="0 0 1440 180"
        fill="none"
      >
        <path
          d="M1495 52.0323C1495 52.0323 1388.79 -15.9549 664.825 76.7745C-59.1365 169.504 -29.8357 52.0323 -29.8357 52.0323V266H1495V52.0323Z"
          fill="#D3A069"
        />
        <path
          d="M1509.7 95.8559C1509.7 95.8559 1407.53 26.1374 679.287 93.6977C-48.9526 161.258 -13.1262 31.3712 -13.1262 31.3712L-25.0787 270.615L1497.86 346.7L1509.7 95.8559Z"
          fill="white"
        />
      </svg>
    </section>
  );
};

export default Section4th;
