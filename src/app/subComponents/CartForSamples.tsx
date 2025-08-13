import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/cartcontext';

const CartForSamples = () => {
    const {
        deckingItems,
        claddingItems,
        isCartVisible,
        toggleCartVisibility,
        removeFromCart,
        onNavigate
    } = useCart();

    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    const hasItems = isHydrated ? (deckingItems.length > 0 || claddingItems.length > 0) : false;

    const handleRequestSample = () => {
        if (onNavigate) onNavigate('basket');
    };

    if (!isHydrated || !hasItems) return null;

    // Responsive helper
    const responsiveSize = () => {
        const vw = window.innerWidth;
        return {
            containerWidth: vw <= 480 ? '95vw' : vw <= 768 ? '90vw' : '400px',
            right: vw <= 480 ? '2.5vw' : vw <= 768 ? '5vw' : '20px',
            bottom: vw <= 768 ? '16px' : '20px',
            padding: vw <= 480 ? '12px' : vw <= 768 ? '16px' : '20px',
            fontSizeBtn: vw <= 480 ? '15px' : vw <= 768 ? '16px' : '18px',
            itemSize: vw <= 480 ? 42 : vw <= 768 ? 48 : 60,
            iconSize: vw <= 480 ? 18 : vw <= 768 ? 20 : 24,
            confirmFont: vw <= 480 ? '12px' : vw <= 768 ? '13px' : '14px',
            confirmPadding: vw <= 480 ? '6px 12px' : vw <= 768 ? '8px 14px' : '10px 16px',
        };
    };

    const {
        containerWidth,
        right,
        bottom,
        padding,
        fontSizeBtn,
        itemSize,
        iconSize,
        confirmFont,
        confirmPadding
    } = responsiveSize();

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
            <button
                type="button"
                onClick={toggleCartVisibility}
                aria-label="Request Free Samples"
                style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: fontSizeBtn,
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    padding: 0,
                    color: '#000',
                }}
            >
                Request Free Samples
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: '24px', height: '24px', marginLeft: 'auto' }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={isCartVisible
                            ? 'm19.5 8.25-7.5 7.5-7.5-7.5'
                            : 'm4.5 15.75 7.5-7.5 7.5 7.5'}
                    />
                </svg>
            </button>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    maxHeight: isCartVisible ? '1000px' : '0',
                    opacity: isCartVisible ? 1 : 0,
                    transform: isCartVisible ? 'scaleY(1)' : 'scaleY(0.95)',
                    transformOrigin: 'top',
                    transition: 'all 0.5s ease-in-out',
                    overflow: 'hidden',
                    pointerEvents: isCartVisible ? 'auto' : 'none',
                }}
            >
                {['Decking', 'Cladding'].map((type) => {
                    const items = type === 'Decking' ? deckingItems : claddingItems;

                    return (
                        <div key={type} style={{ display: 'flex', flexDirection: 'column' }}>
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    marginTop: '20px',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <p style={{ fontWeight: 500, fontSize: '13px', color: '#000', margin: 0 }}>
                                    {type}:
                                </p>

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
                                        <img
                                            src={item.image}
                                            alt={item.name}
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
                                            onClick={() => removeFromCart(index, type as 'Decking' | 'Cladding')}
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
                        width: '100%',
                        marginTop: '20px',
                        padding: confirmPadding,
                        backgroundColor: '#d3a069',
                        color: '#fff',
                        border: '2px solid #fff',
                        borderRadius: '24px',
                        fontWeight: 600,
                        fontSize: confirmFont,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseEnter={(e) => {
                        Object.assign(e.currentTarget.style, {
                            boxShadow: 'rgba(255, 255, 255, 0.534) 0px 30px 60px -12px inset, rgba(255, 255, 255, 0.548) 0px 18px 36px -18px inset',
                            color: 'black',
                            border: '2px solid #efcfac',
                        });
                    }}
                    onMouseLeave={(e) => {
                        Object.assign(e.currentTarget.style, {
                            boxShadow: 'none',
                            color: '#fff',
                            border: '2px solid #fff',
                        });
                    }}
                    onClick={handleRequestSample}
                >
                    Request free sample
                </button>
            </div>
        </div>
    );
};

export default CartForSamples;