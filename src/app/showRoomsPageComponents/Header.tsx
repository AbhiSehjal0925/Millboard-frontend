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
                minHeight: '70vh',
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
                    top: '20px',
                    left: '20px',
                    flexWrap: 'wrap',
                    fontSize: screenSize === 'mobile' ? '12px' : '14px',
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
                    padding: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '50px 20px' : '150px 20px',
                    gap: screenSize === 'mobile' ? '15px' : '30px',
                    zIndex: 10,
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        fontFamily: 'Mansfield',
                        fontWeight: 500,
                        fontSize: screenSize === 'mobile' ? '30px' : screenSize === 'tablet' ? '40px' : '55px',
                        lineHeight: 1.1,
                        textTransform: 'capitalize',
                    }}
                >
                    Millboard Showrooms Discover the art of outdoor living
                </div>
                <div
                    style={{
                        fontFamily: 'Shega',
                        fontWeight: 300,
                        fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'tablet' ? '16px' : '20.35px',
                        lineHeight: 1.1,
                        letterSpacing: '2%',
                    }}
                >
                    Welcome to Millboard showrooms, your gateway to experiencing outdoor living like never before. Our showrooms are more than just a place to showcase our innovative products; they are a source of inspiration for your own outdoor utopia. Enter a world where craftsmanship meets innovation and the timeless beauty of wood is enhanced by modern technology.
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{
                    position: 'absolute',
                    bottom: screenSize === 'mobile' ? '-10px' : '-15px',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <path fill="#ffffffff" fillOpacity="1" d="M0,224L60,240C120,256,240,288,360,293.3C480,299,600,277,720,256C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                style={{
                    position: 'absolute',
                    bottom: '0',
                    transform: 'rotate(0.8deg)',
                    width: '100%',
                }}
            >
                <path fill="#d3a069" fillOpacity="1" d="M0,224L60,240C120,256,240,288,360,293.3C480,299,600,277,720,256C840,235,960,213,1080,202.7C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </header>
    );
}

export default Header;