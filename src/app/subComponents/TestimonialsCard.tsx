import Image from 'next/image';
import React from 'react';

const TestimonialsCard = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '368px',
                borderRadius: '26px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                gap: '1rem',
                position: 'relative',
            }}
        >

            <div style={{
                position: 'absolute',
                color: 'black',
                // fontSize: '60px',
                top: '10px',
                left: '10px',
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#D3A069" d="M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.549-.043z" /></svg>
            </div>

            <div
                style={{
                    width: '80px',
                    height: '80px',
                }}
            >
                <Image
                    src="/images/section4thimg1.png"
                    alt="Testimonial"
                    width={80}
                    height={80}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #D3A069',
                    }}
                />
            </div>

            <div
                style={{
                    textAlign: 'center',
                    padding: '0 1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                }}
            >
                <h3
                    style={{
                        fontSize: '20px',
                        fontWeight: '500',
                        margin: 0,
                        color: '#1E1E1E',
                    }}
                >
                    John Doe
                </h3>

                <p
                    style={{
                        fontSize: '14px',
                        color: '#555',
                        margin: 0,
                    }}
                >
                    &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo;
                </p>

                <div
                    style={{
                        fontSize: '16px',
                        color: '#f5c518', // gold color for stars
                    }}
                >
                    ★★★☆☆☆☆
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;