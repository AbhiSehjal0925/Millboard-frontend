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
fontWeight: 500,
    fontSize: '45px',
    lineHeight: '47px',
    color: '#000',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const gridStyle: React.CSSProperties = {
    // display: 'grid',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    // gridTemplateRows: 'repeat(2, auto)',
    gap: '20px',
    padding: '0 20px',
    width: '100%',
    // maxWidth: '1328px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const imageBoxStyle = (url: string): React.CSSProperties => ({
    width: '534px',
    height: '336px',
    borderRadius: '35px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  const imageBoxStyle1 = (url: string): React.CSSProperties => ({
    width: '1250px',
    height: '336px',
    borderRadius: '35px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  })

  const imageBoxStyle2 = (url: string): React.CSSProperties => ({
    width: '680px',
    height: '336px',
    borderRadius: '35px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  })



  return (
    <>
      <section style={containerStyle} className="section2">
        <div style={headingStyle} className="heading">Inspiration</div>
        <div style={gridStyle} className="inspirations">
          <div style={imageBoxStyle1('/imagesForProductPage/section2Img1.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img2.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img3.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle1('/imagesForProductPage/section2Img4.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img5.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle2('/imagesForProductPage/section2Img6.png')} className="inspiration-box"></div>
          <div style={imageBoxStyle('/imagesForProductPage/section2Img7.png')} className="inspiration-box"></div>
        </div>
      </section>
    </>
  );
};

export default Section2;
