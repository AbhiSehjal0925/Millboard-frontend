"use client";

import React, { useState, useEffect, useRef } from 'react';

const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    { code: 'fr', label: 'French' },
    { code: 'de', label: 'German' },
    { code: 'zh', label: 'Chinese' },
    { code: 'hi', label: 'Hindi' },
    { code: 'ar', label: 'Arabic' },
    { code: 'ru', label: 'Russian' },
    { code: 'ja', label: 'Japanese' },
    { code: 'pt', label: 'Portuguese' },
    { code: 'it', label: 'Italian' },
    { code: 'ko', label: 'Korean' },
    { code: 'tr', label: 'Turkish' },
    { code: 'bn', label: 'Bengali' },
    { code: 'pa', label: 'Punjabi' },
    { code: 'jv', label: 'Javanese' },
    { code: 'vi', label: 'Vietnamese' },
    { code: 'ur', label: 'Urdu' },
    { code: 'fa', label: 'Persian' },
    { code: 'uk', label: 'Ukrainian' },
];

const UpperNav = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [isMobile, setIsMobile] = useState(false);
    const [paused, setPaused] = useState(false);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Resume animation on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                marqueeRef.current &&
                !marqueeRef.current.contains(e.target as Node)
            ) {
                setPaused(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const containerStyle: React.CSSProperties = {
        backgroundColor: '#8c7b67',
        color: 'white',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isMobile ? 'center' : 'space-between',
        fontSize: isMobile ? '14px' : '16px',
        position: 'sticky',
        top: '0',
        zIndex: '99912121121',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    };

    const infoTextStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px',
        gap: '4px',
    };

    const iconStyle: React.CSSProperties = {
        width: '16px',
        height: '16px',
        flexShrink: 0,
    };

    const selectStyle: React.CSSProperties = {
        color: 'black',
        borderRadius: '4px',
        padding: '4px 6px',
        marginLeft: '4px',
        fontSize: '13px',
    };

    const marqueeContainer: React.CSSProperties = {
        display: 'flex',
        animation: 'scroll-left 20s linear infinite',
        animationPlayState: paused ? 'paused' : 'running',
    };

    const keyframes = `
    @keyframes scroll-left {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `;

    return (
        <>
            <style>{keyframes}</style>
            <div style={containerStyle}>
                {!isMobile ? (
                    // Desktop
                    <>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <p style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                +91 6123456789
                            </p>
                            <p style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                Dummy@gmail.com
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <p style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
                                Global Distribution</p>
                            <p style={infoTextStyle} ref={marqueeRef}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>
                                <select
                                    value={selectedLanguage}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPaused(true);
                                    }}
                                    onChange={(e) => {
                                        setSelectedLanguage(e.target.value);
                                        setPaused(false);
                                    }}
                                    style={selectStyle}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                            </p>
                        </div>
                    </>
                ) : (
                    // Mobile (Marquee)
                    <div style={marqueeContainer} ref={marqueeRef}>
                        <span style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                            <span style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                +91 6123456789</span>
                            <span style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                Dummy@gmail.com</span>
                            <span style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                </svg>
                                Global Distribution</span>
                            <span style={infoTextStyle}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>

                                <select
                                    value={selectedLanguage}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPaused(true);
                                    }}
                                    onChange={(e) => {
                                        setSelectedLanguage(e.target.value);
                                        setPaused(false);
                                    }}
                                    style={selectStyle}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.code} value={lang.code}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </>
    );
};

export default UpperNav;
