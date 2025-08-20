import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define the footer data structure
interface FooterLink {
  text: string;
  href: string;
}

interface FooterSection {
  heading: string;
  links: FooterLink[];
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

// Footer data
const footerData = {
  topSections: [
    {
      heading: 'Start A Project',
      links: [
        { text: 'Get Quote', href: '#' },
        { text: 'Project Consultation', href: '#' },
        { text: 'Design Services', href: '#' },
        { text: 'Installation Guide', href: '#' }
      ]
    },
    {
      heading: 'Discover Millboard',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Our Story', href: '#' },
        { text: 'Sustainability', href: '#' },
        { text: 'Innovation', href: '#' }
      ]
    },
    {
      heading: 'Quick Links',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Products', href: '#' },
        { text: 'Gallery', href: '#' },
        { text: 'Contact', href: '#' }
      ]
    },
    {
      heading: 'Our Products',
      links: [
        { text: 'Decking', href: '#' },
        { text: 'Cladding', href: '#' },
        { text: 'Accessories', href: '#' },
        { text: 'Finishes', href: '#' }
      ]
    },
    {
      heading: 'Inspiration',
      links: [
        { text: 'Project Gallery', href: '#' },
        { text: 'Design Ideas', href: '#' },
        { text: 'Case Studies', href: '#' },
        { text: 'Trends', href: '#' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { text: 'Installation Guide', href: '#' },
        { text: 'Maintenance Tips', href: '#' },
        { text: 'Technical Specs', href: '#' },
        { text: 'Downloads', href: '#' }
      ]
    }
  ],
  contactInfo: {
    address: 'dummy 123 lml #2 dummy 4,3',
    phone: '1234567890',
    email: 'dummy12@gmail.com'
  },
  companyDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  copyright: 'Copyright © 2025. All rights reserved.'
};

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowWidth <= 1024;
  const isMobile = windowWidth <= 600;

  return (
    <div
      style={{
        width: '100%',
        background: "url('/images/footerBg.png') center / cover no-repeat",
        display: 'flex',
        flexDirection: 'column',
        fontSize: '16px',
        color: '#fff',
        padding: isMobile ? '40px 0' : '40px 64px',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '0 16px',
          gap: '16px',
          maxWidth: '2000px'
        }}
      >
        {footerData.topSections.map((section, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 150px',
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
              {section.heading}
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {section.links.map((link, i) => (
                <li key={i} style={{ margin: '8px 0' }}>
                  <a href={link.href} style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                    {link.text}
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
            {footerData.companyDescription}
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
            {[
              'Terms & Conditions',
              'Privacy Policy',
              'Cookie Policy',
              'Accessibility',
              'Sitemap',
              'Legal Notice'
            ].map((text, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay In The Loop Column */}
        <div
          style={{
            flex: '1 1 150px',
            minWidth: isMobile ? '100vw' : '150px',
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            Stay In The Loop
          </div>
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: isMobile ? '100%' : '300px',
            width: '100%'
          }}>
            <input
              type="text"
              placeholder="First Name"
              style={{
                padding: '8px 10px',
                background: '#fff',
                border: 'none',
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: isMobile ? '84%' : '280px',
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
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: isMobile ? '84%' : '280px',
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
                fontSize: '14px',
                outline: 'none',
                color: '#000000',
                width: isMobile ? '84%' : '280px',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              className="coolBeans"
              style={{
                padding: '8px 10px',
                backgroundColor: '#d0a15e',
                color: '#fff',
                fontWeight: 'bold',
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
                // maxWidth: isMobile ? '100%' : '100px',
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
            // minWidth: '150px',
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
            {[
              footerData.contactInfo.address,
              footerData.contactInfo.phone,
              footerData.contactInfo.email
            ].map((text, i) => (
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
          {footerData.copyright}
        </div>
      </div>
    </div>
  );
};

export default Footer;