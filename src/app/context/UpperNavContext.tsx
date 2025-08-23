"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UpperNavContextType {
    isUpperNavVisible: boolean;
    setIsUpperNavVisible: (visible: boolean) => void;
}

const UpperNavContext = createContext<UpperNavContextType | undefined>(undefined);

export const useUpperNav = () => {
    const context = useContext(UpperNavContext);
    if (context === undefined) {
        throw new Error('useUpperNav must be used within an UpperNavProvider');
    }
    return context;
};

interface UpperNavProviderProps {
    children: ReactNode;
}

export const UpperNavProvider: React.FC<UpperNavProviderProps> = ({ children }) => {
    const [isUpperNavVisible, setIsUpperNavVisible] = useState(true);

    return (
        <UpperNavContext.Provider value={{ isUpperNavVisible, setIsUpperNavVisible }}>
            {children}
        </UpperNavContext.Provider>
    );
};
