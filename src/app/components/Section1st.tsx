'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section1st = () => {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sectionStyle: React.CSSProperties = {
        background: 'linear-gradient(to bottom, #ffffff, white)',
        padding: isMobile ? '2rem 1rem' : '4rem 0',
        zIndex: 50,
        position: 'relative',
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : '2.5rem',
        alignItems: 'start',
    };

    const cardStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
    };

    const imageContainerStyle: React.CSSProperties = {
        marginBottom: '1rem',
        overflow: 'hidden',
        width: '100%',
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textBoxStyle: React.CSSProperties = {
        textAlign: 'center',
        width: '100%',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '1.5rem',
        padding: isMobile ? '1.5rem' : '2.5rem',
        backgroundColor: 'white',
    };

    const headingStyle: React.CSSProperties = {
        fontSize: isMobile ? '1.125rem' : '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: '#4B5563',
    };

    const paragraphStyle: React.CSSProperties = {
        color: '#4B5563',
        marginBottom: '1.25rem',
        fontSize: isMobile ? '0.95rem' : '1rem',
        lineHeight: '1.6',
    };

    const buttonStyle: React.CSSProperties = {
        display: 'inline-block',
        backgroundColor: '#D3A069',
        color: 'white',
        fontWeight: 600,
        padding: '0.5rem 1.25rem',
        borderRadius: '9999px',
        textDecoration: 'none',
        fontSize: isMobile ? '0.95rem' : '1rem',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                {[
                    {
                        img: '/images/section1stImg1.png',
                        title: 'Designed to go further and last longer',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                    {
                        img: '/images/section1stImg2.png',
                        title: 'Crafted to enhance any outdoor space',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    },
                ].map((card, i) => (
                    <div key={i} style={cardStyle}>
                        <div style={imageContainerStyle}>
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={900}
                                height={900}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                priority={i === 0} // First image prioritized
                            />
                        </div>
                        <div style={textBoxStyle}>
                            <h3 style={headingStyle}>{card.title}</h3>
                            <p style={paragraphStyle}>{card.text}</p>
                            <Link href="/explore-collection" style={buttonStyle}>
                                Explore the collection
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section1st;
