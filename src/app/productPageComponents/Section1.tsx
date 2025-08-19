import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const services = [
  'productSection1ContainerBox1Png1.png',
  'productSection1ContainerBox1Png2.png',
  'productSection1ContainerBox1Png3.png',
  'productSection1ContainerBox1Png4.png',
  'productSection1ContainerBox1Png5.png',
  'productSection1ContainerBox1Png6.png',
  'productSection1ContainerBox1Png7.png',
  'productSection1ContainerBox1Png8.png',
  'productSection1ContainerBox1Png9.png',
];

const Section1: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 600;

  const sectionStyle: React.CSSProperties = {
    width: '100%',
    padding: isMobile ? '15px' : '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    gap: isMobile ? '0' : '20px',
    width: '99%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    width: '500px'
  };

  const iconContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Mansfield, sans-serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#000',
    marginBottom: '4px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Mansfield, sans-serif',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#666',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {services.map((img, index) => (
          <div
            key={index}
            style={cardStyle}
          >
            <div style={iconContainerStyle}>
              <Image
                src={`/png/${img}`}
                alt={`service-${index + 1}`}
                width={60}
                height={60}
                style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: '#000' }}>
              <div style={titleStyle}>
                Lorem Ipsum is simply dummy text
              </div>
              <div style={descriptionStyle}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;