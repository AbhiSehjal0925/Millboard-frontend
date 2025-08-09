import React from 'react';

const Section8 = () => {
    const containerStyle = {
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
        padding: '3rem 4%',
        boxSizing: 'border-box',
    };

    const headingStyle = {
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 500,
        textAlign: 'center',
        color: '#ffffff',
        wordBreak: 'break-word',
    };

    const outerContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5.5rem',
        width: '100%',
        maxWidth: '1200px',
        flexWrap: 'wrap',
    };

    const itemStyle = {
        width: '100%',
        maxWidth: '25rem',
        height: '20rem',
        position: 'relative',
        flex: '1 1 300px', // ensures responsiveness without media queries
    };

    const getImageStyle = (bgUrl: string) => ({
        width: '100%',
        height: '100%',
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '0.5rem',
    });

    const textBoxStyle = {
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

    const textStyle = {
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        fontWeight: 600,
        wordBreak: 'break-word',
        textAlign: 'center',
    };

    const buttonStyle = {
        background: '#b07f4c',
        color: 'white',
        fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
        padding: '0.5rem 1rem',
        borderRadius: '1.5rem',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    } as React.CSSProperties;

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.currentTarget.style.background = '#805b35';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.currentTarget.style.background = '#b07f4c';
    };

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
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
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
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section8;
