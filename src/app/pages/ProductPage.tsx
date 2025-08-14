import React, { useState, useEffect } from 'react';
import Header from '../productPageComponents/Header';
import Section1 from '../productPageComponents/Section1';
import Section2 from '../productPageComponents/Section2';
import Section3 from '../productPageComponents/Section3';
import Section4 from '../productPageComponents/Section4';
import Section5 from '../productPageComponents/Section5';
import Section6 from '../productPageComponents/Section6';
import Section7 from '../productPageComponents/Section7';

const ProductPage = () => {
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
        </div>
    );
}

export default ProductPage;