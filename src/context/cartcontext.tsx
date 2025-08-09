import React, { createContext, useContext, useState, useEffect } from 'react';

export type CartItem = {
    name: string;
    image: string;
    type: 'Decking' | 'Cladding';
};

type CartContextType = {
    deckingItems: CartItem[];
    claddingItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (index: number, type: 'Decking' | 'Cladding') => void;
    isCartVisible: boolean;
    toggleCartVisibility: () => void;
    onNavigate?: (route: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
    children: React.ReactNode;
    onNavigate?: (route: string) => void;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children, onNavigate }) => {
    const [deckingItems, setDeckingItems] = useState<CartItem[]>(() => {
        const savedDecking = localStorage.getItem('deckingItems');
        return savedDecking ? JSON.parse(savedDecking) : [];
    });
    const [claddingItems, setCladdingItems] = useState<CartItem[]>(() => {
        const savedCladding = localStorage.getItem('claddingItems');
        return savedCladding ? JSON.parse(savedCladding) : [];
    });
    const [isCartVisible, setIsCartVisible] = useState(true);

    useEffect(() => {
        localStorage.setItem('deckingItems', JSON.stringify(deckingItems));
    }, [deckingItems]);

    useEffect(() => {
        localStorage.setItem('claddingItems', JSON.stringify(claddingItems));
    }, [claddingItems]);

    const addToCart = (item: CartItem) => {
        const totalItems = deckingItems.length + claddingItems.length;
        if (totalItems >= 3) return; // Enforce combined limit of 3 items
        if (item.type === 'Decking' && !deckingItems.some(cartItem => cartItem.name === item.name)) {
            setDeckingItems(prev => [...prev, item]);
        } else if (item.type === 'Cladding' && !claddingItems.some(cartItem => cartItem.name === item.name)) {
            setCladdingItems(prev => [...prev, item]);
        }
    };

    const removeFromCart = (index: number, type: 'Decking' | 'Cladding') => {
        if (type === 'Decking') {
            setDeckingItems(prev => prev.filter((_, i) => i !== index));
        } else if (type === 'Cladding') {
            setCladdingItems(prev => prev.filter((_, i) => i !== index));
        }
    };

    const toggleCartVisibility = () => {
        setIsCartVisible(prev => !prev);
    };

    return (
        <CartContext.Provider value={{ deckingItems, claddingItems, addToCart, removeFromCart, isCartVisible, toggleCartVisibility, onNavigate }}>
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