import Image from "next/image";

export default function MultipleDecorSec2() {
  const features = [
    {
      icon: "/imagesForDecorPage/Premium finish icon.png",
      title: "Premium finish",
      description:
        "Finished to Qualanod standards, for a premium quality finish.",
    },
    {
      icon: "/imagesForDecorPage/Multiple Widths icon.png",
      title: "Multiple Widths",
      description:
        "Available in two widths and profiles for multiple design led finishes.",
    },
    {
      icon: "/imagesForDecorPage/Mask group.png",
      title: "Highly UV resistant",
      description:
        "Anodised to AA25 architectural grade for high UV resistance.",
    },
    {
      icon: "/imagesForDecorPage/outdoors icon.png",
      title: "Suitable for outdoors",
      description:
        "Grade aluminium provides excellent corrosion resistance.",
    },
    {
      icon: "/imagesForDecorPage/Fire Rated Icon.png",
      title: "Fire-rated System",
      description:
        "Certified to a Euroclass C when used with Shadow Line+.",
    },
  ];

  const containerStyle: React.CSSProperties = {
    padding: "48px 16px",
    color: "#1F2937",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "32px",
  };

  const featureItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
  };

  const iconStyle: React.CSSProperties = {
    objectFit: "contain",
    marginTop: "4px",
  };

  return (
    <section style={containerStyle}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={gridStyle}>
          {features.map((item) => (
            <div key={item.title} style={featureItemStyle}>
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={40}
                style={iconStyle}
              />
              <div>
                <h4 style={{ fontSize: "18px", fontWeight: 500 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: "14px" }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
