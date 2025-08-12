export default function DecorhomeSec1() {
  return (
    <section
      style={{
        padding: "48px 0",
        textAlign: "center",
        backgroundImage: "url('/imagesForDecorPage/decorPageImg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "87vh",
      }}
    >
      <div
        style={{
          padding: "0 16px",
          maxWidth: "800px",
          marginBottom: "150px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 6vw, 52px)", // Bigger for small screens but capped for large
            fontWeight: "500",
            color: "#FFFFFF",
            marginBottom: "16px",
            textShadow: "6px 2px 4px rgba(0, 0, 0, 0.3)",
            fontFamily: "Mansfield",
            lineHeight: "1.2",
          }}
        >
          Envello Decor
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 4vw, 20px)", // Better readability on small devices
            color: "#FFFFFF",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily: "shega",
            padding: "0 10px", // Extra padding for mobile text spacing
          }}
        >
          Crafted to seamlessly pair with our Shadow Line+ Cladding systems, these metallic accents bring an elevated sense of luxury and sophistication to any project
        </p>
      </div>

      {/* Decorative SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="xMidYMax meet"
        style={{
          position: "absolute",
          bottom: "-1px",
          width: "100%",
        }}
      >
        <path
          fill="#D3A069"
          stroke="none"
          d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z"
        />
        <path
          fill="#ffffff"
          stroke="none"
          d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z"
        />
      </svg>

      {/* Mobile-Only Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            min-height: 600px;
            height: auto;
            padding: 60px 0 120px;
          }
          div {
            margin-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
}
