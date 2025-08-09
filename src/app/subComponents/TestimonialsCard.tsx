import Image from 'next/image';
import React from 'react';

const TestimonialsCard = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '350px',
                borderRadius: '26px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                gap: '1rem',
            }}
        >
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
                        fontWeight: 'bold',
                        margin: 0,
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
