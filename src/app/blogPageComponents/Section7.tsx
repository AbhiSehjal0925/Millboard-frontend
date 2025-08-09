import React from 'react';

const Section7 = () => {
    return (
        <section
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px 16px",
                backgroundColor: "#fff",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            {/* Left Image */}
            <div
                style={{
                    flex: "1 1 480px",
                    maxWidth: "600px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    marginBottom: "24px",
                }}
            >
                <img
                    src="/imagesForBlogPage/Rectangle 6739 (1).png" 
                    alt="Decking Preview"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </div>

            {/* Right Text */}
            <div
                style={{
                    flex: "1 1 480px",
                    maxWidth: "640px",
                    padding: "0 24px",
                    color: "#1f2937",
                }}
            >
                <h2
                    style={{
                        fontSize: "clamp(24px, 3vw, 36px)",
                        fontWeight: 600,
                        marginBottom: "24px",
                        color: "#111827",
                    }}
                >
                    Unveiling the Future of Decking
                </h2>
                <p
                    style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: 1.6,
                        marginBottom: "16px",
                    }}
                >
                    With Modello, Millboard continues to push the boundaries of what
                    composite decking can achieve. By merging innovative designs with
                    world-class materials, Modello offers the ultimate choice for creating
                    outdoor spaces that are as functional as they are visually stunning.
                    Whether opting for the structured elegance of Linear or the artistic
                    flow of Contour, Modello provides a transformative solution for every
                    project.
                </p>
                <p
                    style={{
                        fontSize: "clamp(14px, 2vw, 16px)",
                        lineHeight: 1.6,
                    }}
                >
                    If you have not heard of Millboard products before and would like to
                    learn more about what they are made from, we encourage you to browse
                    our website and explore our sustainability roadmap.
                </p>
            </div>
        </section>
    );
}

export default Section7;
