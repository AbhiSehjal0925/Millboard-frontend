import React from "react";

const Section6th: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    background: "#EFCFAC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    padding: "40px 20px",
    flexWrap: "wrap", // Responsive stacking
  };

  const leftSideStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#000000",
    padding: "20px",
    height: "auto",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "Rose, sans-serif",
    fontWeight: 400,
    fontSize: "clamp(32px, 4vw, 45px)", // Responsive font size
    lineHeight: 1.2,
    marginBottom: "20px",
  };

  const paragraphStyle: React.CSSProperties = {
    fontFamily: "Shega, sans-serif",
    fontWeight: 200,
    fontSize: "clamp(20px, 3vw, 26.75px)", // Responsive font size
    lineHeight: 1.4,
  };

  const rightSideStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "700px",
    height: "clamp(400px, 60vw, 895px)", // Responsive height
    background: `url('/png/section6thPng1.png') center / cover no-repeat`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerImageStyle: React.CSSProperties = {
    height: "90%",
    width: "90%",
    background: `url('/images/section6thimg1.png') center / cover no-repeat`,
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
    </section>
  );
};

export default Section6th;
