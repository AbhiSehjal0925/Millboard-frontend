import React, { useEffect, useState } from 'react';

const Header = () => {
    const [screenSize, setScreenSize] = useState<'large' | 'tablet' | 'mobile'>('large');

    useEffect(() => {
        const handleResize = () => {
            if (typeof window === 'undefined') return;
            const width = window.innerWidth;
            if (width <= 480) setScreenSize('mobile');
            else if (width <= 1024) setScreenSize('tablet');
            else setScreenSize('large');
        };
        handleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <header
            style={{
                background: '#efcfac',
                display: 'flex',
                alignItems: 'center',
                justifyContent: screenSize === 'mobile' ? 'center' : 'space-evenly',
                flexWrap: 'wrap',
                position: 'relative',
                padding: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '30px' : '40px 20px',
                minHeight: screenSize === 'mobile' ? '50vh' : '70vh',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    gap: '5px',
                    position: 'absolute',
                    top: screenSize === 'mobile' ? '25px' : '20px',
                    left: screenSize === 'mobile' ? '25px' : '87px',
                    flexWrap: 'wrap',
                    fontSize: screenSize === 'mobile' ? '12px' : '18px',
                }}
            >
                <a href="" style={{ color: '#000' }}>Home</a>/
                <a href="" style={{ color: '#000' }}>Why Millboard</a>/
                <a href="" style={{ color: '#000' }}>Explore</a>/
                <a href="" style={{ color: '#000' }}>Showrooms</a>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    width: screenSize === 'mobile' ? '100%' : screenSize === 'tablet' ? '80%' : '50%',
                    color: '#000',
                    padding: screenSize === 'mobile' ? '0' : screenSize === 'tablet' ? '50px 20px' : '150px 20px',
                    gap: screenSize === 'mobile' ? '15px' : '30px',
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        // fontFamily: 'Mansfield',
                        fontWeight: 500,
                        fontSize: screenSize === 'mobile' ? '30px' : screenSize === 'tablet' ? '40px' : '50px',
                        lineHeight: 1.1,
                        textTransform: 'capitalize',
                        padding: screenSize === 'mobile' ? '0' : '0 80px',
                    }}
                >
                    Millboard Showrooms Discover the art of outdoor living
                </div>
                <div
                    style={{
                        // fontFamily: 'Shega',
                        fontWeight: 300,
                        fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '20.35px',
                        lineHeight: 1.2,
                        letterSpacing: '5%',
                        textAlign: 'center'
                    }}
                >
                    Welcome to Millboard showrooms, your gateway to experiencing outdoor living like never before. Our showrooms are more than just a place to showcase our innovative products; they are a source of inspiration for your own outdoor utopia. Enter a world where craftsmanship meets innovation and the timeless beauty of wood is enhanced by modern technology.
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

        </header>
    );
}

export default Header;