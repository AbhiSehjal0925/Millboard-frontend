import React from 'react';

const Section1 = () => {
    // Shared styles for the image blocks
    const imageBoxStyle = (url: string): React.CSSProperties => ({
        backgroundImage: `url('${url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        maxWidth: '560px',
        aspectRatio: '1 / 1',
        position: 'relative',
    });

    const tagBoxStyle: React.CSSProperties = {
        background: '#ffffff',
        position: 'absolute',
        right: '0.5rem',
        top: '56%',
        transform: 'translateY(-50%)',
        borderEndEndRadius: '15px',
        borderEndStartRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        padding: '0.75rem 3rem',
        color: '#333333',
        fontWeight: 600,
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    };

    const buttonStyle: React.CSSProperties = {
        padding: '0.5rem 1.5rem',
        background: '#d3a069',
        borderRadius: '30px',
        border: 'none',
        color: 'white',
        fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
        cursor: 'pointer',
        marginTop: '0.5rem',
    };

    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: 'clamp(1.5rem, 5vw, 3rem)',
            }}
        >
            <div
                style={{
                    // fontFamily: 'Mansfield',
                    fontWeight: 500,
                    fontSize: '42px',
                    lineHeight: 1.2,
                    color: '#000000ff',
                    textAlign: 'center',
                    marginBottom: '1.5rem',
                }}
            >
                In The Meantime...
            </div>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                }}
            >
                {/* Image 1 */}
                <div style={imageBoxStyle('/imagesForThankYouPage/thankYouPageImg1.png')}>
                    <div style={tagBoxStyle}>
                        <p>Find an installer</p>
                        <button style={buttonStyle} className="coolBeans">Read more</button>
                    </div>
                </div>

                {/* Image 2 */}
                <div style={imageBoxStyle('/imagesForThankYouPage/thankYouPageImg2.png')}>
                    <div style={tagBoxStyle}>
                        <p>Find an installer</p>
                        <button style={buttonStyle} className="coolBeans">Read more</button>
                    </div>
                </div>

                {/* Image 3 */}
                <div style={imageBoxStyle('/imagesForThankYouPage/thankYouPageImg3.png')}>
                    <div style={tagBoxStyle}>
                        <p>Find an installer</p>
                        <button style={buttonStyle} className="coolBeans">Read more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1;
