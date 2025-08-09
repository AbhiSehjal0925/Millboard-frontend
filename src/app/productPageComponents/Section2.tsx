import React from 'react';

const Section2 = () => {
  const containerStyle: React.CSSProperties = {
    background: '#efcfac',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '70px 20px',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: 'Mansfield',
    fontWeight: 700,
    fontStyle: 'Bold',
    fontSize: '45px',
    lineHeight: '47px',
    color: '#000',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    gap: '20px',
    padding: '0 20px',
    width: '100%',
    maxWidth: '1328px',
  };

  const imageBoxStyle = (url: string): React.CSSProperties => ({
    width: '100%',
    height: '336px',
    borderRadius: '35px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  // Responsive styles using media queries
  const responsiveStyle = `
    @media (max-width: 1200px) {
      .inspirations {
        grid-template-columns: repeat(2, 1fr) !important;
        grid-template-rows: repeat(4, auto) !important;
      }
      .inspiration-box {
        height: 280px !important;
      }
    }
    @media (max-width: 768px) {
      .section2 {
        padding: 50px 10px !important;
      }
      .heading {
        font-size: 36px !important;
        line-height: 38px !important;
        margin-bottom: 30px !important;
      }
      .inspirations {
        grid-template-columns: 1fr !important;
        grid-template-rows: repeat(7, auto) !important;
        gap: 15px !important;
      }
      .inspiration-box {
        height: 200px !important;
      }
    }
    @media (max-width: 480px) {
      .section2 {
        padding: 30px 10px !important;
      }
      .heading {
        font-size: 28px !important;
        line-height: 30px !important;
        margin-bottom: 20px !important;
      }
      .inspirations {
        gap: 10px !important;
      }
      .inspiration-box {
        height: 150px !important;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyle}</style>
      <section style={containerStyle} className="section2">
        <div style={headingStyle} className="heading">Inspiration</div>
        <div style={gridStyle} className="inspirations">
          <div style={imageBoxStyle('/imagesForProductPage/section2Img1.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img2.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img3.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img4.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img5.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img6.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img7.png')} className="inspiration-box"></div>
        </div>
      </section>
    </>
  );
};

export default Section2;
