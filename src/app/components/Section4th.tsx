import React, { useEffect, useState } from "react";

// Define the section data structure
interface Section4Data {
  background: {
    color: string;
  };
  leftSection: {
    image: {
      src: string;
      alt: string;
    };
    playButton: {
      src: string;
      width: number;
      height: number;
    };
    yellowBar: {
      color: string;
      width: string;
      height: string;
      borderRadius: string;
    };
  };
  rightSection: {
    heading: string;
    paragraph: string;
  };
  colors: {
    text: string;
    headingShadow: string;
  };
  breakpoints: {
    mobile: number;
    tablet: number;
  };
  svg: {
    primaryPath: string;
    primaryFill: string;
    secondaryPath: string;
    secondaryFill: string;
  };
}

// Default section data (fallback)
const defaultSection4Data: Section4Data = {
  background: {
    color: "#EFCFAC"
  },
  leftSection: {
    image: {
      src: '/images/section4thimg1.png',
      alt: 'Section 4 Image'
    },
    playButton: {
      src: '/png/playBtn.png',
      width: 60,
      height: 60
    },
    yellowBar: {
      color: "#D3A069",
      width: "20px",
      height: "90%",
      borderRadius: "20px"
    }
  },
  rightSection: {
    heading: "A Stylish Retreat in the Heart of Stratford-upon-Avon",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  colors: {
    text: "#000",
    headingShadow: "3px 2px 4px rgba(0, 0, 0, 0.3)"
  },
  breakpoints: {
    mobile: 600,
    tablet: 1024
  },
  svg: {
    primaryPath: "M1495 52.0323C1495 52.0323 1388.79 -15.9549 664.825 76.7745C-59.1365 169.504 -29.8357 52.0323 -29.8357 52.0323V266H1495V52.0323Z",
    primaryFill: "#D3A069",
    secondaryPath: "M1509.7 95.8559C1509.7 95.8559 1407.53 26.1374 679.287 93.6977C-48.9526 161.258 -13.1262 31.3712 -13.1262 31.3712L-25.0787 270.615L1497.86 346.7L1509.7 95.8559Z",
    secondaryFill: "white"
  }
};

interface Section4Props {
  sectionData?: Section4Data;
}

const Section4th: React.FC<Section4Props> = ({ sectionData = defaultSection4Data }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= sectionData.breakpoints.mobile;
  const isTablet = windowWidth <= sectionData.breakpoints.tablet;

  const sectionStyle: React.CSSProperties = {
    width: "100%",
    background: sectionData.background.color,
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
    background: `url('${sectionData.leftSection.image.src}') center / cover no-repeat`,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginLeft: isMobile ? '0' : '36px'
  };

  const playBtnStyle: React.CSSProperties = {
    background: `url('${sectionData.leftSection.playButton.src}') center / cover no-repeat`,
    width: `${sectionData.leftSection.playButton.width}px`,
    height: `${sectionData.leftSection.playButton.height}px`,
    cursor: "pointer",
  };

  const yellowBarStyle: React.CSSProperties = {
    height: sectionData.leftSection.yellowBar.height,
    width: sectionData.leftSection.yellowBar.width,
    background: sectionData.leftSection.yellowBar.color,
    position: "absolute",
    right: `-${sectionData.leftSection.yellowBar.width}`,
    bottom: 0,
    borderTopRightRadius: sectionData.leftSection.yellowBar.borderRadius,
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
    color: sectionData.colors.text,
    marginBottom: "20px",
    textShadow: sectionData.colors.headingShadow,
    // textAlign: "center",
  };

  const paragraphStyle: React.CSSProperties = {
    fontWeight: 400,
    fontSize: "clamp(0.9rem, 2vw, 16.75px)",
    lineHeight: "150%",
    color: sectionData.colors.text,
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
            {sectionData.rightSection.heading}
          </div>
          <div style={paragraphStyle}>
            {sectionData.rightSection.paragraph}
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
          d={sectionData.svg.primaryPath}
          fill={sectionData.svg.primaryFill}
        />
        <path
          d={sectionData.svg.secondaryPath}
          fill={sectionData.svg.secondaryFill}
        />
      </svg>
    </section>
  );
};

export default Section4th;
