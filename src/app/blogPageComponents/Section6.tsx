import Image from 'next/image';
import React from 'react';

const Section6 = () => {
  const sectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 16px',
    backgroundColor: '#F5D7B7',
    position: 'relative',
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    maxWidth: '1100px',
    width: '100%',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  };

  const cardShadowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '420px',
    height: 'auto',
    backgroundColor: '#C8925B',
    borderRadius: '12px',
    zIndex: 0,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    padding: '32px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '420px',
    zIndex: 1,
    position: 'relative',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#000000',
    marginBottom: '16px',
  };

  const paragraphStyle: React.CSSProperties = {
    color: '#333333',
    lineHeight: 1.6,
    fontSize: '14px',
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: '24px',
    padding: '8px 16px',
    backgroundColor: '#D3A069',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 0,
    borderRadius: '12px',
    overflow: 'hidden', // ensures the image corners are rounded
    width: '420px',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Card shadow layer */}
        <div style={cardShadowStyle}></div>

        {/* Main card */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>Endless Possibilities</h2>
          <p style={paragraphStyle}>
            Modello opens the door to limitless design possibilities. By offering the same board it is possible to create over 50 unique
            patterns that cater to both traditional and contemporary designs. Whether aiming for refined symmetry or bold dynamic configurations,
            Modello empowers homeowners and design professionals to bring their vision to life. Some of its most popular applications include
            full-deck transformations that achieve a sophisticated seamless look across large spaces, feature inlays that highlight entrances,
            pathways, or dining areas with artistic precision, and zonal demarcations that define distinct functional areas while maintaining
            a cohesive look.
          </p>
          <button style={buttonStyle}>Read more</button>
        </div>

        {/* Image */}
        <div style={imageContainerStyle}>
          <Image
            src="/imagesForBlogPage/Group 1000006211 (1).png"
            alt="Endless Possibilities"
            width={420}
            height={280} // approximate; adjust to match your real image ratio
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section6;
