import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section1 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWidth(); // Initial check
    window.addEventListener(&apos;resize&apos;, checkWidth);

    return () => window.removeEventListener(&apos;resize&apos;, checkWidth);
  }, []);

  const containerStyle: React.CSSProperties = {
    width: &apos;100%&apos;,
    position: &apos;relative&apos;,
    overflow: &apos;hidden&apos;,
    padding: &apos;2rem 1rem&apos;,
  };

  const herosecContentStyle: React.CSSProperties = {
    maxWidth: &apos;1200px&apos;,
    margin: &apos;0 auto&apos;,
    display: &apos;flex&apos;,
    alignItems: &apos;center&apos;,
    justifyContent: &apos;space-between&apos;,
    gap: &apos;2rem&apos;,
    flexDirection: isMobile ? &apos;column&apos; : &apos;row&apos;,
    textAlign: isMobile ? &apos;center&apos; : &apos;left&apos;,
    padding: &apos;40px&apos;,
  };

  const textStyle: React.CSSProperties = {
    flex: 1,
    fontSize: &apos;clamp(0.9rem, 2vw, 1.2rem)&apos;,
    lineHeight: 1.6,
    color: &apos;#333&apos;,
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: 1,
    maxWidth: isMobile ? &apos;100%&apos; : &apos;600px&apos;,
    height: &apos;auto&apos;,
  };

  const imageStyle: React.CSSProperties = {
    width: &apos;100%&apos;,
    height: &apos;auto&apos;,
    objectFit: &apos;cover&apos;,
    borderRadius: &apos;10px&apos;,
  };

  return (
    <section style={containerStyle}>
      <div style={herosecContentStyle}>
        <div style={textStyle}>
          <p>
            Modello by Millboard is redefining what&apos;s possible in outdoor design.
            As the world&apos;s first patterned composite decking, it brings together
            cutting-edge innovation, striking aesthetics, and exceptional durability.
            With two distinct styles—Linear and Contour—and a thoughtfully curated
            colour palette, Modello offers a new level of customisation for homeowners
            and design professionals alike. Whether you&apos;re envisioning bold geometric
            layouts or more fluid, organic expressions, Modello delivers a premium
            resin mineral composite decking as creative and unique as your imagination.
          </p>
        </div>
        <div style={imageContainerStyle}>
          <Image
            src="/imagesForBlogPage/Rectangle%206730.png" // encoded space
            alt="Modello Deck"
            width={600}
            height={400}
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
