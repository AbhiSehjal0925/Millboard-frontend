import React, { useEffect, useState, useRef } from 'react';
import MapForShowroomPage from '../subComponents/mapForShowroomPage';

const Section2 = () => {
    const [screenSize, setScreenSize] = useState<'large' | 'medium' | 'small'>('large');
    const [leftHeight, setLeftHeight] = useState<number>(70 * window.innerHeight / 100); // Default to 70vh
    const leftSideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 600) setScreenSize('small');
            else if (width <= 992) setScreenSize('medium');
            else setScreenSize('large');

            if (leftSideRef.current) {
                setLeftHeight(Math.min(leftSideRef.current.scrollHeight, 70 * window.innerHeight / 100));
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showrooms = [
        { showroomName: 'Millboard Midlands Experience Centre', showroomAddress: 'Erdington, 3 Tyburn Way, Birmingham, B24 0AZ' },
        { showroomName: 'Millboard Belfast', showroomAddress: '62 Trench Rd, Mallusk, Millboard Belfast Showroom, Newtownabbey, BT36 4LB' },
        { showroomName: 'Open Habitat', showroomAddress: '6-8 Peterborough Mews, Open Habitat, London, SW6 3BL' },
        { showroomName: 'Outdoor Living Show Garden', showroomAddress: '162 St Clair St, Show Garden - The Outdoor Living Co., Kirkcaldy, KY1 2BZ' },
        { showroomName: 'Outdoor Living Show Garden', showroomAddress: '162 St Clair St, Show Garden - The Outdoor Living Co., Kirkcaldy, KY1 2BZ' },
    ];

    return (
        <section
            style={{
                background: '#efcfac',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: screenSize === 'small' ? '40px 10px' : screenSize === 'medium' ? '60px 20px' : '60px 20px',
                gap: '30px',
            }}
        >
            <div
                style={{
                    fontFamily: 'Mansfield',
                    fontWeight: 500,
                    fontStyle: 'Medium',
                    fontSize: screenSize === 'small' ? '30px' : '45px',
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    color: '#000',
                }}
            >
                7 locations
            </div>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    width: '100%',
                    maxWidth: '1200px',
                }}
            >
                <div
                    ref={leftSideRef}
                    style={{
                        flex: '1 1 400px',
                        maxWidth: screenSize === 'medium' || screenSize === 'small' ? '100%' : '48%',
                        padding: '20px 30px',
                        boxSizing: 'border-box',
                        background: '#d3a069',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        maxHeight: '70vh',
                        overflowY: 'auto',
                        scrollbarWidth: 'thin'
                    }}
                >
                    {showrooms.map((showroom, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#e7cbac',
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                padding: '30px',
                                width: '100%',
                                height: 'auto',
                                color: '#000',
                                position: 'relative',
                                boxSizing: 'border-box',
                            }}
                        >
                            <div
                                style={{
                                    fontFamily: 'Mansfield',
                                    fontWeight: 400,
                                    fontSize: '25px',
                                    lineHeight: 1.1,
                                    textTransform: 'capitalize',
                                }}
                            >
                                {showroom.showroomName}
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Mansfield',
                                    fontWeight: 300,
                                    fontSize: '20px',
                                    lineHeight: 1.1,
                                    textTransform: 'capitalize',
                                }}
                            >
                                {showroom.showroomAddress}
                            </div>
                            <button
                                style={{
                                    width: '133px',
                                    height: '36px',
                                    borderRadius: '100px',
                                    border: '2px solid white',
                                    marginTop: '20px',
                                    background: '#D3A069',
                                    color: 'white',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.background = '#ac8052')}
                                onMouseOut={(e) => (e.currentTarget.style.background = '#D3A069')}
                            >
                                View Store
                            </button>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    width: '100%',
                                }}
                            >
                                <path fill="#d3a069" fill-opacity="1" d="M0,320L120,293.3C240,267,480,213,720,197.3C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                            </svg>
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        flex: '1 1 400px',
                        maxWidth: screenSize === 'medium' || screenSize === 'small' ? '100%' : '48%',
                        padding: '20px 30px',
                        boxSizing: 'border-box',
                        height: '70vh', // Fixed to match left side max height
                    }}
                >
                    <MapForShowroomPage />
                </div>
            </div>
        </section>
    );
}

export default Section2;