import React, { useState, useEffect } from 'react';
import Header from '../orderPageComponents/Haeder';
import Section1 from '../orderPageComponents/Section1';
import Section2 from '../orderPageComponents/Section2';
import Section3 from '../orderPageComponents/Section3';
import Section4 from '../orderPageComponents/Section4';
import Section5 from '../orderPageComponents/Section5';
import Section6 from '../orderPageComponents/Section6';
import Section7 from '../orderPageComponents/Section7';
import Section8 from '../orderPageComponents/Section8';
import { CartProvider } from '@/context/cartcontext';
import { FilterProvider, useFilter } from '@/context/FilterContext';

interface OrderPageProps {
    onNavigate: (route: string) => void;
}

const OrderPageContent = ({ onNavigate }: OrderPageProps) => {
    const { isDeckingChecked, isCladdingChecked } = useFilter();
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

            <CartProvider onNavigate={onNavigate}>
                {/* Decking wood cards - shown only when Decking filter is checked */}
                {isDeckingChecked && (
                    <>
                        <Section1 />
                        <Section2 />
                        <Section3 />
                    </>
                )}

                {/* Cladding wood cards - shown only when Cladding filter is checked */}
                {isCladdingChecked &&
                    <>
                        <Section7 />
                        <Section4 />
                    </>
                }
            </CartProvider>

            {/* Non-product sections (outside CartProvider unless they need cart access) */}
            <Section5 />
            <Section6 />
            <Section8 />
        </div>
    );
};

const OrderPage = ({ onNavigate }: OrderPageProps) => {
    return (
        <FilterProvider>
            <OrderPageContent onNavigate={onNavigate} />
        </FilterProvider>
    );
};

export default OrderPage;