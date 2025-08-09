import React from 'react';
import TestimonialsCard from '../subComponents/TestimonialsCard';

const Section5th = () => {
    return (
        <section
            style={{
                display: 'flex',
                padding: '40px 20px 60px',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                }}
            >
                <div
                    style={{
                        fontFamily: 'Mansfield',
                        fontWeight: 500,
                        fontSize: '36px',
                        lineHeight: 1.2,
                        color: '#1E1E1E',
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    Our trusted supporters
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem',
                        width: '100%',
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                            color: 'black'
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>

                    <div
                        style={{
                            width: '100%',
                            maxWidth: '350px',
                            borderRadius: '26px',
                            boxShadow:
                                'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                            gap: '1rem',
                        }}
                    >
                        <TestimonialsCard />
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        style={{
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer',
                            color: 'black'
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Section5th;
