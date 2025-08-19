import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Section8() {

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1024;
    const isMobile = windowWidth <= 600;

    return (
        <div
            className="nextproject-section"
            style={{
                width: "100%",
                minHeight: "100vh",
                backgroundImage: "url('/imagesForDecorPage/Rectangle 6751.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                paddingBottom: "250px",
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
                        Start your project
                    </h2>
                </div>

                {/* Projects */}
                <div
                    className="projects-wrapper"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        width: "100%",
                        padding: isMobile ? '10px' : "0 60px",
                        marginTop: "clamp(24px, 5vw, 40px)",
                        gap: "clamp(20px, 5vw, 40px)",
                        justifyContent: "space-between",
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
                            flexDirection: isMobile ? "column" : "row",
                        }}
                    >
                        <Image
                            src='/imagesForOrderPage/Start your project image 1.png'
                            alt="Left Project"
                            width={400}
                            height={300}
                            style={{
                                width: "100%",
                                height: "550px",
                                maxWidth: "500px",
                            }}
                        />
                        <div
                            className="overlay-left"
                            style={{
                                position: "absolute",
                                top: "170px",
                                left: "380px",
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
                            <p style={{ fontSize: "35px", color: "#1F2937", margin: 0 }}>Find a Decking Installer</p>
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
                            flexDirection: isMobile ? "column" : "row",
                        }}
                    >
                        <Image
                            src='/imagesForOrderPage/Start your project image 2.png'
                            alt="Right Project"
                            width={400}
                            height={300}
                            style={{
                                width: "100%",
                                height: "550px",
                                maxWidth: "500px",
                            }}
                        />
                        <div
                            className="overlay-right"
                            style={{
                                position: "absolute",
                                top: "170px",
                                left: "-140px",
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
                                Where to buy
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


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="33.888 0 2033.28 241.86486486486487" width="2033.28" height="241.86486486486487"
                style={{
                    position: 'absolute',
                    bottom: '0px',
                    maxHeight: '500px'
                }}
            >
                <g filter="url(#filter0_d_190_2)">
                    <path fill="white" d="M4 146.773C4 68.8162 85.1841 17.4202 155.648 50.7673V50.7673C191.629 67.795 234.11 63.2748 265.702 39.057L279.908 28.1667C319.421 -2.12337 372.36 -8.31231 417.794 12.0468L488.927 43.9211C536.973 65.4505 592.697 60.8743 636.587 31.7952V31.7952C685.374 -0.528113 748.288 -2.32293 798.838 27.1665L805.836 31.2493C856.125 60.5867 918.08 61.5499 969.257 33.7898L991.169 21.9038C1040.06 -4.6178 1099.8 -2.61169 1147.02 26.7847V26.7847C1197.47 58.1924 1261.94 57.8458 1311.8 25.5049V25.5049C1356.36 -3.40269 1412.72 -7.16752 1460.74 15.5555L1499.76 34.0254C1559.03 62.0738 1627.95 61.0634 1686.37 31.2895L1705.9 21.3389C1757.69 -5.05928 1819.34 -3.39306 1869.64 25.7644L1921.05 55.5709C1945.32 69.6382 1975.45 68.8679 1998.98 53.6044V53.6044C2048.5 21.4833 2114 56.9745 2114 116V116V116C2114 220.934 2028.93 306 1924 306H130.765C60.7547 306 4 249.245 4 179.235V146.773Z" />
                </g>
                <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="313.805" width="2118" y="0.195312" x="0" id="filter0_d_190_2">
                        <feFlood result="BackgroundImageFix" floodOpacity="0" />
                        <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite operator="out" in2="hardAlpha" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" type="matrix" />
                        <feBlend result="effect1_dropShadow_190_2" in2="BackgroundImageFix" mode="normal" />
                        <feBlend result="shape" in2="effect1_dropShadow_190_2" in="SourceGraphic" mode="normal" />
                    </filter>
                </defs>
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
