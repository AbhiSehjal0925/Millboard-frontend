import React from "react";
import TestimonialsCard from "../subComponents/TestimonialsCard";

const Section5th: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    display: "flex",
    padding: "40px 20px 60px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "Mansfield, serif",
    fontWeight: 500,
    fontSize: "36px",
    lineHeight: 1.2,
    color: "#1E1E1E",
    textTransform: "capitalize" as const,
    textAlign: "center" as const,
    marginTop: "20px",
  };

  const cardsWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    width: "100%",
  };

  const arrowStyle: React.CSSProperties = {
    width: "24px",
    height: "24px",
    cursor: "pointer",
    color: "black",
  };

  const cardContainerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "350px",
    borderRadius: "26px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    gap: "1rem",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Heading */}
        <div style={headingStyle}>Our trusted supporters</div>

        {/* Cards Row */}
        <div style={cardsWrapperStyle}>
          {/* Left Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={arrowStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>

          {/* Testimonial Card */}
          <div style={cardContainerStyle}>
            <TestimonialsCard />
          </div>

          {/* Right Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={arrowStyle}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Section5th;
