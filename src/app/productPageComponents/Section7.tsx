import React from 'react';

const Section7 = () => {
    const sectionStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        gap: '50px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        // gap: '40px',
        width: '100%',
        // maxWidth: '1200px',
        boxSizing: 'border-box',
    };

    const leftSideStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '695px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '16px',
        padding: '20px',
        boxSizing: 'border-box',
        boxShadow: 'rgba(0, 0, 0, 0.16) -4px 4px 2px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
    };

    const headingStyle: React.CSSProperties = {
        fontFamily: 'Poppins',
        fontWeight: 600,
        fontSize: '45px',
        lineHeight: 1.2,
        color: '#000',
    };

    const textStyle: React.CSSProperties = {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: 1.5,
        color: '#000000c0',
        letterSpacing: '0.5px',
    };

    const rightSideStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        aspectRatio: '6 / 7',
        backgroundImage: "url('/images/section7Img1.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '12px',
    };

    // Responsive adjustments (mobile/tablet)
    const responsiveAdjustments = () => {
        const width = window.innerWidth;

        if (width <= 600) {
            headingStyle.fontSize = '28px';
            textStyle.fontSize = '16px';
            sectionStyle.padding = '50px 16px';
            sectionStyle.gap = '30px';
            imageStyle.aspectRatio = '4 / 5';
        } else if (width <= 1024) {
            headingStyle.fontSize = '36px';
            textStyle.fontSize = '18px';
            containerStyle.flexDirection = 'column';
            containerStyle.alignItems = 'flex-start';
        }
    };

    React.useEffect(() => {
        responsiveAdjustments();
        window.addEventListener('resize', responsiveAdjustments);
        return () => window.removeEventListener('resize', responsiveAdjustments);
    }, [responsiveAdjustments]);

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
