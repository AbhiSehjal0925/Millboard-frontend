import React from "react";

const Section4th: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    width: "100%",
    background: "#EFCFAC",
    marginTop: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "20px",
    position: "relative",
  };

  const leftBoxStyle: React.CSSProperties = {
    width: "639px",
    height: "828px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "#000",
    marginBottom: "20px",
  };

  const leftInnerStyle: React.CSSProperties = {
    background: "url('/images/section4thimg1.png') center / cover no-repeat",
    height: "100%",
    width: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
    position: "relative",
  };

  const playBtnStyle: React.CSSProperties = {
    background: "url('/png/playBtn.png') center / cover no-repeat",
    width: "87px",
    height: "87px",
  };

  const yellowBarStyle: React.CSSProperties = {
    height: "90%",
    width: "30px",
    background: "#D3A069",
    position: "absolute",
    right: "-30px",
    bottom: 0,
    borderTopRightRadius: "20px",
  };

  const rightBoxStyle: React.CSSProperties = {
    width: "639px",
    height: "828px",
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
    padding: "0 60px",
    gap: "20px",
    zIndex: 2211212, // ✅ number type
  };

  const headingStyle: React.CSSProperties = {
    fontWeight: 500,
    fontSize: "45px",
    lineHeight: "100%",
    fontFamily: "Mansfield, serif",
    color: "#000",
    textAlign: "center" as const,
  };

  const paragraphStyle: React.CSSProperties = {
    fontWeight: 400,
    fontSize: "16.75px",
    lineHeight: "150%",
    color: "#000",
    textAlign: "center" as const,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4th;
