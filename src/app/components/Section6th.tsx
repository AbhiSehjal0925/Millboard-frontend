import React, { useEffect, useState } from "react";

const Section6th: React.FC = () => {


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
    background: "#EFCFAC",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: isTablet ? '10px' : "0 80px 100px", 
    flexWrap: "wrap",
    position: "relative",
  };

  const leftSideStyle: React.CSSProperties = {
    flex: "1 1 400px",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#000000",
    padding: "10px",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "Mansfield, sans-serif",
    fontWeight: 400,
    fontSize: "clamp(32px, 4vw, 45px)",
    lineHeight: 1.2,
    marginBottom: "20px",
  };

  const paragraphStyle: React.CSSProperties = {
    fontFamily: "Mansfield, sans-serif",
    fontWeight: "lighter",
    fontSize: "clamp(20px, 3vw, 25px)",
    lineHeight: 1.4,
  };

  const rightSideStyle: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: "900px",
    aspectRatio: "1 / 1.2", // keeps proportions
    background: `url('/png/section6thPng1.png') center / cover no-repeat`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerImageStyle: React.CSSProperties = {
    height: "92%",
    width: "92%",
    background: `url('/images/section6thimg1.png') center / cover no-repeat`,
  };

  const svgStyle: React.CSSProperties = {
    position: "absolute",
    bottom: '0',
    left: 0,
    width: "100%",
    maxHeight: '500px',
    display: isTablet ? 'none' : 'block',
  };

  return (
    <section style={sectionStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <div style={headingStyle}>
          Elegant Living on Vicar&apos;s Hill, Ladywell
        </div>
        <div style={paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>

      {/* Right Side */}
      <div style={rightSideStyle}>
        <div style={innerImageStyle}></div>
      </div>

      {/* Bottom SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 201.1267605633803" width="1440" height="201.1267605633803" style={svgStyle}>
        <path fill="white" d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z" />
      </svg>

    </section>
  );
};

export default Section6th;
