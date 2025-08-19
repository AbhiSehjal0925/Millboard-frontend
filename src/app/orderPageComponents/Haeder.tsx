import React, { useEffect, useState } from "react";
import { useFilter } from "@/context/FilterContext";
import { woods as section1Woods } from "./Section1";
import { woods as section2Woods } from "./Section2";
import { woods as section3Woods } from "./Section3";
import { woods as section4Woods } from "./Section4";
import { woods as section7Woods } from "./Section7";

const Header = () => {
  const {
    isCladdingChecked,
    setIsCladdingChecked,
    isDeckingChecked,
    setIsDeckingChecked,
  } = useFilter();

  const deckingSampleCount =
    section1Woods.length +
    section2Woods.length +
    section3Woods.length +
    section4Woods.length;
  const claddingSampleCount = section7Woods.length;

  const visibleDeckingSamples = isDeckingChecked ? deckingSampleCount : 0;
  const visibleCladdingSamples = isCladdingChecked ? claddingSampleCount : 0;

  const showNoSelectionMessage = !isDeckingChecked && !isCladdingChecked;

  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenSize("small");
      else if (width <= 1024) setScreenSize("medium");
      else setScreenSize("large");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive style helpers
  const getHeaderStyle = (): React.CSSProperties => ({
    background: "#efcfac",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flexDirection: screenSize === "small" ? "column" : "row",
    width: "100%",
    minHeight: screenSize === "small" ? "68vh" : "70vh",
    padding: screenSize === "small" ? "60px 50px 50px 50px" : undefined,
  });

  const getBreadcrumbStyle = (): React.CSSProperties => ({
    position: "absolute",
    color: "#000",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "4px",
    top: screenSize === "small" ? "25px" : "20px",
    left: screenSize === "small" ? "25px" : "87px",
    fontSize: screenSize === "small" ? "12px" : "18px",
    zIndex: 10,
    width: screenSize === "small" ? "95vw" : "auto",
    flexDirection: screenSize === "small" ? "row" : "row",
  });

  const getMainContentStyle = (): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    color: "#000",
    zIndex: 20,
    paddingTop: screenSize === "small" ? "60px" : undefined,
    paddingBottom: screenSize === "small" ? "20px" : undefined,
    paddingLeft:
      screenSize === "small"
        ? "8px"
        : screenSize === "medium"
          ? "20px"
          : undefined,
    paddingRight:
      screenSize === "small"
        ? "8px"
        : screenSize === "medium"
          ? "20px"
          : undefined,
    padding: screenSize === "medium" ? "100px 20px" : screenSize === "large" ? "120px 0" : undefined,
    width: "100%",
    maxWidth: screenSize === "small" ? "100vw" : "1000px",
    boxSizing: "border-box",
  });

  const getH1Style = (): React.CSSProperties => ({
    fontWeight: 500,
    textAlign: "center" as const,
    marginBottom: "8px",
    fontSize:
      screenSize === "small"
        ? "28px"
        : screenSize === "medium"
          ? "36px"
          : "48px",
  });

  const getDescStyle = (): React.CSSProperties => ({
    lineHeight: 1.6,
    textAlign: "center" as const,
    marginBottom: "25px",
    fontSize:
      screenSize === "small"
        ? "14px"
        : screenSize === "medium"
          ? "16px"
          : "18px",
    maxWidth: screenSize === "small" ? "90%" : "800px",
  });

  const getInstructionStyle = (): React.CSSProperties => ({
    textAlign: "center" as const,
    fontWeight: 600,
    marginBottom: "30px",
    fontSize:
      screenSize === "small"
        ? "14px"
        : screenSize === "medium"
          ? "16px"
          : "18px",
  });

  const getFiltersStyle = (): React.CSSProperties => ({
    width: "100vw",
    background: "#d3a069",
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    textAlign: "center" as const,
    flexWrap: "wrap" as const,
    flexDirection: screenSize === "small" ? "column" : "row",
    gap: screenSize === "small" ? "10px" : "20px",
    padding: screenSize === "small" ? "10px" : screenSize === "medium" ? "15px" : "30px 8px",
    marginBottom: "0.5rem",
    boxSizing: "border-box",
  });

  const getFilterLabelStyle = (): React.CSSProperties => ({
    fontWeight: 700,
    color: "#fff",
    display: "flex",
    alignItems: "center" as const,
    gap: "8px",
    cursor: "pointer",
    fontSize: screenSize === "small" ? "16px" : screenSize === "medium" ? "20px" : "24px",
    position: "relative",
    padding: screenSize === "small" ? "6px 0" : "0",
    width: screenSize === "small" ? "100%" : "auto",
    justifyContent: screenSize === "small" ? "center" : "flex-start",
  });

  const getCheckboxBoxStyle = (): React.CSSProperties => ({
    background: "#5c4a36",
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    width: screenSize === "small" ? "24px" : "30px",
    height: screenSize === "small" ? "24px" : "30px",
    borderRadius: "4px",
    position: "relative",
    marginRight: screenSize === "small" ? "4px" : "8px",
  });

  const getSampleCountStyle = (): React.CSSProperties => ({
    textAlign: "center" as const,
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: screenSize === "small" ? "14px" : "16px",
    width: screenSize === "small" ? "100%" : "auto",
  });

  const getSelectSamplesStyle = (): React.CSSProperties => ({
    fontWeight: 500,
    textAlign: "center" as const,
    marginBottom: "20px",
    fontSize: screenSize === "small" ? "20px" : screenSize === "medium" ? "28px" : "32px",
    width: screenSize === "small" ? "100%" : "auto",
  });

  const getNoSelectionMsgStyle = (): React.CSSProperties => ({
    fontSize: "14px",
    textAlign: "center" as const,
    color: "#000",
    padding: "8px",
    width: screenSize === "small" ? "100%" : "auto",
  });

  return (
    <header style={getHeaderStyle()}>
      {/* Breadcrumb */}
      <div style={getBreadcrumbStyle()}>
        <a href="" style={{ color: "#000", textDecoration: "none" }}>
          Home
        </a>
        <span>/</span>
        <a href="" style={{ color: "#000", textDecoration: "none" }}>
          Start a product
        </a>
        <span>/</span>
        <a href="" style={{ color: "#000", textDecoration: "none" }}>
          Planning
        </a>
        <span>/</span>
        <a href="" style={{ color: "#000", textDecoration: "none" }}>
          Order free sample
        </a>
      </div>

      {/* Main Content */}
      <div style={getMainContentStyle()}>
        <h1 style={getH1Style()}>
          Order Free Decking & Cladding Samples
        </h1>
        <p style={getDescStyle()}>
          Get up to 3 free samples of Millboard composite decking or cladding.
          All sample packs are delivered free of charge with a complimentary
          Millboard brochure if requested.
        </p>
        <p style={getInstructionStyle()}>
          Simply Select the samples you would like by clicking on them.
        </p>

        {/* Filters */}
        <div style={getFiltersStyle()}>
          <span
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize:
                screenSize === "small"
                  ? "16px"
                  : screenSize === "medium"
                    ? "20px"
                    : "24px",
            }}
          >
            Filters:
          </span>

          {/* Cladding */}
          <label htmlFor="cladding" style={getFilterLabelStyle()}>
            <span style={getCheckboxBoxStyle()}>
              {isCladdingChecked && (
                <svg
                  width={screenSize === "small" ? 20 : 24}
                  height={screenSize === "small" ? 20 : 24}
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            CLADDING
            <input
              id="cladding"
              type="checkbox"
              checked={isCladdingChecked}
              onChange={() => setIsCladdingChecked(!isCladdingChecked)}
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                cursor: "pointer",
              }}
            />
          </label>

          {/* Decking */}
          <label htmlFor="decking" style={getFilterLabelStyle()}>
            <span style={getCheckboxBoxStyle()}>
              {isDeckingChecked && (
                <svg
                  width={screenSize === "small" ? 20 : 24}
                  height={screenSize === "small" ? 20 : 24}
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            DECKING
            <input
              id="decking"
              type="checkbox"
              checked={isDeckingChecked}
              onChange={() => setIsDeckingChecked(!isDeckingChecked)}
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                cursor: "pointer",
              }}
            />
          </label>
        </div>

        {/* Sample count */}
        <p style={getSampleCountStyle()}>
          Showing {visibleDeckingSamples} Decking Samples and {visibleCladdingSamples} Cladding Samples
        </p>

        <p style={getSelectSamplesStyle()}>
          Select 3 Samples
        </p>

        {showNoSelectionMessage && (
          <div style={getNoSelectionMsgStyle()}>
            Please select at least one category (Decking or Cladding) to view samples.
          </div>
        )}
      </div>

      {/* Decorative SVG */}
      <svg
        style={{
          position: "absolute",
          bottom: "-1px",
          width: "100%",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          fill="#D3A069"
          stroke="none"
          d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z"
        />
        <path
          fill="#ffffff"
          stroke="none"
          d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z"
        />
      </svg>
    </header>
  );
};

export default Header;
