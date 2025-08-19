import React, { useEffect, useState } from 'react';

const Header = () => {

    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1024;
    const isMobile = windowWidth <= 600;

    return (
        <header
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '6rem 1rem',
                textAlign: 'center',
                background: '#efcfac',
                position: 'relative',
            }}
        >
            <div
                className="thankyou-breadcrumb"
                style={{
                    fontSize: '18px',
                    marginBottom: '1.5rem',
                    marginTop: isMobile ? '1rem' : '0',
                    color: '#000000ff',
                    position: 'absolute',
                    top: '20px',
                    left: '87px',
                }}
            >
                <a
                    href=""
                    style={{
                        textDecoration: 'none',
                        marginRight: '0.3rem',
                    }}
                >
                    Home
                </a>
                /
                <a
                    href=""
                    style={{
                        textDecoration: 'none',
                        marginLeft: '0.3rem',
                    }}
                >
                    Order Samples
                </a>
            </div>

            <div className="thankyou-content" style={{ maxWidth: '90%', paddingBottom: '4rem' }}>
                <div
                    className="thankyou-title"
                    style={{
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                        fontWeight: 500,
                        marginBottom: '1rem',
                        color: '#333333',
                        textDecoration: 'underline',
                    }}
                >
                    We&apos;ve got your order
                </div>
                <div
                    className="thankyou-main"
                    style={{
                        fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
                        fontWeight: 500,
                        marginBottom: '1rem',
                        color: '#000000ff',
                    }}
                >
                    Thank You For Your Order
                </div>
                <div
                    className="thankyou-desc"
                    style={{
                        fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        color: '#333333',
                    }}
                >
                    Your sample request has been received and should be with you within 3-5 working days.
                </div>
                <div
                    className="thankyou-contact"
                    style={{
                        fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        color: '#333333',
                        width: '60%',
                        textAlign: 'center',
                        margin: '0 auto',
                    }}
                >
                    If you need to speak to us before then simply drop us an email, give us a call or use our contact form - we&apos;re always happy to help.
                </div>
            </div>

            <svg style={{
                position: 'absolute',
                bottom: '-1px',
                width: '100%',
            }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="xMidYMax meet">
                <path fill="#D3A069" stroke='none' d="M-43 50.0323C-43 50.0323 63.2135 -17.9549 787.175 74.7745C1511.14 167.504 1481.84 50.0323 1481.84 50.0323V120H-43V50.0323Z" />
                <path fill="#ffffff" stroke='none' d="M-45.3109 95.0278C-45.3109 95.0278 57.3996 14.2496 785.273 85.646C1513.15 157.042 1478.01 26.9689 1478.01 26.9689L1480 120H-45.3109V95.0278Z" />
            </svg>

            <style jsx>{`
  @media (max-width: 600px) {
    header {
      padding: 3rem 0.5rem !important;
    }
    .thankyou-content {
      max-width: 100% !important;
      padding-bottom: 2rem !important;
    }
    .thankyou-title {
      font-size: 1.1rem !important;
    }
    .thankyou-main {
      font-size: 1.6rem !important;
    }
    .thankyou-desc {
      font-size: 1rem !important;
    }
    .thankyou-contact {
      font-size: 0.95rem !important;
      width: 100% !important;
      padding: 0 0.5rem;
    }
    .thankyou-breadcrumb {
      font-size: 12px !important;
      top: 10px !important;
      left: 10px !important;
    }
  }
`}</style>

        </header>
    );
};

export default Header;
