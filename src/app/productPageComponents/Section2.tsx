import React, { useEffect, useState } from 'react';

const Section2 = () => {

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 600;

  const containerStyle: React.CSSProperties = {
    background: '#efcfac',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: isMobile ? '25px 0 100px 0' : '70px 64px 160px 64px',
    position: 'relative',
  };

  const headingStyle: React.CSSProperties = {
    // fontFamily: 'Mansfield',
    fontWeight: 500,
    fontSize: '45px',
    lineHeight: '47px',
    color: '#000',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const gridStyle: React.CSSProperties = {
    gap: '20px',
    padding: '0 20px',
    width: '100%',
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
    width: '1190px',
    height: '336px',
    borderRadius: '35px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  })

  const imageBoxStyle2 = (url: string): React.CSSProperties => ({
    width: '630px',
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

        {/* SVG background decoration */}
        <svg
          width="100%"
          height="68"
          viewBox="0 0 1440 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '0px',
            zIndex: '121',
          }}
        >
          <path
            fill="#ffffffff"
            fillOpacity="1"
            d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
          />
        </svg>

        <svg
          width="100%"
          height="68"
          viewBox="0 0 1440 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
            bottom: '0px',
            filter: 'drop-shadow(0 -18px 10px #d3a069)',
          }}
        >
          <path
            fill="#d3a069"
            fillOpacity="1"
            d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
          />
        </svg>

      </section>
    </>
  );
};

export default Section2;
