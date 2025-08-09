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

const Section1: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    width: '100%',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    width: '100%',
  };

  const cardStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '30px 20px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    border: '1px solid #eee',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const iconContainerStyle: React.CSSProperties = {
    width: '70px',
    height: '70px',
    backgroundColor: 'transparent',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const textContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: 'Mansfield, serif',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#000',
    margin: 0,
  };

  const descriptionStyle: React.CSSProperties = {
    fontFamily: 'Shega',
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            <div style={iconContainerStyle}>
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