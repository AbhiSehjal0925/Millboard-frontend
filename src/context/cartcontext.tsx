import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    image: string;
    name: string;
    // add other properties if needed
}

interface CartContextType {
    deckingItems: CartItem[];
    claddingItems: CartItem[];
    isCartVisible: boolean;
    toggleCartVisibility: () => void;
    removeFromCart: (index: number, type: 'Decking' | 'Cladding') => void;
    addToCart: (item: CartItem, type: 'Decking' | 'Cladding') => void; // <-- ADD THIS
    onNavigate?: (page: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({
    children,
    onNavigate,
}: {
    children: React.ReactNode;
    onNavigate?: (page: string) => void;
}) => {
    const [deckingItems, setDeckingItems] = useState<CartItem[]>([]);
    const [claddingItems, setCladdingItems] = useState<CartItem[]>([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    // Sync to localStorage when deckingItems changes
    useEffect(() => {
        localStorage.setItem('deckingItems', JSON.stringify(deckingItems));
    }, [deckingItems]);

    // Sync to localStorage when claddingItems changes
    useEffect(() => {
        localStorage.setItem('claddingItems', JSON.stringify(claddingItems));
    }, [claddingItems]);

    // On mount, load from localStorage
    useEffect(() => {
        const storedDecking = localStorage.getItem('deckingItems');
        const storedCladding = localStorage.getItem('claddingItems');
        if (storedDecking) setDeckingItems(JSON.parse(storedDecking));
        if (storedCladding) setCladdingItems(JSON.parse(storedCladding));
    }, []);

    const toggleCartVisibility = () => setIsCartVisible((v) => !v);

    const removeFromCart = (index: number, type: 'Decking' | 'Cladding') => {
        if (type === 'Decking') {
            setDeckingItems((items) => items.filter((_, i) => i !== index));
        } else {
            setCladdingItems((items) => items.filter((_, i) => i !== index));
        }
    };

    // ADD THIS FUNCTION
    const addToCart = (item: CartItem, type: 'Decking' | 'Cladding') => {
        if (type === 'Decking') {
            setDeckingItems((items) => [...items, item]);
        } else {
            setCladdingItems((items) => [...items, item]);
        }
    };

    return (
        <CartContext.Provider
            value={{
                deckingItems,
                claddingItems,
                isCartVisible,
                toggleCartVisibility,
                removeFromCart,
                addToCart, // <-- ADD THIS
                onNavigate, // use the prop
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};