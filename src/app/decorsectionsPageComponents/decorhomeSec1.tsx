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
      }}
    >
      <div
        style={{
          padding: "0 16px",
          maxWidth: "800px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: "700",
            color: "#FFFFFF",
            marginBottom: "16px",
          }}
        >
          Envello Decor
        </h1>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 18px)",
            color: "#FFFFFF",
            maxWidth: "512px",
            margin: "0 auto",
            lineHeight: "1.5",
          }}
        >
          Crafted to seamlessly pair with our Shadow Line+ Cladding systems,
          these metallic accents bring an elevated sense of luxury and
          sophistication to any project.
        </p>
      </div>
    </section>
  );
}
