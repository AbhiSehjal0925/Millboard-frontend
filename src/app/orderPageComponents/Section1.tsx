import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/cartcontext';
import CartForSamples from '../subComponents/CartForSamples';
import Image from 'next/image';

export const woods = [
    { name: 'Antique Oak', image: '/imagesForOrderPage/Cladding image2.png' },
    { name: 'Ashwood', image: '/imagesForOrderPage/Cladding image 3.png' },
    { name: 'Brushed Basalt', image: '/imagesForOrderPage/Cladding image 4.png' },
    { name: 'Burnt Cedar', image: '/imagesForOrderPage/Cladding image 5.png' },
    { name: 'Coppered Oak', image: '/imagesForOrderPage/Cladding image 6.png' },
    { name: 'Ebony Grey', image: '/imagesForOrderPage/Lasta-Grip image2.png' },
    { name: 'Golden Oak', image: '/imagesForOrderPage/Lasta-Grip image 1.png' },
    { name: 'Jarrah', image: '/imagesForOrderPage/Shadow Line+ image 7.png' },
    { name: 'Ashwood', image: '/imagesForOrderPage/Cladding image 3.png' },
    { name: 'Brushed Basalt', image: '/imagesForOrderPage/Cladding image 4.png' },
];

const Section1 = () => {
    const { deckingItems, claddingItems, addToCart, removeFromCart } = useCart();
    const [isHydrated, setIsHydrated] = useState(false);
    const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    useEffect(() => {
        setIsHydrated(true);
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setScreenWidth(window.innerWidth);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardClick = (wood: { name: string; image: string }) => {
        const item = { ...wood, type: 'Decking' as const };
        if (!deckingItems.some(item => item.name === wood.name)) {
            addToCart(item, 'Decking');
        } else {
            const index = deckingItems.findIndex(item => item.name === wood.name);
            removeFromCart(index, 'Decking');
        }
    };

    const getCardWidth = () => {
        if (screenWidth >= 1024) return 'calc(25% - 1.125rem)';
        if (screenWidth >= 768) return 'calc(50% - 0.75rem)';
        return '100%';
    };

    return (
        <section
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '5% 5%',
                width: '100%',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    fontSize: screenWidth >= 1024 ? '2.5rem' : screenWidth >= 768 ? '2rem' : '1.8rem',
                    fontWeight: 500,
                    textAlign: 'center',
                    marginBottom: '1rem',
                    color: '#000',
                    wordBreak: 'break-word',
                }}
            >
                Decking
            </div>
            <div
                style={{
                    fontSize: screenWidth >= 1024 ? '2rem' : screenWidth >= 768 ? '1.7rem' : '1.5rem',
                    fontWeight: 400,
                    textAlign: 'center',
                    marginBottom: '2rem',
                    color: '#000',
                    wordBreak: 'break-word',
                }}
            >
                Enhanced grain
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    width: '100%',
                }}
            >
                {woods.map((wood, index) => {
                    const isSelected = isHydrated ? deckingItems.some(item => item.name === wood.name) : false;
                    const totalItems = deckingItems.length + claddingItems.length;
                    const isDisabled = !isSelected && totalItems >= 3;

                    return (
                        <div
                            key={index}
                            onClick={() => !isDisabled && handleCardClick(wood)}
                            style={{
                                width: getCardWidth(),
                                maxWidth: screenWidth < 768 ? '20rem' : '18rem',
                                aspectRatio: '1 / 1.2',
                                background: '#d3a069',
                                padding: '1rem',
                                cursor: isDisabled ? 'not-allowed' : 'pointer',
                                transition: 'all 0.1s ease',
                                position: 'relative',
                                boxSizing: 'border-box',
                                boxShadow: isDisabled ? 'none' : 'rgba(0, 0, 0, 0.3) 0px 5px 15px',
                                opacity: isDisabled ? 0.5 : 1,
                            }}
                            onMouseEnter={e => !isDisabled && (e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 5px 15px')}
                            onMouseLeave={e => !isDisabled && (e.currentTarget.style.boxShadow = 'none')}
                        >
                            <Image
                                src={wood.image}
                                alt={wood.name}
                                width={400}
                                height={300}
                                style={{
                                    width: '100%',
                                    height: '80%',
                                    objectFit: 'cover',
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '1rem',
                                    left: '1rem',
                                    right: '1rem',
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: screenWidth >= 1024 ? '1rem' : screenWidth >= 768 ? '0.95rem' : '0.9rem',
                                        fontWeight: 400,
                                        color: '#333',
                                    }}
                                >
                                    Enhanced Grain
                                </div>
                                <div
                                    style={{
                                        fontSize: screenWidth >= 1024 ? '1.2rem' : screenWidth >= 768 ? '1.1rem' : '1rem',
                                        fontWeight: 600,
                                        wordBreak: 'break-word',
                                        color: '#000',
                                    }}
                                >
                                    {wood.name}
                                </div>
                            </div>
                            {isSelected && (
                                <div
                                    style={{
                                        color: 'white',
                                        borderRadius: '50%',
                                        fontSize: '120px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        width: '100%',
                                        position: 'absolute',
                                        top: '-40px',
                                        left: 0,
                                    }}
                                ><span>
                                        ✔
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <CartForSamples />
        </section>
    );
};

export default Section1;