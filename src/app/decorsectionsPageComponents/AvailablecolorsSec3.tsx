import Image from "next/image";

const colours = [
  { src: "/imagesForDecorPage/Available Colours img 1.png", label: "Gold - Burnt Cedar" },
  { src: "/imagesForDecorPage/Available Colours img 2.png", label: "Carbon -Burnt Cedar" },
  { src: "/imagesForDecorPage/Available Colours img 3.png", label: "Bronze - Burnt Cedar" },
  { src: "/imagesForDecorPage/Available Colours img 4.png", label: "Gold - Limed Oak" },
  { src: "/imagesForDecorPage/Available Colours img 5.png", label: "Carbon - Limed Oak" },
  { src: "/imagesForDecorPage/Available Colours img 6.png", label: "Bronze - Limed Oak" },
  { src: "/imagesForDecorPage/Available Colours img 7.png", label: "Gold - Golden Oak" },
  { src: "/imagesForDecorPage/Available Colours img 8.png", label: "Carbon - Golden Oak" },
  { src: "/imagesForDecorPage/Available Colours img 9.png", label: "Bronze - Golden Oak" },
  { src: "/imagesForDecorPage/Available Colours img 10.png", label: "Gold - Grey Oak" },
  { src: "/imagesForDecorPage/Available Colours img 11.png", label: "Carbon - Grey Oak" },
  { src: "/imagesForDecorPage/Available Colours img 12.png", label: "Bronze - Grey Oak" },
];

export default function AvailableColours() {
  return (
    <section
      style={{
        backgroundImage: "url('/imagesForDecorPage/avaliable_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "48px 16px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "600",
            color: "#FFFFFF",
            marginBottom: "40px",
          }}
        >
          Available Colours
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {colours.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#D3A069",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
                }}
              />
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  backgroundColor: "#D3A069",
                  padding: "8px 0",
                }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <button
          style={{
            padding: "8px 64px",
            backgroundColor: "#D3A069",
            color: "#FFFFFF",
            fontWeight: "700",
            borderRadius: "9999px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            border: "2px solid #FFFFFF",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#4B5563";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#D3A069";
            e.currentTarget.style.color = "#FFFFFF";
          }}
        >
          View All
        </button>
      </div>
    </section>
  );
}