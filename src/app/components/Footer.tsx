import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div
      style={{
        width: '100vw',
        background: "url('/images/footerBg.png') center / cover no-repeat",
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        color: '#fff',
        padding: '40px 16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          width: '100vw',
          padding: '0 16px',
          gap: '16px',
        }}
      >
        {[
          'Start A Project',
          'Discover Millboard',
          'Quick Links',
          'Our Products',
          'Inspiration',
          'Resources',
        ].map((heading, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 150px', // Flexible growth, shrink, and basis for responsiveness
              minWidth: '150px',
              padding: '16px',
              borderRight: index !== 5 ? '1px solid #fff' : 'none',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                fontFamily: 'Mansfield, sans-serif',
                fontWeight: 300,
                fontSize: '20px',
                lineHeight: '20px',
                letterSpacing: '0.5px',
                textTransform: 'capitalize',
                marginBottom: '8px',
              }}
            >
              {heading}
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[...Array(4)].map((_, i) => (
                <li key={i} style={{ margin: '8px 0' }}>
                  <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                    {heading === 'Quick Links' && i === 0 ? 'Home' : 'Lorem Ipsum'}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '32px 16px',
          width: '100%',
          gap: '16px',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Column */}
        <div
          style={{
            flex: '2 1 250px',
            minWidth: '250px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '0 16px',
          }}
        >
          <div style={{ lineHeight: 1.5, fontSize: '14px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div style={{ filter: 'brightness(0) invert(1)', maxWidth: '120px' }}>
            <Image src="/images/mainlogo.png" alt="mainlogo" width={200} height={50} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>

        {/* Terms & Conditions Column */}
        <div
          style={{
            flex: '1 1 150px',
            minWidth: '150px',
            padding: '0 16px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[...Array(6)].map((_, i) => (
              <li key={i} style={{ margin: '8px 0' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                  Terms & Conditions
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay In The Loop Column */}
        <div
          style={{
            flex: '1 1 150px',
            minWidth: '150px',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              fontFamily: 'Mansfield, sans-serif',
              fontWeight: 300,
              fontSize: '20px',
              lineHeight: '20px',
              letterSpacing: '0.5px',
              textTransform: 'capitalize',
              marginBottom: '8px',
            }}
          >
            Stay In The Loop
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
            <input
              type="text"
              placeholder="First Name"
              style={{
                padding: '8px 10px',
                background: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{
                padding: '8px 10px',
                background: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <input
              type="email"
              placeholder="Email"
              style={{
                padding: '8px 10px',
                background: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 10px',
                backgroundColor: '#d0a15e',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '100px',
                alignSelf: 'center',
                fontSize: '14px',
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* General Enquiries Column */}
        <div
          style={{
            flex: '1 1 150px',
            minWidth: '150px',
            padding: '0 16px',
          }}
        >
          <div
            style={{
              fontFamily: 'Mansfield, sans-serif',
              fontWeight: 300,
              fontSize: '20px',
              lineHeight: '20px',
              letterSpacing: '0.5px',
              textTransform: 'capitalize',
              marginBottom: '8px',
            }}
          >
            General Enquiries
          </div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['dummy 123 lml #2 dummy 4,3', '1234567890', 'dummy12@gmail.com'].map((text, i) => (
              <li key={i} style={{ margin: '8px 0' }}>
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '14px',
                  }}
                >
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div
        style={{
          width: '100%',
          padding: '16px 16px',
          borderTop: '1px solid #fff',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontFamily: 'Mansfield, sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '24px',
            color: '#fff',
          }}
        >
          Copyright © 2025. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;