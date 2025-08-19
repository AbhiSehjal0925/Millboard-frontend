import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section7 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? '60px 16px' : '40px 80px',
        paddingBottom: '80px',
        paddingTop: '80px',
        backgroundColor: '#fff',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '24px' : '0',
      }}
    >
      {/* Left Image */}
      <div
        style={{
          flex: isMobile ? 'none' : '1 1 480px',
          maxWidth: isMobile ? '100%' : '850px',
          overflow: 'hidden',
          marginBottom: isMobile ? '24px' : '24px',
          position: 'relative', // needed for Image fill
          aspectRatio: '4/3', // keeps space reserved until image loads
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <Image
          src="/imagesForBlogPage/Rectangle 6739 (1).png"
          alt="Decking Preview"
          fill
          style={{
            objectFit: 'cover',
            display: 'block',
            borderRadius: '30px',
          }}
        />
      </div>

      {/* Right Text */}
      <div
        style={{
          flex: isMobile ? 'none' : '1 1 480px',
          maxWidth: isMobile ? '100%' : '850px',
          color: '#1f2937',
          width: isMobile ? '100%' : 'auto',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 500,
            marginBottom: isMobile ? '24px' : '24px',
            color: '#111827',
          }}
        >
          Unveiling the Future of Decking
        </h2>
        <p
          style={{
            fontSize: 'clamp(14px, 2vw, 18px)',
            lineHeight: 1.6,
            marginBottom: isMobile ? '24px' : '16px',
          }}
        >
          With Modello, Millboard continues to push the boundaries of what composite
          decking can achieve. By merging innovative designs with world-class
          materials, Modello offers the ultimate choice for creating outdoor spaces
          that are as functional as they are visually stunning. Whether opting for
          the structured elegance of Linear or the artistic flow of Contour, Modello
          provides a transformative solution for every project.
        </p>
        <p
          style={{
            fontSize: 'clamp(14px, 2vw, 16px)',
            lineHeight: 1.6,
            marginBottom: isMobile ? '24px' : '0',
          }}
        >
          If you have not heard of Millboard products before and would like to learn
          more about what they are made from, we encourage you to browse our website
          and explore our sustainability roadmap.
        </p>
      </div>
    </section>
  );
};

export default Section7;
