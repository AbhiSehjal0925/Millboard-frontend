import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Section5 = () => {
  const services = [
    'Why choose Millboard decking_ icon 1.png',
    'Why choose Millboard decking_ icon 2.png',
    'Why choose Millboard decking_ icon 3.png',
    'Why choose Millboard decking_ icon 4.png',
    'Why choose Millboard decking_ icon 5.png',
    'Why choose Millboard decking_ icon 6.png',
    'Why choose Millboard decking_ icon 7.png',
    'Why choose Millboard decking_ icon 8.png',
    'Why choose Millboard decking_ icon 9.png',
    'Why choose Millboard decking_ icon 10.png',
    'Why choose Millboard decking_ icon 11.png',
    'Why choose Millboard decking_ icon 12.png',
  ];

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBoxStyle = () => {
    let width;
    if (windowWidth >= 1024) {
      width = 'calc(33.33% - 1rem)';
    } else if (windowWidth >= 768) {
      width = 'calc(50% - 0.75rem)';
    } else {
      width = '100%';
    }

    const isMobile = windowWidth < 768;

    return {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '0.5rem' : '1rem',
      width,
      maxWidth: isMobile ? '24rem' : '20rem',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: isMobile ? 'center' : 'left',
      borderRadius: '0.75rem',
      padding: '1rem',
      boxSizing: 'border-box',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
      backgroundColor: '#fff', // optional
    };
  };

  const getImgWrapperStyle = () => {
    const isMobile = windowWidth < 768;
    return {
      position: 'relative', // required for Next.js Image fill
      flexShrink: 0,
      width: isMobile ? 'clamp(5rem, 15vw, 7rem)' : 'clamp(4rem, 10vw, 6rem)',
      height: isMobile ? 'clamp(5rem, 15vw, 7rem)' : 'clamp(4rem, 10vw, 6rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  };

  return (
    <section
      style={{
        background: '#efcfac',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5% 4%',
        gap: '2rem',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          fontFamily: 'Mansfield, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          color: '#ffffff',
          textAlign: 'center',
          wordBreak: 'break-word',
          maxWidth: '90%',
        }}
      >
        Why Choose Millboard Decking?
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {services.map((img, index) => (
          <div
            key={index}
            style={getBoxStyle()}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-0.25rem)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <div style={getImgWrapperStyle()}>
              <Image
                src={`/png/pngsForOrderPage/${img}`}
                alt={`service-${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                sizes={windowWidth < 768 ? '15vw' : '10vw'}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                color: '#000',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'Mansfield, sans-serif',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  wordBreak: 'break-word',
                }}
              >
                Lorem Ipsum is simply
              </div>
              <div
                style={{
                  fontFamily: 'Shega, sans-serif',
                  fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                  color: '#666',
                  wordBreak: 'break-word',
                  lineHeight: 1.4,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
