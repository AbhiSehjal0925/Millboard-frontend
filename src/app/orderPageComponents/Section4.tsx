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

const Section4 = () => {
  const { deckingItems, claddingItems, addToCart, removeFromCart } = useCart();
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    setIsHydrated(true);
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setScreenWidth(window.innerWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getCardWidth = () => {
    if (screenWidth < 600) return '100%'; // 1 card
    if (screenWidth < 900) return 'calc(50% - 1rem)'; // 2 cards
    if (screenWidth < 1200) return 'calc(33.33% - 1rem)'; // 3 cards
    return 'calc(25% - 1.125rem)'; // 4 cards
  };

  const handleCardClick = (wood: { name: string; image: string }) => {
    const item = { ...wood, type: 'Cladding' as const };
    if (!claddingItems.some(item => item.name === wood.name)) {
      addToCart(item, 'Cladding');
    } else {
      const index = claddingItems.findIndex(item => item.name === wood.name);
      removeFromCart(index, 'Cladding');
    }
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5% 4%',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 500,
          textAlign: 'center',
          marginBottom: '2rem',
          color: '#000',
          wordBreak: 'break-word',
        }}
      >
        Shadow line+
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {woods.map((wood, index) => {
          const isSelected = isHydrated ? claddingItems.some(item => item.name === wood.name) : false;
          const totalItems = deckingItems.length + claddingItems.length;
          const isDisabled = !isSelected && totalItems >= 3;
          const isHovered = hoveredCard === index;

          return (
            <div
              key={index}
              onClick={() => !isDisabled && handleCardClick(wood)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                width: getCardWidth(),
                aspectRatio: '1 / 1.2',
                background: '#d3a069',
                padding: '1rem',
                cursor: isDisabled ? 'not-allowed' : 'pointer',
                transition: 'all 0.1s ease',
                position: 'relative',
                boxSizing: 'border-box',
                boxShadow: isHovered ? 'rgba(0, 0, 0, 0.3) 0px 5px 15px' : 'none',
                border: isSelected ? '5px solid rgb(2, 77, 2)' : 'none',
                opacity: isDisabled ? 0.5 : 1,
                maxWidth: '20rem'
              }}
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
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    fontWeight: 400,
                    color: '#333',
                  }}
                >
                  Enhanced Grain
                </div>
                <div
                  style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
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
                    position: 'absolute',
                    top: '100px',
                    right: '100px',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '5px 8px',
                    fontWeight: 'bold',
                    fontSize: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ✔
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

export default Section4;
