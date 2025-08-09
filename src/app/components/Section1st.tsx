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

        handleResize(); // check on mount
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
        maxWidth: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: '1 / 1',
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
                {/* Card 1 */}
                <div style={cardStyle}>
                    <div style={imageContainerStyle}>
                        <Image
                            src="/images/section1stImg1.png"
                            alt="Product Left"
                            width={900}
                            height={900}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div style={textBoxStyle}>
                        <h3 style={headingStyle}>Designed to go further and last longer</h3>
                        <p style={paragraphStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link href="/explore-collection" style={buttonStyle}>
                            Explore the collection
                        </Link>
                    </div>
                </div>

                {/* Card 2 */}
                <div style={cardStyle}>
                    <div style={imageContainerStyle}>
                        <Image
                            src="/images/section1stImg2.png"
                            alt="Product Right"
                            width={900}
                            height={900}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div style={textBoxStyle}>
                        <h3 style={headingStyle}>Crafted to enhance any outdoor space</h3>
                        <p style={paragraphStyle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <Link href="/explore-collection" style={buttonStyle}>
                            Explore the collection
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1st;
