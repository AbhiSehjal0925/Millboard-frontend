import React from 'react';

export default function DownloadsSection() {
  // Shared button style
  const buttonStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "4px solid #F5D8B5",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontWeight: 600,
    padding: "8px 24px",
    borderRadius: "20px",
    textDecoration: "none",
    transition: "background-color 0.2s ease",
  };

  // Responsive wrapper style (using media query via inline workaround)
  const responsiveContainer: React.CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
  };

  return (
    <section style={{ padding: "48px 16px", backgroundColor: "#FFFFFF" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 5vw, 30px)",
            fontWeight: 600,
            marginBottom: "40px",
            color: "#1F2937",
          }}
        >
          Downloads
        </h2>

        <div style={responsiveContainer}>
          {/* Button 1 */}
          <a
            href="/downloads/wind-resistance-report.pdf"
            download
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F3E0CE")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#EFCFAC",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", color: "#000000" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            Wind Resistance Report
          </a>

          {/* Button 2 */}
          <a
            href="/downloads/wind-resistance-report-2.pdf"
            download
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F3E0CE")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFFFFF")}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#EFCFAC",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                style={{ width: "16px", height: "16px", color: "#000000" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            Wind Resistance Report
          </a>
        </div>
      </div>
    </section>
  );
}
