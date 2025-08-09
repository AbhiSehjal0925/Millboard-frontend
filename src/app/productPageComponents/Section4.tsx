import React from 'react';

const Section4 = () => {
    const items = Array.from({ length: 9 });

    const sectionStyle: React.CSSProperties = {
        background: "url('/images/section4Img1.png') no-repeat center center/cover",
        fontFamily: 'Arial, sans-serif',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px'
    };

    const headingStyle: React.CSSProperties = {
        fontFamily: 'Mansfield',
        fontWeight: 600,
        fontSize: '45px',
        lineHeight: '47px',
        color: 'white',
        textAlign: 'center'
    };

    const downloadsContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '25px',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '1200px'
    };

    const downloadItemStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '360px',
        height: '100px',
        borderRadius: '9px',
        background: '#ffffff',
        border: '2px solid #d0a15e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxSizing: 'border-box',
        gap: '10px'
    };

    const textStyle: React.CSSProperties = {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: 1.2,
        color: '#000000b4',
        margin: 0,
        flex: 1
    };

    const imageContainerStyle: React.CSSProperties = {
        width: '68px',
        height: '68px',
        borderRadius: '3px',
        background: '#D3A069',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
    };

    const imageStyle: React.CSSProperties = {
        width: '36px',
        height: '36px',
        objectFit: 'contain'
    };

    // Optional responsive tweaks
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <section style={sectionStyle}>
            <div style={headingStyle}>Downloads</div>
            <div style={downloadsContainerStyle}>
                {items.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            ...downloadItemStyle,
                            ...(isMobile && {
                                maxWidth: '100%',
                                height: 'auto',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                padding: '15px'
                            })
                        }}
                    >
                        <p style={{ ...textStyle, ...(isMobile && { fontSize: '18px' }) }}>
                            Lorem Ipsum is simply
                        </p>
                        <div
                            style={{
                                ...imageContainerStyle,
                                ...(isMobile && { width: '50px', height: '50px' })
                            }}
                        >
                            <img
                                src="/png/downloadBtn.png"
                                alt="Download"
                                style={{
                                    ...imageStyle,
                                    ...(isMobile && { width: '28px', height: '28px' })
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section4;
