import Image from "next/image";
import React from "react";

const Section3rd: React.FC = () => {
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
    padding: "25px 4vw",
    boxSizing: "border-box",
    marginBottom: "60px",
  };

  const imageBoxStyle: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: "460px",
    minWidth: "280px",
    margin: "10px",
    position: "relative",
  };

  const textBoxStyle: React.CSSProperties = {
    flex: "1 1 300px",
    maxWidth: "460px",
    minWidth: "280px",
    position: "relative",
    margin: "10px",
  };

  const absoluteTextStyle: React.CSSProperties = {
    position: "absolute",
    top: "10%",
    left: "5%",
    color: "black",
    width: "90%",
    zIndex: 2,
  };

  const heading1Style: React.CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 600,
    marginBottom: "0.8rem",
  };

  const heading2Style: React.CSSProperties = {
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#333",
    marginBottom: "1.2rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#C6905B",
    color: "white",
    border: "none",
    padding: "0.5rem 1.25rem",
    borderRadius: "20px",
    fontSize: "0.9rem",
    cursor: "pointer",
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
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div style={textBoxStyle}>
        <Image
          src="/png/board-right-img.png"
          alt="Board background"
          fill
          sizes="(max-width: 768px) 100vw, 460px"
          style={{ objectFit: "cover" }}
        />
        <div style={absoluteTextStyle}>
          <div style={heading1Style}>Board & Batten</div>
          <div style={heading2Style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
