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
    padding: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const containerStyle: React.CSSProperties = {
    gap: '20px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
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
    marginBottom: '4px',
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