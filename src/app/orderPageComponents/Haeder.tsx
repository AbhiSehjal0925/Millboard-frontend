import React, { useEffect, useState } from 'react';
import { useFilter } from '@/context/FilterContext';
import { woods as section1Woods } from './Section1';
import { woods as section2Woods } from './Section2';
import { woods as section3Woods } from './Section3';
import { woods as section4Woods } from './Section4';
import { woods as section7Woods } from './Section7';

const Header = () => {
    const { isCladdingChecked, setIsCladdingChecked, isDeckingChecked, setIsDeckingChecked } = useFilter();

    // Calculate total samples
    const deckingSampleCount = (section1Woods.length + section2Woods.length + section3Woods.length + section4Woods.length);
    const claddingSampleCount = section7Woods.length;
    const visibleDeckingSamples = isDeckingChecked ? deckingSampleCount : 0;
    const visibleCladdingSamples = isCladdingChecked ? claddingSampleCount : 0;

    // Show message when both filters are unchecked
    const showNoSelectionMessage = !isDeckingChecked && !isCladdingChecked;

    const [screenSize, setScreenSize] = useState<'large' | 'medium' | 'small'>('large');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) setScreenSize('small');
            else if (width <= 1024) setScreenSize('medium');
            else setScreenSize('large');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header
            style={{
                background: '#efcfac',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                minHeight: screenSize === 'small' ? '60vh' : '70vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: screenSize === 'small' ? '10px' : '20px',
                    left: screenSize === 'small' ? '10px' : '20px',
                    color: '#000',
                    fontSize: screenSize === 'small' ? '12px' : '14px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '5px',
                }}
            >
                <a href="" style={{ color: '#000' }}>Home</a> /
                <a href="" style={{ color: '#000' }}>Start a product</a> /
                <a href="" style={{ color: '#000' }}>Planning</a> /
                <a href="" style={{ color: '#000' }}>Order free sample</a>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#000',
                    padding: screenSize === 'small' ? '60px 10px 20px' : screenSize === 'medium' ? '100px 20px' : '120px 0',
                    zIndex: 21,
                }}
            >
                <div
                    style={{
                        fontSize: screenSize === 'small' ? '28px' : screenSize === 'medium' ? '36px' : '48px',
                        fontWeight: 500,
                        textAlign: 'center',
                        marginBottom: screenSize === 'small' ? '10px' : '15px',
                    }}
                >
                    Order Free Decking & Cladding Samples
                </div>
                <div
                    style={{
                        fontSize: screenSize === 'small' ? '14px' : screenSize === 'medium' ? '16px' : '18px',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        maxWidth: screenSize === 'small' ? '90%' : '800px',
                        margin: '0 auto 10px',
                    }}
                >
                    Get up to 3 free samples of Millboard composite decking or cladding. All sample packs are delivered free of charge with a complimentary Millboard brochure if requested.
                </div>
                <div
                    style={{
                        fontSize: screenSize === 'small' ? '14px' : screenSize === 'medium' ? '16px' : '18px',
                        fontWeight: screenSize === 'small' ? 500 : 600,
                        textAlign: 'center',
                        marginBottom: screenSize === 'small' ? '20px' : '40px',
                    }}
                >
                    Simply Select the samples you would like by clicking on them.
                </div>

                <div
                    style={{
                        width: '100%',
                        background: '#d3a069',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        gap: screenSize === 'small' ? '10px' : '20px',
                        padding: screenSize === 'small' ? '10px' : screenSize === 'medium' ? '15px' : '30px 10px',
                        flexWrap: 'wrap',
                    }}
                >
                    <div
                        style={{
                            fontSize: screenSize === 'small' ? '16px' : screenSize === 'medium' ? '20px' : '24px',
                            fontWeight: 'bold',
                            color: '#fff',
                        }}
                    >
                        Filters:
                    </div>

                    {/* Cladding */}
                    <label
                        htmlFor="cladding"
                        style={{
                            fontSize: screenSize === 'small' ? '16px' : screenSize === 'medium' ? '20px' : '24px',
                            fontWeight: 'bold',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        <span
                            style={{
                                width: screenSize === 'small' ? '24px' : '30px',
                                height: screenSize === 'small' ? '24px' : '30px',
                                background: '#5c4a36',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {isCladdingChecked && (
                                <svg
                                    style={{ width: '20px', height: '20px', color: '#fff' }}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </span>
                        CLADDING
                        <input
                            id="cladding"
                            type="checkbox"
                            checked={isCladdingChecked}
                            onChange={() => setIsCladdingChecked(!isCladdingChecked)}
                            style={{ position: 'absolute', opacity: 0 }}
                        />
                    </label>

                    {/* Decking */}
                    <label
                        htmlFor="decking"
                        style={{
                            fontSize: screenSize === 'small' ? '16px' : screenSize === 'medium' ? '20px' : '24px',
                            fontWeight: 'bold',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            cursor: 'pointer',
                        }}
                    >
                        <span
                            style={{
                                width: screenSize === 'small' ? '24px' : '30px',
                                height: screenSize === 'small' ? '24px' : '30px',
                                background: '#5c4a36',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {isDeckingChecked && (
                                <svg
                                    style={{ width: '20px', height: '20px', color: '#fff' }}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </span>
                        DECKING
                        <input
                            id="decking"
                            type="checkbox"
                            checked={isDeckingChecked}
                            onChange={() => setIsDeckingChecked(!isDeckingChecked)}
                            style={{ position: 'absolute', opacity: 0 }}
                        />
                    </label>
                </div>

                <div
                    style={{
                        fontSize: screenSize === 'small' ? '14px' : '16px',
                        textAlign: 'center',
                        marginTop: '15px',
                        marginBottom: '10px',
                    }}
                >
                    Showing {visibleDeckingSamples} Decking Samples and {visibleCladdingSamples} Cladding Samples
                </div>
                <div
                    style={{
                        fontSize: screenSize === 'small' ? '20px' : screenSize === 'medium' ? '28px' : '32px',
                        fontWeight: 600,
                        textAlign: 'center',
                        marginBottom: screenSize === 'small' ? '20px' : '30px',
                    }}
                >
                    Select 3 Samples
                </div>

                {showNoSelectionMessage && (
                    <div
                        style={{
                            fontSize: '14px',
                            textAlign: 'center',
                            color: '#000',
                            padding: '10px',
                        }}
                    >
                        Please select at least one category (Decking or Cladding) to view samples.
                    </div>
                )}
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{
                    position: 'absolute',
                    bottom: '0',
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    zIndex: 1,
                }}
            >
                <path
                    style={{
                        fill: '#000000',
                    }}
                    d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,192C672,160,768,96,864,64C960,32,1056,32,1152,64C1248,96,1344,160,1392,192L1440,224L1440,320L0,320Z"
                />
                <path
                    style={{
                        fill: '#ffffff',
                        filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.432))',
                    }}
                    d="M0,150L48,160.7C96,171,192,193,288,203.3C384,214,480,214,576,182C672,150,768,86,864,54C960,22,1056,22,1152,54C1248,86,1344,150,1392,182L1440,214L1440,320L0,320Z"
                />
            </svg>
        </header>
    );
};

export default Header;