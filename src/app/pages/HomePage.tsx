import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Section1st from '../components/Section1st';
import Section2nd from '../components/Section2nd';
import Section3rd from '../components/Section3rd';
import Section4th from '../components/Section4th';
import Section5th from '../components/Section5th';
import Section6th from '../components/Section6th';

const HomePage = () => {
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
            <Section1st />
            <Section2nd />
            <Section3rd />
            <Section4th />
            <Section5th />
            <Section6th />
        </div>
    );
}

export default HomePage;
