import React, { useEffect, useState } from 'react';

const Section1 = () => {
    const [screenSize, setScreenSize] = useState<'large' | 'small'>('large');

    useEffect(() => {
        const handleResize = () => {
            if (typeof window === 'undefined') return;
            const width = window.innerWidth;
            if (width <= 768) setScreenSize('small');
            else setScreenSize('large');
        };
        handleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
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
                    // maxWidth: '1200px',
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
                        position: 'relative',
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

                    <svg
                        style={{
                            position: 'absolute',
                            bottom: '-260px',
                            width: '100%',
                            height: '100%',
                            zIndex: 1,
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="707"
                        height="123"
                        viewBox="0 0 707 123"
                        fill="none"
                    >
                        <path
                            d="M0.875 67.3794C0.875 36.6313 32.9456 16.3991 60.6967 29.64V29.64C71.9616 35.0148 85.0386 35.0764 96.3536 29.808L153.101 3.38527C166.58 -2.89041 182.618 1.40655 191.153 13.5801V13.5801C200.721 27.226 219.436 30.7321 233.294 21.4749L244.633 13.9008C256.656 5.86938 271.826 4.16314 285.333 9.323L302.638 15.9335C318.13 21.8518 335.223 22.0636 350.858 16.531L371.894 9.0868C385.58 4.24353 400.836 8.05724 410.634 18.771V18.771C421.191 30.3161 437.977 33.7604 452.228 27.3059L481.128 14.2168C499.714 5.79906 520.837 4.90472 540.068 11.7213L589.898 29.3845C605.209 34.8115 622.242 31.8382 634.809 21.5451V21.5451C649.816 9.25298 670.885 7.59201 687.632 17.3808L708.482 29.5674C717.457 34.8128 728.626 34.5323 737.326 28.8428V28.8428C755.562 16.9167 779.752 30.2938 779.752 52.0838V52.0838V52.0838C779.752 91.1367 748.094 122.795 709.041 122.795H47.9513C21.9518 122.795 0.875 101.719 0.875 75.719V67.3794Z"
                            fill="white"
                            stroke="#D3A069"
                            strokeWidth="2"
                        />
                    </svg>

                </div>
            </div>
        </section>
    );
}

export default Section1;