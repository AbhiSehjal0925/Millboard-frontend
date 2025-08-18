import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(1920);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Breakpoints
    const isSmall = screenWidth <= 768;
    const isMedium = screenWidth > 768 && screenWidth <= 1024;

    return (


        <section
            style={{
                position: 'relative',
                background: '#f2cea4',
                padding: isSmall ? '40px 0' : isMedium ? '60px 0' : '80px 0',
                height: isSmall ? 'auto' : isMedium ? '70vh' : '78vh',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: isSmall ? 'column' : 'row',
                    justifyContent: isSmall ? 'center' : 'space-between',
                    alignItems: 'center',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    // padding: isSmall ? '0 15px' : isMedium ? '0 20px' : '0 30px',
                    textAlign: isSmall ? 'center' : 'left',
                    maxWidth: '1850px'
                }}
            >
                {/* Left Column - Text */}
                <div style={{ flex: isSmall ? '1' : '2' }}>
                    <h2
                        style={{
                            fontSize: isSmall
                                ? 'clamp(28px, 6vw, 36px)'
                                : isMedium
                                    ? 'clamp(36px, 4.5vw, 50px)'
                                    : 'clamp(42px, 4vw, 64px)',
                            color: '#000000',
                            marginBottom: '20px',
                            lineHeight: '1.4',
                            margin: isSmall ? '10px 0' : '20px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                            fontFamily: 'Mansfield, sans-serif'
                        }}
                    >
                        Moulded from oak to mimic timber, but built to outperform real wood
                    </h2>

                    <button
                        style={{
                            padding: isSmall ? '10px 20px' : '12px 24px',
                            fontSize: isSmall ? '16px' : '20px',
                            border: '2px solid white',
                            borderRadius: '30px',
                            backgroundColor: '#d3a069',
                            color: '#ffffffff',
                            cursor: 'pointer',
                            margin: isSmall
                                ? '0 0 20px 0'
                                : isMedium
                                    ? '30px 0 200px 20px'
                                    : '30px 0 200px 20px',
                            transition: 'background-color 0.3s ease',
                        }}
                        className='coolBeans'>
                        Choose your free sample
                    </button>
                </div>

                {/* Right Column - Image */}
                <div
                    style={{
                        flex: isSmall ? '1' : '1 1 500px',
                        textAlign: 'center',
                        position: 'relative',
                        left: isSmall ? '0' : isMedium ? '100px' : '300px',
                        marginTop: isSmall ? '20px' : '0',
                    }}
                >
                    <Image
                        src="/images/Header.webp"
                        alt="Sample"
                        height={isSmall ? 400 : isMedium ? 600 : 800}
                        width={isSmall ? 300 : isMedium ? 450 : 600}
                        style={{
                            objectFit: 'cover',
                            borderTopRightRadius: isSmall ? '20px' : '30px',
                            borderBottomRightRadius: isSmall ? '20px' : '30px',
                        }}
                        priority
                    />
                </div>
            </div>

            {/* SVG Wave */}
            <svg
                width="100%"
                height="68"
                viewBox="0 0 1440 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    bottom: '-2px',
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
                    bottom: '-1px',
                    filter: 'drop-shadow(0 -10px 10px #d3a069)',
                }}
            >
                <path
                    fill="#d3a069"
                    fillOpacity="1"
                    d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
                />
            </svg>

            <style jsx>{`
.coolBeans {
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: all 0.4s ease;
          }
          .coolBeans::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 300%;
            height: 100%;
            background: linear-gradient(120deg, #d3a069, #f5c28f, #d3a069);
            transition: all 0.4s ease;
            z-index: -1;
          }
          .coolBeans:hover::before {
            left: 0;
          }
          .coolBeans:hover {
            box-shadow: 0 8px 20px rgba(211, 160, 105, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
`}</style>

        </section>
    );
};

export default Header;
