import Image from "next/image";
import React from "react";

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
    gap: "92px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 210px",
  };

  const featureItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    width: "420px",
  };

  const iconStyle: React.CSSProperties = {
    objectFit: "contain",
    marginTop: "4px",
  };

  return (
    <section style={containerStyle}>
      <div>
        <div
          style={{
            ...gridStyle,
            // Small screen adjustments
            ...(typeof window !== "undefined" &&
              window.innerWidth <= 768 && {
                flexDirection: "column",
                padding: "20px",
                gap: "32px",
              }),
          }}
        >
          {features.map((item) => (
            <div
              key={item.title}
              style={{
                ...featureItemStyle,
                ...(typeof window !== "undefined" &&
                  window.innerWidth <= 768 && {
                    width: "100%",
                    justifyContent: "flex-start",
                    gap: "12px",
                  }),
              }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={window.innerWidth <= 768 ? 60 : 100}
                height={window.innerWidth <= 768 ? 60 : 100}
                style={iconStyle}
              />
              <div>
                <h4
                  style={{
                    fontSize: window.innerWidth <= 768 ? "18px" : "24px",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: window.innerWidth <= 768 ? "13px" : "14px",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
