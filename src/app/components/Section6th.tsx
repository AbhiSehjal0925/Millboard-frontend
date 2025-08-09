import React from 'react';

const Section6th = () => {
    return (
        <section
            style={{
                background: '#EFCFAC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
                padding: '40px 20px',

                // Responsive
                flexWrap: 'wrap',
            }}
        >
            {/* Left Side */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    color: '#000000',
                    padding: '20px',

                    // Responsive height for desktop
                    height: 'auto',
                }}
            >
                <div
                    style={{
                        fontFamily: 'Rose, sans-serif',
                        fontWeight: 400,
                        fontSize: '32px',
                        lineHeight: 1.2,
                        marginBottom: '20px',

                        // Responsive font size
                        ...(typeof window !== 'undefined' && window.innerWidth >= 768
                            ? { fontSize: '45px' }
                            : {}),
                    }}
                >
                    Elegant Living on Vicar's Hill, Ladywell
                </div>
                <div
                    style={{
                        fontFamily: 'Shega, sans-serif',
                        fontWeight: 200,
                        fontSize: '20px',
                        lineHeight: 1.4,
                        ...(typeof window !== 'undefined' && window.innerWidth >= 768
                            ? { fontSize: '26.75px' }
                            : {}),
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </div>
            </div>

            {/* Right Side */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '700px',
                    height: '400px',
                    background: `url('/png/section6thPng1.png') center / cover no-repeat`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...(typeof window !== 'undefined' && window.innerWidth >= 768
                        ? { height: '895px' }
                        : {}),
                }}
            >
                <div
                    style={{
                        height: '90%',
                        width: '90%',
                        background: `url('/images/section6thimg1.png') center / cover no-repeat`,
                        ...(typeof window !== 'undefined' && window.innerWidth >= 768
                            ? { height: '95%', width: '93%' }
                            : {}),
                    }}
                ></div>
            </div>
        </section>
    );
};

export default Section6th;
