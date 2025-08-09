import React, { useEffect, useState } from 'react';

const Section1 = () => {
    const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 768) setScreenSize('small');
            else setScreenSize('large');
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px 20px',
                backgroundColor: '#fff',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '20px',
                    maxWidth: '1200px',
                    width: '100%',
                }}
            >
                <div
                    style={{
                        flex: '1 1 400px',
                        maxWidth: screenSize === 'small' ? '100%' : '48%',
                        height: 'auto',
                        aspectRatio: '16 / 9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            backgroundImage: "url('/imagesForShowroomPage/Checkout-bg-image.png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        flex: '1 1 400px',
                        maxWidth: screenSize === 'small' ? '100%' : '48%',
                        height: 'auto',
                        aspectRatio: '16 / 9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            backgroundImage: "url('/imagesForShowroomPage/Checkout-bg-image-(1).png')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100%',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Section1;