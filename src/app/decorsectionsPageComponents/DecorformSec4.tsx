import React, { useEffect, useState } from "react";

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const sharedInputStyle = {
    width: "100%",
    backgroundColor: "#FBEFE5",
    padding: "12px",
    borderRadius: "4px",
    color: "#1F2937",
    fontSize: "16px",
    border: "1px solid #ccc",
    boxSizing: "border-box" as const,
  };

  return (
    <section style={{ padding: isMobile ? "32px 16px" : "48px 24px", backgroundColor: "#FFFFFF" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: isMobile ? "24px" : "30px",
            fontWeight: "600",
            textAlign: "center",
            marginBottom: "32px",
            color: "#1F2937",
          }}
        >
          Lorem ipsum
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "40px",
          }}
        >
          {/* Left Text Block */}
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              color: "#1F2937",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p style={{ fontSize: "16px" }}>
              At Millboard, we believe that every detail matters when creating
              your dream outdoor feature...
            </p>
            <p style={{ fontSize: "16px" }}>
              Décor sides are various design-oriented vertical or diagonal slats...
            </p>
            <p style={{ fontSize: "16px" }}>
              Décor cladding can be specified for just the finer visual areas...
            </p>
          </div>

          {/* Right Form Block */}
          <form
            style={{
              width: isMobile ? "100%" : "50%",
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              backgroundColor: "#fff",
              boxSizing: "border-box" as const,
            }}
          >
            {/* Name */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="text" placeholder="First Name*" style={sharedInputStyle} />
              <input type="text" placeholder="Last Name*" style={sharedInputStyle} />
            </div>

            {/* Email / Phone */}
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="email" placeholder="Email*" style={sharedInputStyle} />
              <input type="tel" placeholder="Phone number*" style={sharedInputStyle} />
            </div>

            {/* Role */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#1F2937",
                }}
              >
                Are you a homeowner or professional?*
              </label>
              <select style={{ ...sharedInputStyle }}>
                <option>Please Select</option>
                <option>Homeowner</option>
                <option>Professional</option>
              </select>
            </div>

            {/* Checkbox */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "600",
                  marginBottom: "4px",
                  color: "#1F2937",
                }}
              >
                Please tick below if you’re interested in a Quote or BOQ
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <input
                  type="checkbox"
                  id="quote"
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
                <label htmlFor="quote" style={{ fontSize: "14px", color: "#1F2937" }}>
                  I am interested in a Project Quote or BOQ
                </label>
              </div>
            </div>

            {/* Address */}
            <input type="text" placeholder="Street Address*" style={sharedInputStyle} />
            <input type="text" placeholder="Post code*" style={sharedInputStyle} />

            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "16px" }}>
              <input type="text" placeholder="City*" style={sharedInputStyle} />
              <input type="text" placeholder="Country/Region*" style={sharedInputStyle} />
            </div>

            <input type="text" placeholder="United Kingdom*" style={sharedInputStyle} />

            {/* Submit */}
            <div style={{ paddingTop: "16px" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#D3A069",
                  color: "#FFFFFF",
                  fontWeight: "500",
                  padding: "10px 32px",
                  borderRadius: "9999px",
                  transition: "background-color 0.3s",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#A06534")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#D3A069")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
