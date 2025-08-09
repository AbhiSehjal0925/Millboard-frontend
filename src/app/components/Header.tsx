import React from 'react';

const Header = () => {
    return (
        <section style={{ position: 'relative', background: '#f2cea4', padding: '80px 0' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1200px',
                margin: '0 auto',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                {/* Left Column - Text */}
                <div style={{
                    flex: '1 1 500px',
                    paddingRight: '20px',
                    minWidth: '300px',
                }}>
                    <h2 style={{
                        fontSize: 'clamp(20px, 4vw, 36px)',
                        fontWeight: '700',
                        color: '#1a1e24',
                        marginBottom: '20px',
                        lineHeight: '1.4',
                        margin: "20px"
                    }}>
                        Moulded from oak to mimic timber, but built to outperform real wood
                    </h2>

                    <button style={{
                        padding: '12px 24px',
                        fontSize: '16px',
                        border: '1px solid #fff',
                        borderRadius: '30px',
                        backgroundColor: '#d3a069',
                        color: '#1a1e24',
                        cursor: 'pointer',
                        margin: '0 0 100px 20px',
                        transition: 'background-color 0.3s ease',
                    }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#D9C6A0'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = '#D3A069'}
                    >
                        Choose your free sample
                    </button>
                </div>

                {/* Right Column - Image */}
                <div style={{
                    flex: '1 1 500px',
                    textAlign: 'center',
                    minWidth: '300px'
                }}>
                    <img
                        src="/images/Header.webp"
                        alt="Sample"
                        style={{
                            width: '90%',
                            maxWidth: '500px',
                            borderTopRightRadius: '30px',
                            borderBottomRightRadius: '30px',
                            margin: '0 auto'
                        }}
                    />
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            {/* SVG Wave */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: '-10px', zIndex: '121' }}>
                <path fill="#ffffffff" fillOpacity="1"
                    d="M0,140L34.3,160C68.6,180,137,210,206,190C274.3,170,343,130,411,120C480,110,549,130,617,160C685.7,190,754,200,823,180C891.4,160,960,130,1029,140C1097.1,150,1166,190,1234,190C1302.9,190,1371,130,1406,110L1440,90L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: '-1px', filter: 'drop-shadow(0 -10px 10px #d3a069)' }}>
                <path fill="#d3a069" fillOpacity="1"
                    d="M0,140L34.3,160C68.6,180,137,210,206,190C274.3,170,343,130,411,120C480,110,549,130,617,160C685.7,190,754,200,823,180C891.4,160,960,130,1029,140C1097.1,150,1166,190,1234,190C1302.9,190,1371,130,1406,110L1440,90L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
        </section>
    );
}

export default Header;