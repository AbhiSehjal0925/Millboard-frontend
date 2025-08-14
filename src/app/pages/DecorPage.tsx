import React, { useState, useEffect } from 'react';
import DecorhomeSec1 from '../decorsectionsPageComponents/decorhomeSec1';
import MultipleDecorSec2 from '../decorsectionsPageComponents/multipledecorSec2';
import AvailableColours from '../decorsectionsPageComponents/AvailablecolorsSec3';
import DecorformSec4 from '../decorsectionsPageComponents/DecorformSec4';
import SpecificationsSection from '../decorsectionsPageComponents/specificationsec5';
import DownloadsSection from '../decorsectionsPageComponents/downloadsSec6';
import NextProject from '../decorsectionsPageComponents/nextprojectSec7';
import BranchhillSe8 from '../decorsectionsPageComponents/branchhillSe8';

const DecorPage = () => {
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
            <DecorhomeSec1 />
            <MultipleDecorSec2 />
            <AvailableColours />
            <DecorformSec4 />
            <SpecificationsSection />
            <DownloadsSection />
            <NextProject />
            <BranchhillSe8 />
        </div>
    );
}

export default DecorPage;
