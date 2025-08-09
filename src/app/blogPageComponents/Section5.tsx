import React from 'react';

const Section5 = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '48px 16px',
    backgroundColor: '#FFFFFF',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    gap: '32px',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const contentStyle: React.CSSProperties = {
    flex: '1 1 500px',
    maxWidth: '650px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(24px, 4vw, 36px)',
    fontWeight: 600,
    color: '#1F2937',
    marginBottom: '24px',
  };

  const paragraphTitleStyle: React.CSSProperties = {
    fontWeight: 600,
    fontSize: 'clamp(16px, 2vw, 18px)',
    margin: '20px 0 8px',
    color: '#111827',
  };

  const listItemStyle: React.CSSProperties = {
    fontSize: 'clamp(14px, 2vw, 16px)',
    lineHeight: '1.6',
    color: '#4B5563',
    marginBottom: '16px',
    listStyleType: 'none',
    // marginLeft: '20px',
  };

  const imageContainerStyle: React.CSSProperties = {
    flex: '1 1 400px',
    textAlign: 'center',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    borderRadius: '16px',
    objectFit: 'cover',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>Why Choose Modello by Millboard?</h1>
          <div>
            <p style={paragraphTitleStyle}>A World-First Innovation</p>
            <li style={listItemStyle}>
              As the first-ever patterned composite decking, Modello sets a new industry standard,
              ensuring that every outdoor space is a true original.
            </li>

            <p style={paragraphTitleStyle}>Commitment to Sustainability</p>
            <li style={listItemStyle}>
              Millboard integrates sustainable practices throughout its operations, from using
              certified recycled materials to harnessing renewable energy in manufacturing.
            </li>

            <p style={paragraphTitleStyle}>Exceptional Durability</p>
            <li style={listItemStyle}>
              Constructed with high-performance resin mineral composite materials, Modello does not
              require staining, sealing, or sanding and is highly resistant to fading, wear, and
              harsh weather conditions, ensuring long-term beauty and resilience.
            </li>

            <p style={paragraphTitleStyle}>Unrivalled Customisation</p>
            <li style={listItemStyle}>
              With an extensive selection of over 50 patterns, simply by offsetting boards, Modello
              offers unmatched design flexibility, allowing individuals to create spaces that
              reflect their personal style.
            </li>

            <p style={paragraphTitleStyle}>Limitless Applications</p>
            <li style={listItemStyle}>
              Whether used for full decks, feature inlays, or zonal demarcations, Modello adapts
              effortlessly to various spaces and styles.
            </li>
          </div>
        </div>
        <div style={imageContainerStyle}>
          <img
            src="/imagesForBlogPage/Union (3).png"
            alt="modello image"
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default Section5;
