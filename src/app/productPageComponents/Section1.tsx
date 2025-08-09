import Image from 'next/image';
import React from 'react';

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

const Section1 = () => {
  return (
    <section
      style={{
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '60px 20px',
        gap: '40px',
      }}
    >
      <div
        style={{
          fontFamily: 'Mansfield, sans-serif',
          fontWeight: 700,
          fontSize: '45px',
          lineHeight: '47px',
          color: '#000',
          textAlign: 'center',
        }}
      >
        Services
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '1328px',
          width: '100%',
        }}
      >
        {services.map((img, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              width: '100%',
              maxWidth: '420px',
              background: '#ffffff',
              borderRadius: '21px',
              padding: '10px 20px',
              boxSizing: 'border-box',
              transition: 'transform 0.3s ease',
              flex: '1 1 calc(33.333% - 40px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={`/png/${img}`}
                alt={`service-${index + 1}`}
                width={60}
                height={60}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: '#000' }}>
              <div
                style={{
                  fontFamily: 'Mansfield, sans-serif',
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                Lorem Ipsum is simply
              </div>
              <div
                style={{
                  fontFamily: 'Shega, sans-serif',
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#666',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;