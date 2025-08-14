import Image from 'next/image';
import React from 'react';

const Section4 = () => {
    const items = Array.from({ length: 9 });

    const sectionStyle: React.CSSProperties = {
        background: "url('/images/section4Img1.png') no-repeat center center/cover",
        // fontFamily: 'Arial, sans-serif',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '50px',
        position: 'relative',
    };

    const headingStyle: React.CSSProperties = {
        // fontFamily: 'Mansfield',
        fontWeight: 500,
        fontSize: '45px',
        lineHeight: '47px',
        color: 'white',
        textAlign: 'center'
    };

    const downloadsContainerStyle: React.CSSProperties = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '50px',
        justifyContent: 'center',
        width: '100%',
        // maxWidth: '1200px',
        zIndex: 1,
        paddingBottom: '50px'
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
        // fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: 1.2,
        color: '#000000b4',
        margin: 0,
        flex: 1
    };

    const imageContainerStyle: React.CSSProperties = {
        width: '80px',
        height: '120px',
        borderRadius: '5px',
        background: '#D3A069',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        cursor: 'pointer',
    };

    const imageStyle: React.CSSProperties = {
        width: '50px',
        height: '50px',
        objectFit: 'contain'
    };

    const pngStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '-2px',
        width: '100%',
    }

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
                            <Image
                                src="/png/downloadBtn.png"
                                alt="Download"
                                width={45}
                                height={45}
                                style={{
                                    ...imageStyle,
                                    ...(isMobile && { width: '28px', height: '28px' })
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <svg style={pngStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
                <path fill="#D3A069" stroke='none' d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
                <path fill="#ffffff" stroke='none' d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
            </svg>

        </section>
    );
};

export default Section4;
