import React from 'react';

const Header = () => {
    return (
        <header
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '8rem 1rem',
                textAlign: 'center',
                background: '#efcfac',
                position: 'relative',
            }}
        >
            <div
                style={{
                    fontSize: 'clamp(1rem, 2vw, 1rem)',
                    marginBottom: '1.5rem',
                    color: '#333333',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                }}
            >
                <a
                    href=""
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        margin: '0 0.5rem',
                    }}
                >
                    Home
                </a>
                /
                <a
                    href=""
                    style={{
                        color: '#333333',
                        textDecoration: 'none',
                        margin: '0 0.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    Order Samples
                </a>
            </div>

            <div style={{ maxWidth: '90%', margin: '0 auto' }}>
                <div
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                        fontWeight: 500,
                        marginBottom: '1rem',
                        color: '#333333',
                    }}
                >
                    We&apos;ve got your order
                </div>
                <div
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        color: '#333333',
                    }}
                >
                    Thank You For Your Order
                </div>
                <div
                    style={{
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        color: '#333333',
                    }}
                >
                    Your sample request has been received and should be with you within 3-5 working days.
                </div>
                <div
                    style={{
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        color: '#333333',
                    }}
                >
                    If you need to speak to us before then simply drop us an email, give us a call or use our contact form - we&apos;re always happy to help.
                </div>
            </div>
        </header>
    );
};

export default Header;
