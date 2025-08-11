import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/cartcontext';
import Image from 'next/image';

const CartForSamples = () => {
    const {
        deckingItems,
        claddingItems,
        removeFromCart,
        onNavigate,
    } = useCart();

    const [isHydrated, setIsHydrated] = useState(false);
    const [responsive, setResponsive] = useState({
        containerWidth: '400px',
        right: '20px',
        bottom: '20px',
        padding: '20px',
        fontSizeBtn: '18px',
        itemSize: 60,
        iconSize: 24,
        confirmFont: '14px',
        confirmPadding: '10px 16px',
    });

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const vw = window.innerWidth;
            setResponsive({
                containerWidth: vw <= 480 ? '95vw' : vw <= 768 ? '90vw' : '400px',
                right: vw <= 480 ? '2.5vw' : vw <= 768 ? '5vw' : '20px',
                bottom: vw <= 768 ? '16px' : '20px',
                padding: vw <= 480 ? '12px' : vw <= 768 ? '16px' : '20px',
                fontSizeBtn: vw <= 480 ? '15px' : vw <= 768 ? '16px' : '18px',
                itemSize: vw <= 480 ? 42 : vw <= 768 ? 48 : 60,
                iconSize: vw <= 480 ? 18 : vw <= 768 ? 20 : 24,
                confirmFont: vw <= 480 ? '12px' : vw <= 768 ? '13px' : '14px',
                confirmPadding: vw <= 480 ? '6px 12px' : vw <= 768 ? '8px 14px' : '10px 16px',
            });
        };
        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const hasItems = isHydrated ? (deckingItems.length > 0 || claddingItems.length > 0) : false;

    const handleRequestSample = () => {
        if (onNavigate) onNavigate('basket');
    };

    if (!isHydrated || !hasItems) return null;

    const {
        containerWidth,
        right,
        bottom,
        padding,
        fontSizeBtn,
        itemSize,
        iconSize,
        confirmPadding,
    } = responsive;

    return (
        <div
            style={{
                backgroundColor: '#efcfac',
                padding,
                width: containerWidth,
                fontFamily: 'Inter, sans-serif',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.082)',
                position: 'fixed',
                bottom,
                right,
                zIndex: 121221212,
                border: '1px solid white',
            }}
        >
            {(['Decking', 'Cladding'] as const).map((type) => {
                const items = type === 'Decking' ? deckingItems : claddingItems;
                return (
                    <div key={type} style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontWeight: 500, fontSize: '13px', color: '#000', margin: 0 }}>
                            {type}:
                        </p>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: 0,
                                marginTop: '20px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    style={{
                                        width: itemSize,
                                        height: itemSize,
                                        borderRadius: 4,
                                        position: 'relative',
                                        display: 'flex',
                                    }}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={200}
                                        height={150}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: 4,
                                            boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)',
                                        }}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeFromCart(index, type)}
                                        aria-label="Remove"
                                        style={{
                                            position: 'absolute',
                                            top: -8,
                                            right: -8,
                                            backgroundColor: '#fff',
                                            border: 'none',
                                            borderRadius: '50%',
                                            padding: 2,
                                            cursor: 'pointer',
                                            boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="black"
                                            style={{ width: iconSize - 4, height: iconSize - 4 }}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            ))}
                            {Array.from({ length: 3 - items.length }).map((_, index) => (
                                <li
                                    key={`${type.toLowerCase()}-placeholder-${index}`}
                                    style={{
                                        width: itemSize,
                                        height: itemSize,
                                        backgroundColor: 'transparent',
                                        border: '1.5px dashed #ccc',
                                        borderRadius: 4,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: iconSize,
                                            fontWeight: 300,
                                            color: '#aaa',
                                        }}
                                    >
                                        +
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
            <button
                style={{
                    marginTop: '20px',
                    background: '#b07f4c',
                    color: 'white',
                    fontSize: fontSizeBtn,
                    padding: confirmPadding,
                    borderRadius: '1.5rem',
                    cursor: 'pointer',
                    border: 'none',
                    width: '100%',
                }}
                onClick={handleRequestSample}
            >
                Request Sample
            </button>
        </div>
    );
};

export default CartForSamples;
