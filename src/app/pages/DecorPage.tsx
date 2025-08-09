import React from 'react';
import DecorhomeSec1 from '../decorsectionsPageComponents/decorhomeSec1';
import MultipleDecorSec2 from '../decorsectionsPageComponents/multipledecorSec2';
import AvailableColours from '../decorsectionsPageComponents/AvailablecolorsSec3';
import DecorformSec4 from '../decorsectionsPageComponents/DecorformSec4';
import SpecificationsSection from '../decorsectionsPageComponents/specificationsec5';
import DownloadsSection from '../decorsectionsPageComponents/downloadsSec6';
import NextProject from '../decorsectionsPageComponents/nextprojectSec7';
import BranchhillSe8 from '../decorsectionsPageComponents/branchhillSe8';

const DecorPage = () => {
    return (
        <div>
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
