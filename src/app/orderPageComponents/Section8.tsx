import React from 'react';

const containerStyle: React.CSSProperties = {
    backgroundImage: "url('/imagesForOrderPage/Rectangle 6751.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '2rem',
    padding: '3rem 5%',
    boxSizing: 'border-box',
    position: 'relative',
};

const headingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 500,
    textAlign: 'center',
    color: '#ffffff',
    wordBreak: 'break-word',
};

const outerContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5.5rem',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
};

const itemStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '25rem',
    height: '20rem',
    position: 'relative',
    flex: '1 1 300px',
};

const getImageStyle = (bgUrl: string): React.CSSProperties => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url('${bgUrl}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius: '0.5rem',
});

const textBoxStyle: React.CSSProperties = {
    background: 'white',
    color: '#000',
    padding: '1rem',
    borderBottomLeftRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    position: 'absolute',
    bottom: '-2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80%',
    maxWidth: '20rem',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const textStyle: React.CSSProperties = {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    fontWeight: 600,
    wordBreak: 'break-word',
    textAlign: 'center',
};

const buttonStyle: React.CSSProperties = {
    background: '#b07f4c',
    color: 'white',
    fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
    padding: '0.5rem 1rem',
    borderRadius: '1.5rem',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
};

const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.style.background = '#805b35';
};

const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.style.background = '#b07f4c';
};

const Section8 = () => {
    return (
        <section style={containerStyle}>
            <div style={headingStyle}>Start your project</div>
            <div style={outerContainerStyle}>
                <div style={itemStyle}>
                    <div style={getImageStyle('/imagesForOrderPage/Start your project image 1.png')}>
                        <div style={textBoxStyle}>
                            <div style={textStyle}>Find a Decking Installer</div>
                            <a
                                href="#installer"
                                style={buttonStyle}
                                className="coolBeans"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div style={itemStyle}>
                    <div style={getImageStyle('/imagesForOrderPage/Start your project image 2.png')}>
                        <div style={textBoxStyle}>
                            <div style={textStyle}>Where to buy</div>
                            <a
                                href="#buy"
                                style={buttonStyle}
                                className="coolBeans"
                            >
                                Read more
                            </a>
                        </div>
                    </div>
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
        </section>
    );
};

export default Section8;
