import React from "react";
import Link from "next/link";

export default function DownloadsSection() {
  const downloads = [
    { href: "/downloads/wind-resistance-report.pdf", label: "Wind Resistance Report" },
    { href: "/downloads/wind-resistance-report-2.pdf", label: "Wind Resistance Report 2" },
  ];

  const sectionStyle: React.CSSProperties = {
    padding: "64px 24px",
    backgroundColor: "#ffffff",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "1152px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 4vw, 52px)",
    fontWeight: "500",
    marginBottom: "64px",
    color: "#111827",
  };

  const buttonsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
    maxWidth: "896px",
    margin: "0 auto",
  };

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    border: "3px solid #F5D8B5",
    backgroundColor: "#ffffff",
    color: "#000000",
    fontWeight: "600",
    padding: "16px 48px 16px 24px",
    borderRadius: "9999px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    minWidth: "280px",
    maxWidth: "320px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  const iconContainerStyle: React.CSSProperties = {
    width: "64px",
    height: "64px",
    backgroundColor: "#EFCFAC",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background-color 0.3s ease",
  };

  const textStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.25",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Downloads
        </h2>

        <div style={buttonsContainerStyle}>
          {downloads.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              download
              style={buttonStyle}>
              <div style={iconContainerStyle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 31"
                  fill="none"
                >
                  <rect
                    x="1.58194"
                    y="0.861242"
                    width="29.0156"
                    height="29.0156"
                    stroke="#EFCFAC"
                    strokeWidth="1.26155"
                  />
                  <path
                    d="M24.9204 11.5849H19.8743V4.01562H12.305V11.5849H7.25879L16.0896 20.4157L24.9204 11.5849ZM7.25879 22.9388V25.4619H24.9204V22.9388H7.25879Z"
                    fill="black"
                  />
                </svg>
              </div>
              <span style={textStyle}>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
