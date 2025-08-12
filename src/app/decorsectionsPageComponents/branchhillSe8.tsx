import Image from "next/image";
import React from "react";

export default function BranchhillSe8() {
  return (
    <section
      style={{
        padding: "clamp(24px, 5vw, 48px) 0",
        backgroundColor: "#FFFFFF",
        minHeight: "300px",
      }}
    >
      <div
        style={{
          maxWidth: "90%",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          padding: "0 16px",
          gap: "16px",
        }}
      >
        {/* Text Content */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 54px)", // Responsive font
              color: "#1F2937",
              marginBottom: "8px",
              textAlign: "center", // Center text on small screens
            }}
          >
            Branch Hill Hampstead
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 26px)", // Responsive font
              color: "#282b30ff",
              lineHeight: "1.6",
              textAlign: "center", // Center text on small screens
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: "1 1 300px",
            padding: "8px",
            display: "flex",
            justifyContent: "center", // Center image on mobile
          }}
        >
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <Image
              src="/imagesForDecorPage/Branch Hill Hampstead image.png"
              alt="Branch Hill Hampstead"
              width={600}
              height={400}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section div[style*="display: flex"] {
            flex-direction: column; /* Stack text above image */
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
