import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the section data structure
interface Section3Block {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  buttonText: string;
  svg: {
    path: string;
    fill: string;
    position: 'left' | 'right';
  };
  layout: 'image-first' | 'text-first';
}

interface Section3Colors {
  button: string;
  buttonText: string;
  text: string;
  textBackground: string;
  svgAccent: string;
  shadow: string;
}

interface Section3Breakpoints {
  mobile: number;
  tablet: number;
}

interface Section3Data {
  blocks: Section3Block[];
  colors: Section3Colors;
  breakpoints: Section3Breakpoints;
}

// Default section data (fallback)
const defaultSection3Data: Section3Data = {
  blocks: [
    {
      id: 'board-batten',
      title: 'Board & Batten',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: {
        src: '/images/section3rdimg2.png',
        alt: 'Board & Batten',
        width: 460,
        height: 300
      },
      buttonText: 'Read more',
      svg: {
        path: 'M319 0H0L287.5 21L319 244V0Z',
        fill: '#D3A069',
        position: 'right'
      },
      layout: 'image-first'
    },
    {
      id: 'premium-decking',
      title: 'Premium Decking',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: {
        src: '/images/section3rdimg1.png',
        alt: 'Premium Decking',
        width: 460,
        height: 300
      },
      buttonText: 'Read more',
      svg: {
        path: 'M0 0H319L31.5 21L0 244V0Z',
        fill: '#D3A069',
        position: 'left'
      },
      layout: 'text-first'
    }
  ],
  colors: {
    button: '#d3a069',
    buttonText: 'white',
    text: 'black',
    textBackground: 'white',
    svgAccent: '#D3A069',
    shadow: 'rgba(0, 0, 0, 0.58) 0px 3px 8px'
  },
  breakpoints: {
    mobile: 600,
    tablet: 1024
  }
};

interface Section3Props {
  sectionData?: Section3Data;
}

const Section3rd: React.FC<Section3Props> = ({ sectionData = defaultSection3Data }) => {
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
    margin: isMobile ? "5px" : "10px",
    display: "flex",
    justifyContent: "center",
  };

  const absoluteTextStyle: React.CSSProperties = {
    position: "relative",
    top: 0,
    left: isMobile ? '0' : '-50px',
    color: sectionData.colors.text,
    width: "100%",
    boxShadow: sectionData.colors.shadow,
    padding: isMobile ? "15px" : isTablet ? "25px" : "50px 30px",
    background: sectionData.colors.textBackground,
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
    color: sectionData.colors.text,
    marginBottom: "1.2rem",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: sectionData.colors.button,
    color: sectionData.colors.buttonText,
    border: "none",
    padding: isMobile ? "0.3rem 0.8rem" : isTablet ? "0.4rem 1rem" : "0.5rem 1.25rem",
    borderRadius: "20px",
    fontSize: isMobile ? "0.8rem" : isTablet ? "0.85rem" : "0.9rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <section style={sectionStyle}>
      {sectionData.blocks.map((block, index) => (
        <div key={block.id} className={`section3rd-block-${index + 1}`} style={rowStyle}>
          {/* Render image first if layout is image-first */}
          {block.layout === 'image-first' && (
            <div style={imageBoxStyle}>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Text content */}
          <div style={textBoxStyle}>
            <div style={{
              ...absoluteTextStyle,
              left: block.layout === 'image-first'
                ? (isMobile ? '0' : '-50px')
                : (isMobile ? '0' : '50px'),
              zIndex: block.layout === 'text-first' ? 2 : 1
            }}>
              <div style={heading1Style}>{block.title}</div>
              <div style={heading2Style}>{block.description}</div>
              <button style={buttonStyle} className="coolBeans">
                {block.buttonText}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="319"
                height="244"
                viewBox="0 0 319 244"
                fill="none"
                style={{
                  position: "absolute",
                  top: isMobile ? (block.svg.position === 'right' ? '-12px' : '-9px') : "-22px",
                  [block.svg.position]: isMobile ? '-15px' : "-32px",
                  zIndex: 1000,
                  width: "50%",
                  height: "auto",
                }}
              >
                <path d={block.svg.path} fill={block.svg.fill} />
              </svg>
            </div>
          </div>

          {/* Render image last if layout is text-first */}
          {block.layout === 'text-first' && (
            <div style={imageBoxStyle}>
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Section3rd;
