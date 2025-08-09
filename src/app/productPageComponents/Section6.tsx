import React from 'react';

const Section6 = () => {
    const sectionStyle: React.CSSProperties = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '80px 20px',
        gap: '50px',
        background: '#d3a069',
        boxSizing: 'border-box',
        width: '100%',
    };

    const headingStyle: React.CSSProperties = {
        fontFamily: 'Mansfield',
        fontWeight: 600,
        fontSize: '45px',
        lineHeight: '47px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '50px',
    };

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '40px',
        width: '100%',
        maxWidth: '1200px',
        boxSizing: 'border-box',
    };

    const sideStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
        width: '100%',
        maxWidth: '537px',
    };

    const imageStyleBase: React.CSSProperties = {
        width: '100%',
        aspectRatio: '1 / 1',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    const leftImageStyle: React.CSSProperties = {
        ...imageStyleBase,
        backgroundImage: `url('/images/section6Img1.png')`,
    };

    const rightImageStyle: React.CSSProperties = {
        ...imageStyleBase,
        backgroundImage: `url('/images/section6Img2.png')`,
    };

    const textStyle: React.CSSProperties = {
        fontFamily: 'Mansfield',
        fontWeight: 500,
        fontSize: '30px',
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
                    <div style={leftImageStyle}></div>
                    <p style={textStyle}>Explore Weathered Oak <br /> For A More Rustic Feel</p>
                </div>
                <div style={sideStyle}>
                    <div style={rightImageStyle}></div>
                    <p style={textStyle}>Get inspired for your <br /> project</p>
                </div>
            </div>
        </section>
    );
}

export default Section6;
