import React, { useState, useEffect } from 'react';
import Header from '../blogPageComponents/Header';
import Section1 from '../blogPageComponents/Section1';
import Section2 from '../blogPageComponents/Section2';
import Section3 from '../blogPageComponents/Section3';
import Section4 from '../blogPageComponents/Section4';
import Section5 from '../blogPageComponents/Section5';
import Section6 from '../blogPageComponents/Section6';
import Section7 from '../blogPageComponents/Section7';
import Section8 from '../blogPageComponents/Section8';
import Section9 from '../blogPageComponents/Section9';

const BlogPage = () => {
    const [screenWidth, setScreenWidth] = useState(1920);
    const isSmall = screenWidth <= 768;

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={{ marginTop: isSmall ? '90px' : '120px' }}>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
        </div>
    );
}

export default BlogPage;
