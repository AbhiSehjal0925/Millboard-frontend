import Image from "next/image";
import React from "react";

const colours = [
  { src: "/imagesForDecorPage/Available Colours img 1.png", label: "Gold - Burnt Cedar", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 2.png", label: "Carbon -Burnt Cedar", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 3.png", label: "Bronze - Burnt Cedar", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 4.png", label: "Gold - Limed Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 5.png", label: "Carbon - Limed Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 6.png", label: "Bronze - Limed Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 7.png", label: "Gold - Golden Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 8.png", label: "Carbon - Golden Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 9.png", label: "Bronze - Golden Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 10.png", label: "Gold - Grey Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 11.png", label: "Carbon - Grey Oak", productName: 'Décor Shutter' },
  { src: "/imagesForDecorPage/Available Colours img 12.png", label: "Bronze - Grey Oak", productName: 'Décor Shutter' },
];

export default function AvailableColours() {
  return (
    <section
      style={{
        backgroundColor: "#efcfac",
        padding: "50px 0px",
        position: "relative",
        paddingBottom: "120px",
      }}
    >
      <style>
        {`
          /* Tablet screens */
          @media (max-width: 1024px) {
            .colours-grid {
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
              gap: 24px !important;
            }
            .colours-text {
              font-size: 18px !important;
              left: 20px !important;
            }
            .view-all-btn {
              padding: 14px 40px !important;
              font-size: 18px !important;
            }
          }

          /* Mobile screens */
          @media (max-width: 600px) {
            .colours-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .colours-text {
              font-size: 16px !important;
              left: 15px !important;
            }
            .view-all-btn {
              padding: 12px 30px !important;
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <div style={{ maxWidth: '1600px', margin: "0 auto", textAlign: "center", padding: '10px' }}>
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 52px)",
            fontWeight: "500",
            color: "#FFFFFF",
            marginBottom: "40px",
          }}
        >
          Available Colours
        </h2>

        <div
          className="colours-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", // desktop unchanged
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          {colours.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#d3a069",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                width={400}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  padding: "16px",
                  paddingBottom: "45px",
                  paddingTop: "30px",
                }}
              />
              <div
                className="colours-text"
                style={{
                  fontSize: "22px", // desktop unchanged
                  color: "#FFFFFF",
                  padding: "8px 0",
                  position: "absolute",
                  bottom: "0px",
                  left: '30px',
                  textAlign: "left",
                }}
              >
                {item.productName}
                <br />
                <b>{item.label}</b>
              </div>
            </div>
          ))}
        </div>
        <br />
        <button
          className="view-all-btn coolBeans"
          style={{
            padding: "18px 60px", // desktop unchanged
            backgroundColor: "#D3A069",
            color: "#FFFFFF",
            fontWeight: "500",
            borderRadius: "9999px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "2px solid #FFFFFF",
            transition: "background-color 0.3s, color 0.3s",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          View All
        </button>

      </div>

      {/* SVG background decoration */}
      <svg
          width="100%"
          height="68"
          viewBox="0 0 1440 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '0px',
            zIndex: '121',
          }}
        >
          <path
            fill="#ffffffff"
            fillOpacity="1"
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
            position: 'absolute',
            bottom: '0px',
            filter: 'drop-shadow(0 -18px 10px #d3a069)',
          }}
        >
          <path
            fill="#d3a069"
            fillOpacity="1"
            d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
          />
        </svg>

    </section>
  );
}
