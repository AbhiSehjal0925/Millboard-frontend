import React, { useEffect, useState } from 'react';

const Section7 = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1024;
    const isMobile = windowWidth <= 600;

    const sectionStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '32px 8px' : '100px 20px',
        gap: isMobile ? '24px' : '50px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box',
        gap: isMobile ? '24px' : '0',
    };

    const leftSideStyle: React.CSSProperties = {
        width: isMobile ? '90%' : '100%',
        maxWidth: isMobile ? '100%' : '730px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'center' : 'flex-start',
        justifyContent: 'center',
        gap: isMobile ? '10px' : '16px',
        padding: isMobile ? '12px' : '20px',
        boxSizing: 'border-box',
        boxShadow: 'rgba(0, 0, 0, 0.16) -4px 4px 2px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        position: 'relative',
        left: isMobile ? '0' : '20px'
    };

    const headingStyle: React.CSSProperties = {
        // fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: isMobile ? '28px' : '45px',
        lineHeight: 1.2,
        color: '#000',
        textAlign: isMobile ? 'center' : 'left',
    };

    const textStyle: React.CSSProperties = {
        // fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: isMobile ? '15px' : '20px',
        lineHeight: 1.5,
        color: '#000000c0',
        letterSpacing: '0.5px',
        textAlign: isMobile ? 'center' : 'left',
    };

    const rightSideStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: isMobile ? '100%' : '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: isMobile ? '320px' : '500px',
        minHeight: isMobile ? '180px' : 'auto',
        aspectRatio: '6 / 7',
        backgroundImage: "url('/images/section7Img1.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '12px',
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={leftSideStyle}>
                    <div style={headingStyle}>Floating Pocket Park</div>
                    <div style={textStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
                <div style={rightSideStyle}>
                    <div style={imageStyle}></div>
                </div>
            </div>
        </section>
    );
};

export default Section7;
