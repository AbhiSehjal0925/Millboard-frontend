export default function SpecificationsSection() {
  return (
    <section
      style={{
        backgroundImage: "url('/imagesForDecorPage/Specifications_bg.png')",
        // backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF",
        minHeight: "700px",
        padding: "clamp(2rem, 5vw, 4rem) 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative", // for the vertical divider positioning
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.25rem)",
            fontWeight: 600,
            marginBottom: "clamp(2rem, 4vw, 2.5rem)",
          }}
        >
          Specifications
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "clamp(2rem, 4vw, 4rem)",
            textAlign: "left",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", fontWeight: 600 }}>
              Style and Sizes
            </h3>
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
              Décor Curve 47 x 16 x 3600mm
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
              Décor Curve 60 x 16 x 3600mm
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
              Décor Shutter 47 x 16 x 3600mm
            </p>
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
              Décor Shutter 61 x 16 x 3600mm
            </p>

            <div style={{ paddingTop: "1rem" }}>
              <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", fontWeight: 500 }}>
                RRP Per strip shutter or curve 16mm £72.96
              </p>
              <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)", fontWeight: 500 }}>
                RRP Per strip shutter or curve 32mm £96.96
              </p>
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", fontWeight: 600 }}>
                Colours
              </h3>
              <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
                Bronze, Carbon and Gold
              </p>
            </div>
          </div>

      

          {/* Right Column */}
          <div
            style={{
              flex: "1 1 300px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3 style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", fontWeight: 600 }}>
              Testing
            </h3>
            <p style={{ fontSize: "clamp(0.9rem, 1.8vw, 1rem)" }}>
              Tested to the rigorous demands of BS EN 13501-1. Envello Décor when used
              in conjunction with the Shadow Line+ system achieves a classification
              of Euroclass C. This testing is carried out by a UKAS accredited lab and
              is tested in accordance with how the cladding will be fitted as per the
              installation guide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
