import React, { useState, useEffect } from 'react';
import Haeder from '../thankYouPageComponents/Haeder';
import Section1 from '../thankYouPageComponents/Section1';

const ThankYouPage = () => {
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
            <Haeder />
            <Section1 />
        </div>
    );
}

export default ThankYouPage;
