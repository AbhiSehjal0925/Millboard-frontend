import Image from "next/image";
import React from "react";

export default function NextProject() {
  return (
    <div
      className="nextproject-section"
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/imagesForDecorPage/next project bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        paddingBottom: "100px",
        position: "relative",
      }}
    >
      <div style={{ padding: "16px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", color: "#FFFFFF", marginTop: "40px" }}>
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 52px)",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            For your next project
          </h2>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", marginTop: "8px" }}>
            Inspiration & ideas
          </p>
        </div>

        {/* Projects */}
        <div
          className="projects-wrapper"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            padding: "0 16px",
            marginTop: "clamp(24px, 5vw, 40px)",
            gap: "clamp(20px, 5vw, 40px)",
            justifyContent: "space-evenly",
          }}
        >
          {/* Left Card */}
          <div
            className="left-card"
            style={{
              width: "100%",
              maxWidth: "600px",
              flex: "1 1 300px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src="/imagesForDecorPage/next_project_left.png"
              alt="Left Project"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
              }}
            />
            <div
              className="overlay-left"
              style={{
                position: "absolute",
                top: "130px",
                left: "280px",
                backgroundColor: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)",
                height: "180px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "35px", color: "#1F2937", margin: 0 }}>Discover Shadow</p>
              <p style={{ fontSize: "35px", color: "#1F2937", margin: 0 }}>Line+ Cladding</p>
              <button
                style={{
                  marginTop: "8px",
                  backgroundColor: "#D3A069",
                  color: "#FFFFFF",
                  padding: "4px 24px",
                  borderRadius: "9999px",
                  fontWeight: "700",
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                className="coolBeans"
              >
                Read more
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="right-card"
            style={{
              width: "100%",
              maxWidth: "600px",
              flex: "1 1 300px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              marginTop: "clamp(40px, 12vw, 160px)",
            }}
          >
            <Image
              src="/imagesForDecorPage/next_project_right.png"
              alt="Right Project"
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "400px",
              }}
            />
            <div
              className="overlay-right"
              style={{
                position: "absolute",
                top: "130px",
                left: "-35px",
                backgroundColor: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)",
                height: "180px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3 style={{ fontSize: "35px", color: "#1F2937", margin: 0 }}>
                Get inspired for your project
              </h3>
              <button
                style={{
                  marginTop: "8px",
                  backgroundColor: "#D3A069",
                  color: "#FFFFFF",
                  padding: "4px 24px",
                  borderRadius: "9999px",
                  fontWeight: "700",
                  fontSize: "clamp(12px, 1.5vw, 16px)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                className="coolBeans"
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Waves */}
      <svg
        width="100%"
        height="68"
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", bottom: "-2px", zIndex: "121" }}
      >
        <path
          fill="#ffffffff"
          d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
        />
      </svg>
      <svg
        width="100%"
        height="68"
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "0px",
          filter: "drop-shadow(0 -10px 10px rgba(211, 160, 105, 0.42))",
        }}
      >
        <path
          fill="#d3a0699d"
          d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
        />
      </svg>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .overlay-left,
          .overlay-right {
            position: relative !important;
            top: 0 !important;
            left: 0 !important;
            transform: none !important;
            width: 100% !important;
            max-width: 90% !important;
            height: auto !important;
            margin-top: 16px;
            margin-left: 16px !important;
          }
          .overlay-left p,
          .overlay-right h3 {
            font-size: clamp(18px, 5vw, 28px) !important;
          }
        }
        @media (max-width: 768px) {
          .projects-wrapper {
            flex-direction: column !important;
            align-items: center !important;
          }
          .left-card,
          .right-card {
            margin-top: 40px !important;
          }
          .overlay-left,
          .overlay-right {
            padding: 12px !important;
          }
          .overlay-left p,
          .overlay-right h3 {
            font-size: clamp(16px, 4.5vw, 24px) !important;
          }
        }
      `}</style>
    </div>
  );
}
