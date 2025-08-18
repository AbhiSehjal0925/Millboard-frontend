import Image from 'next/image';
import React from 'react';

const Section6 = () => {
    const outOf = 5;
    const howMany = 4.5;

    const sectionStyle: React.CSSProperties = {
        backgroundColor: '#ffffff',
        padding: '5% 5%',
        textAlign: 'center',
        // fontFamily: "'Poppins', sans-serif",
        width: '100%',
        boxSizing: 'border-box'
    };

    const containerStyle: React.CSSProperties = {
        border: '1px solid #b07f4c',
        padding: '2rem',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        boxSizing: 'border-box'
    };

    const headingStyle: React.CSSProperties = {
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 400,
        color: '#000000d8',
        marginBottom: '1rem',
        wordBreak: 'break-word'
    };

    const ratingStyle: React.CSSProperties = {
        fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)',
        fontWeight: 600,
        color: '#000',
        marginBottom: '0.5rem'
    };

    const starsStyle: React.CSSProperties = {
        fontSize: 'clamp(1.2rem, 2.5vw, 3rem)',
        color: '#facc15',
        marginBottom: '1rem',
    };

    const ratingTextStyle: React.CSSProperties = {
        fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
        color: '#999',
        margin: '1rem 0',
        wordBreak: 'break-word',
    };

    const logoContainerStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1.5rem 0'
    };

    const logoImgStyle: React.CSSProperties = {
        width: 'clamp(4rem, 10vw, 6rem)',
        height: 'auto',
        margin: '0.5rem'
    };

    const btnStyle: React.CSSProperties = {
        backgroundColor: '#d3a069',
        color: 'white',
        fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
        padding: '0.5rem 1rem',
        borderRadius: '50px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        margin: '0 auto',
    };

    const btnHoverStyle: React.CSSProperties = {
        backgroundColor: '#b88045'
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={headingStyle}>What Our Customers Are Saying</div>
                <div style={ratingStyle}>{howMany}/{outOf}</div>
                <div style={starsStyle}>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                <div style={ratingTextStyle}>Independent Service Rating Based On 194
                    <br />
                    Verified Reviews.</div>
                <hr style={{ margin: '0 auto', width: '40%', color: 'gray' }} />
                <div style={logoContainerStyle}>
                    <Image
                        src="/png/pngsForOrderPage/Feefo_idlyF8-NJ6_0.png"
                        alt="Feefo logo"
                        width={120}
                        height={40}
                        style={logoImgStyle}
                    />
                </div>
                <a
                    href="#reviews"
                    style={btnStyle}
                    className="coolBeans"
                >
                    Read all reviews
                </a>
            </div>
        </section>
    );
};

export default Section6;
