import React, { useState, useEffect } from 'react';
import Header from '../showRoomsPageComponents/Header';
import Section1 from '../showRoomsPageComponents/Section1';
import Section2 from '../showRoomsPageComponents/Section2';

const ShowroomsPage = () => {
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
        </div>
    );
}

export default ShowroomsPage;
