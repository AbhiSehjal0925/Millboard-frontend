import React, { useState, useEffect } from 'react';

const accordionData = [
    {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has."
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    }
];

const Section5 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Run once on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isTablet = windowWidth <= 1024;
    const isMobile = windowWidth <= 768;

    const handleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '60px 16px' : isTablet ? '80px 20px' : '120px 20px',
                gap: isMobile ? '40px' : isTablet ? '60px' : '80px',
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: '#fafafa'
            }}
        >
            <div
                style={{
                    fontWeight: 600,
                    fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                    lineHeight: 1.2,
                    color: '#1a1a1a',
                    textAlign: 'center',
                    fontFamily: 'Mansfield, sans-serif',
                    letterSpacing: '-0.02em'
                }}
            >
                FAQ
            </div>

            <div
                style={{
                    width: '100%',
                    maxWidth: '1747px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: isMobile ? '40px' : isTablet ? '60px' : '80px',
                    justifyContent: 'center',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    flexWrap: 'wrap',
                    boxSizing: 'border-box'
                }}
            >
                {/* Left Image */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: isMobile ? '100%' : '600px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            maxWidth: isMobile ? '400px' : '1000px',
                            aspectRatio: isMobile ? '4 / 5' : '6 / 7',
                            backgroundImage: "url('/images/section5Img1.png')",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: isMobile ? '16px' : '20px',
                            boxShadow: isMobile ? '0 10px 20px rgba(0, 0, 0, 0.1)' : '0 20px 40px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </div>

                {/* Right Accordion */}
                <div
                    style={{
                        flex: 1,
                        minWidth: isMobile ? '100%' : '400px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: isMobile ? '12px' : '16px'
                    }}
                >
                    {accordionData.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                border: '1px solid #e5e7eb',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <button
                                onClick={() => handleAccordion(idx)}
                                type="button"
                                aria-expanded={openIndex === idx}
                                aria-controls={`content-${idx}`}
                                id={`accordion-header-${idx}`}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: isMobile ? '20px 24px' : isTablet ? '24px 28px' : '28px 32px',
                                    color: openIndex === idx ? '#1f2937' : 'white',
                                    fontSize: isMobile ? '14px' : '16px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    background: openIndex === idx ? '#f0f0f0' : '#6d6d6d',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    borderBottom: openIndex === idx ? '1px solid #e5e7eb' : 'none'
                                }}
                            >
                                <span style={{
                                    flex: 1,
                                    paddingRight: '20px',
                                    lineHeight: 1.5,
                                }}>
                                    {item.question}
                                </span>
                                <span
                                    style={{
                                        display: 'flex',
                                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease',
                                        color: '#6b7280',
                                        flexShrink: 0
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        style={{ width: '24px', height: '24px' }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </button>

                            <div
                                id={`content-${idx}`}
                                aria-labelledby={`accordion-header-${idx}`}
                                style={{
                                    maxHeight: openIndex === idx ? '200px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease-in-out',
                                    background: '#ffffff'
                                }}
                            >
                                <div
                                    style={{
                                        padding: isMobile ? '20px 24px' : isTablet ? '24px 28px' : '32px',
                                        fontSize: isMobile ? '14px' : '15px',
                                        color: '#4b5563',
                                        lineHeight: 1.6,
                                        backgroundColor: '#ffffff'
                                    }}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section5;
