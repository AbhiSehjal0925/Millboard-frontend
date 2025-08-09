import React, { createContext, useContext, useState } from 'react';

type FilterContextType = {
    isCladdingChecked: boolean;
    setIsCladdingChecked: React.Dispatch<React.SetStateAction<boolean>>;
    isDeckingChecked: boolean;
    setIsDeckingChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isCladdingChecked, setIsCladdingChecked] = useState(true);
    const [isDeckingChecked, setIsDeckingChecked] = useState(true);

    return (
        <FilterContext.Provider value={{ isCladdingChecked, setIsCladdingChecked, isDeckingChecked, setIsDeckingChecked }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};