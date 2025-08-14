import React, { useEffect, useState } from 'react';

const Section6 = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 700);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle: React.CSSProperties = {
        // fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: isMobile ? '32px 8px' : '80px 20px',
        gap: isMobile ? '24px' : '50px',
        background: '#d3a069',
        boxSizing: 'border-box',
        width: '100%',
        // maxWidth: 1200,
        margin: '0 auto',
    };

    const headingStyle: React.CSSProperties = {
        // fontFamily: 'Mansfield',
        fontWeight: 500,
        fontSize: isMobile ? '24px' : '45px',
        lineHeight: isMobile ? '30px' : '47px',
        color: 'white',
        textAlign: 'center',
        marginBottom: isMobile ? '24px' : '50px',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '32px' : '40px',
        width: '100%',
        boxSizing: 'border-box',
    };

    const sideStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: isMobile ? '12px' : '30px',
        width: isMobile ? '100%' : '45%',
        maxWidth: 540,
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: isMobile ? 320 : 400,
        minHeight: isMobile ? 180 : 430,
        height: 'auto',
        backgroundSize: 'contain', // <-- changed from 'cover'
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: isMobile ? 12 : 20,
        margin: '0 auto',
    };

    const textStyle: React.CSSProperties = {
        // fontFamily: 'Mansfield',
        fontWeight: 500,
        fontSize: isMobile ? '16px' : '28px',
        lineHeight: 1.3,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'white',
        margin: 0,
    };

    return (
        <section style={sectionStyle}>
            <div style={headingStyle}>Lorem Ipsum is simply</div>
            <div style={containerStyle}>
                <div style={sideStyle}>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: `url('/images/section6Img1.png')`,
                        }}
                    ></div>
                    <p style={textStyle}>Explore Weathered Oak <br /> For A More Rustic Feel</p>
                </div>
                <div style={sideStyle}>
                    <div
                        style={{
                            ...imageStyle,
                            backgroundImage: `url('/images/section6Img2.png')`,
                        }}
                    ></div>
                    <p style={textStyle}>Get inspired for your <br /> project</p>
                </div>
            </div>
        </section>
    );
};

export default Section6;
