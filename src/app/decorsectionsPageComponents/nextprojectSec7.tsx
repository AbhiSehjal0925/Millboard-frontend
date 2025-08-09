import React from "react";

const NextProject = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/imagesForDecorPage/next project bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div style={{ padding: "16px", minHeight: "1000px" }}>
        <div
          style={{
            textAlign: "center",
            paddingTop: "clamp(40px, 8vw, 80px)",
            color: "#FFFFFF",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "700",
            }}
          >
            For your next project
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              marginTop: "8px",
            }}
          >
            Inspiration & ideas
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            padding: "0 16px",
            marginTop: "clamp(24px, 5vw, 40px)",
            gap: "clamp(20px, 5vw, 40px)",
            justifyContent: "center",
          }}
        >
          {/* Left block */}
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              flex: "1 1 300px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/imagesForDecorPage/next_project_left.png"
              alt="Left Project"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxWidth: "400px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)",
                width: "clamp(180px, 30%, 240px)",
                left: "clamp(180px, 28%, 240px)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  fontWeight: "600",
                  color: "#1F2937",
                }}
              >
                Discover Shadow
              </p>
              <p
                style={{
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  fontWeight: "600",
                  color: "#1F2937",
                }}
              >
                Line+ Cladding
              </p>
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
                }}
              >
                Read more
              </button>
            </div>
          </div>

          {/* Right block */}
          <div
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
            <img
              src="/imagesForDecorPage/next_project_right.png"
              alt="Right Project"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                maxWidth: "400px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#FFFFFF",
                padding: "16px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.25)",
                width: "clamp(180px, 30%, 240px)",
                left: "clamp(16px, 4%, 32px)",
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  fontWeight: "600",
                  color: "#1F2937",
                }}
              >
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
                }}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextProject;
