import React from 'react';
import Image from 'next/image';

const Section9 = () => {
  const articles = [
    {
      image: '/imagesForBlogPage/Rectangle 6741.png',
      text: 'MDE176H_Enhanced Grain_Ashwood_Golden Oak Mix_Lifestyle Hero.png. Millboard Expands Global Presence with Acquisition of Leading French Distributor',
    },
    {
      image: '/imagesForBlogPage/Rectangle 6741 (1).png',
      text: 'MDE176H_Enhanced Grain_Ashwood_Lifestyle Daytime Hero.png. Millboard Enhanced Grain now in Ebony Grey and Ashwood',
    },
  ];

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    gap: '40px',
    padding: '40px 20px',
    backgroundColor: '#fff',
    color: 'black',
  };

  const headingStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center',
    fontSize: 'clamp(24px, 4vw, 3rem)',
    fontWeight: 500,
    marginBottom: '32px',
  };

  const cardStyle: React.CSSProperties = {
    position: 'relative',
    width: 'clamp(280px, 40vw, 650px)',
    height: 'clamp(300px, 45vw, 650px)',
    overflow: 'hidden',
    borderRadius: '16px',
  };

  const textBoxStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '200px',
    left: '50%',
    // transform: 'translateX(-50%)',
    width: '300px',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '20px',
    fontSize: 'clamp(12px, 2vw, 16px)',
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.49) 0px 4px 8px',
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Related Articles</h2>
      {articles.map((article, index) => (
        <div key={index} style={cardStyle}>
          <Image
            src={article.image}
            alt={`Article ${index + 1}`}
            fill
          // style={{ objectFit: 'conatin' }}
          />
          <div style={textBoxStyle}>{article.text}</div>
        </div>
      ))}
    </section>
  );
};

export default Section9;
