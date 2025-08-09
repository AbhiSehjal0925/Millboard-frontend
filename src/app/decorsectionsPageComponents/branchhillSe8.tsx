import Image from "next/image";

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
          maxWidth: "1280px",
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
            maxWidth: "600px",
            padding: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: "700",
              color: "#1F2937",
              marginBottom: "8px",
            }}
          >
            Branch Hill Hampstead
          </h1>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#4B5563",
              lineHeight: "1.6",
              maxWidth: "448px",
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
            maxWidth: "600px",
            padding: "8px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ width: "100%", maxWidth: "320px" }}>
            <Image
              src="/imagesForDecorPage/Branch Hill Hampstead image.png"
              alt="Branch Hill Hampstead"
              width={600}
              height={450}
              priority
              style={{
                borderRadius: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
