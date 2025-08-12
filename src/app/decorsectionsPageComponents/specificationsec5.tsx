import Image from "next/image";
import React from "react";

const Specificationsec5 = () => {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
        height: "80vh",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/imagesForDecorPage/Specifications_bg.jpg"
          alt="Specifications background"
          fill
          style={{ objectFit: "cover", filter: "brightness(0.9)" }}
          priority
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "50px 60px",
          color: "#fff",
          margin: "0 auto",
          flexDirection: "column",
        }}
        className="spec-content"
      >
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 52px)",
            fontWeight: "500",
            marginBottom: "50px",
            marginTop: "20px",
            color: "#ffffffff",
            textAlign: "center",
          }}
        >
          Specifications
        </h2>

        <div
          style={{
            display: "flex",
            maxWidth: "90%",
            flexWrap: "wrap",
            gap: "20px",
            margin: "0 auto",
            alignItems: "flex-start",
          }}
          className="spec-inner"
        >
          {/* Left side */}
          <div
            style={{
              flex: "1 1 400px",
              paddingRight: "20px",
            }}
            className="spec-left"
          >
            <h3 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
              Style and Sizes
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              Décor Curve 47 x 16 x 3600mm
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              Décor Curve 60 x 16 x 3600mm
            </p>
            <br />
            <p style={{ fontSize: "1.2rem" }}>
              Décor Shutter 47 x 16 x 3600mm
            </p>
            <p style={{ fontSize: "1.2rem" }}>
              Décor Shutter 61 x 16 x 3600mm
            </p>
            <br />
            <p style={{ fontSize: "1.2rem" }}>
              <strong>
                RRP Per strip shutter or curve 16mm £72.96
                <br />
                RRP Per strip shutter or curve 32mm £96.96
              </strong>
            </p>

            <h3 style={{ fontSize: "1.7rem", marginTop: "20px" }}>Colours</h3>
            <p style={{ fontSize: "1.2rem" }}>
              Bronze, Carbon and Gold
            </p>
          </div>

          {/* middle line */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="342"
            viewBox="0 0 4 342"
            fill="none"
            style={{ marginRight: "50px" }}
            className="spec-divider"
          >
            <rect width="4" height="342" fill="#D9D9D9" />
          </svg>

          {/* Right side */}
          <div style={{ flex: "1 1 400px" }} className="spec-right">
            <h3 style={{ fontSize: "1.7rem", marginBottom: "10px" }}>
              Testing
            </h3>
            <p style={{ fontSize: "1.2rem" }}>
              Tested to the rigorous demands of BS EN 13501-1, Envello Décor
              when used in conjunction with the Shadow Line+ system achieves a
              classification of Euroclass C. This testing is carried out by a
              UKAS accredited lab and is tested in accordance with how the
              cladding will be fitted as per the installation guide.
            </p>
          </div>
        </div>
      </div>

      {/* Curve SVG */}
      <svg
        width="100%"
        height="68"
        viewBox="0 0 1440 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          bottom: "-2px",
          zIndex: 2,
        }}
      >
        <path
          fill="#ffffffff"
          fillOpacity="1"
          d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
        />
      </svg>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 100% !important;
            padding-bottom: 60px !important;
          }
          .spec-content {
            padding: 20px !important;
          }
          .spec-inner {
            flex-direction: column !important;
            max-width: 100% !important;
            gap: 30px !important;
          }
          .spec-left,
          .spec-right {
            flex: 1 1 100% !important;
            padding-right: 0 !important;
          }
          .spec-divider {
            display: none !important;
          }
          h3 {
            font-size: 1.4rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Specificationsec5;
