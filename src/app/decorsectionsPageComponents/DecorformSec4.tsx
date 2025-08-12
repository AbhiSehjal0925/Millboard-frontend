import React, { useEffect, useState } from "react";

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resizing for responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sharedInputStyle = {
    width: "100%",
    backgroundColor: "#faefe4",
    padding: "12px",
    color: "#1F2937",
    fontSize: "16px",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      style={{
        padding: isMobile ? "32px 16px" : "48px 24px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div style={{ margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            fontSize: "clamp(24px, 4vw, 52px)",
            fontWeight: "500",
            marginBottom: "50px",
            marginTop: '20px',
            color: "#1F2937",
            textAlign: "center",
          }}
        >
          Lorem ipsum
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "40px",
            padding: isMobile ? "0" : "0 24px",
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              flex: "1 1 50%",
              color: "#1F2937",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              letterSpacing: "0.5px",
              lineHeight: "1.6",
              padding: '40px 0px'
            }}
          >
            <p>At Millboard, we believe that every detail matters when creating extraordinary outdoor spaces. That's why we've introduced our Décor range - the market’s first premium, purpose-made cladding trim, available in lustrous Gold, sleek Carbon, and timeless Bronze. These metallic accents are designed to perfectly complement Millboard's Shadow Line+ Cladding systems, adding a touch of luxury and sophistication to your projects.</p>
            <p>Décor adds decorative uniqueness and structural durability to any outdoor living space. Décor addresses the desire to include a secondary material to an outdoor wall covering, allowing for a truly aspirational, design led finish. Whether zoning off areas of an installation or purely adding a unique touch to a design, Décor is a designers secret weapon in ensuring a high-end installation that is timeless.</p>
            <p>If you're interested in being one of the first to use Envello Décor in a project or would like to be notified of when samples are available to order, please submit your details below.</p>
          </div>

          {/* Right Form Block */}
          <form
            style={{
              flex: "1 1 50%",
              padding: "24px",
              // borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backgroundColor: "#fff",
              boxSizing: "border-box" as const,
            }}
          >
            {/* Name Fields */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="text" placeholder="First Name*" className="sharedInputStyle" style={sharedInputStyle} />
              <input type="text" placeholder="Last Name*" className="sharedInputStyle" style={sharedInputStyle} />
            </div>

            {/* Email / Phone */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="email" placeholder="Email*" className="sharedInputStyle" style={sharedInputStyle} />
              <input type="tel" placeholder="Phone number*" className="sharedInputStyle" style={sharedInputStyle} />
            </div>

            {/* Role Selector */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "14px",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#1F2937",
                }}
              >
                Are you a homeowner or professional?*
              </label>
              <select style={sharedInputStyle}>
                <option>Please Select</option>
                <option>Homeowner</option>
                <option>Professional</option>
              </select>
            </div>

            {/* Quote Checkbox */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "14px",
                  color: "#1F2937",
                }}
              >
                Please tick below if you’re interested in a Quote or BOQ
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <input type="checkbox" id="quote" style={{ width: "20px", height: "20px", cursor: "pointer" }} />
                <label htmlFor="quote" style={{ fontSize: "14px", color: "#1F2937", marginBottom: '4px' }}>
                  I am interested in a Project Quote or BOQ
                </label>
              </div>
            </div>

            {/* Address Fields */}
            <input type="text" placeholder="Street Address*" className="sharedInputStyle" style={sharedInputStyle} />
            <input type="text" placeholder="Post code*" className="sharedInputStyle" style={sharedInputStyle} />
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="text" placeholder="City*" className="sharedInputStyle" style={sharedInputStyle} />
              <input type="text" placeholder="Country/Region*" className="sharedInputStyle" style={sharedInputStyle} />
            </div>
            <input type="text" placeholder="United Kingdom*" className="sharedInputStyle" style={sharedInputStyle} />

            {/* Submit Button */}
            <div style={{ paddingTop: "16px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#D3A069",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  padding: "15px 33px",
                  borderRadius: "9999px",
                  transition: "background-color 0.3s",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#D9C6A0")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D3A069")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <style jsx>{`
  .sharedInputStyle:focus, select:focus {
    outline: 2px solid #efcfac !important;
    box-shadow: none !important;
  }
  input[type="checkbox"] {
    accent-color: #D3A069;
  }
`}</style>
    </section>
  );
}
