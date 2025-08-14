import React, { useState } from 'react';

const accordionData = [
    {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has ",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem.",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem.",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem.",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has."
    },
    {
        question: "Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem.",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.LoremIpsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
    }
];

const Section5 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            style={{
                // fontFamily: 'Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '80px 20px',
                gap: '50px',
                width: '100%',
                boxSizing: 'border-box'
            }}
        >
            <div
                style={{
                    // fontFamily: 'Mansfield',
                    fontWeight: 500,
                    fontSize: '45px',
                    lineHeight: 1.2,
                    color: '#000',
                    textAlign: 'center'
                }}
            >
                FAQ
            </div>

            <div
                style={{
                    width: '100%',
                    maxWidth: '1328px',
                    display: 'flex',
                    gap: '40px',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    boxSizing: 'border-box'
                }}
            >
                {/* Left Image */}
                <div
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '550px',
                            aspectRatio: '3 / 4',
                            backgroundImage: "url('/images/section5Img1.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '40px'
                        }}
                    />
                </div>

                {/* Right Accordion */}
                <div
                    style={{
                        flex: 1,
                        minWidth: '300px',
                        width: '100%'
                    }}
                >
                    {accordionData.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                borderBottom: '1px solid #e2e8f0'
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
                                    padding: '35px 30px',
                                    color: '#ffffffff',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    textAlign: 'left',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: '#6d6d6d',
                                    borderRadius: '8px',
                                }}
                            >
                                <span>{item.question}</span>
                                <span
                                    style={{
                                        display: 'flex',
                                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s'
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        style={{ width: '20px', height: '20px' }}
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
                                    maxHeight: openIndex === idx ? '160px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease-in-out',
                                    background: '#f0f0f0',

                                }}
                            >
                                <div
                                    style={{
                                        padding: '20px',
                                        paddingBottom: '20px',
                                        fontSize: '14px',
                                        color: '#64748b',
                                        backgroundColor: '#f0f0f0'
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
