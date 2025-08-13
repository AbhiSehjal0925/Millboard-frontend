import Image from 'next/image';
import React from 'react';

const Section6 = () => {
  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '100px',
    backgroundColor: '#F5D7B7',
    position: 'relative',
  };
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    maxWidth: '1200px',
    width: '100%',
    gap: '40px',
    flexWrap: 'wrap',
    paddingBottom: '50px',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    zIndex: 2,
    position: 'relative',
    left: '50px',
    bottom: '10px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 600,
    color: '#000000',
    marginBottom: '16px',
  };

  const paragraphStyle: React.CSSProperties = {
    color: '#333333',
    lineHeight: 1.6,
    fontSize: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#D3A069',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const imageContainerStyle: React.CSSProperties = {
    borderRadius: '12px',
    overflow: 'hidden',
    zIndex: 1,
    position: 'relative',
    right: '50px',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Left side - Card */}
        <div style={{ position: 'relative' }}>
          <div style={cardStyle}>
            <h2 style={headingStyle}>Endless Possibilities</h2>
            <p style={paragraphStyle}>
              Modello opens the door to limitless design possibilities. By offsetting the same board it is possible to create over 50 unique
              patterns that cater to both traditional and contemporary designs. Whether aiming for refined symmetry or bold, dynamic configurations,
              Modello empowers homeowners and design professionals to bring their vision to life. Some of its most popular applications include
              full-deck transformations that achieve a sophisticated seamless look across large spaces, feature inlays that highlight entrances,
              pathways, or dining areas with artistic precision, and zonal demarcations that define distinct functional areas while maintaining
              a cohesive look.
            </p>
            <button style={buttonStyle}>Read more</button>
          </div>
        </div>

        {/* Right side - Image */}
        <div style={imageContainerStyle}>
          <Image
            src="/imagesForBlogPage/Group 1000006211 (1).png"
            alt="Endless Possibilities"
            width={420}
            height={480}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <svg style={{
        position: 'absolute',
        bottom: '-1px',
        zIndex: '121',
        transform: 'rotateY(180deg)'
      }}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
        <path fill="#D3A069" stroke='none' d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
        <path fill="#ffffff" stroke='none' d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
      </svg>

    </section>
  );
};

export default Section6;
