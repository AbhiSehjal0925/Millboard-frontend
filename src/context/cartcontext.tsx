import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    image: string;
    name: string;
    type: 'Decking' | 'Cladding';
    // add other properties if needed
}

interface CartContextType {
    deckingItems: CartItem[];
    claddingItems: CartItem[];
    isCartVisible: boolean;
    toggleCartVisibility: () => void;
    removeFromCart: (index: number, type: 'Decking' | 'Cladding') => void;
    addToCart: (item: Omit<CartItem, 'id'>, type: 'Decking' | 'Cladding') => void;
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

        if (storedDecking) {
            try {
                const parsedDecking = JSON.parse(storedDecking);
                // Ensure all items have an id
                const deckingWithIds = parsedDecking.map((item: any, index: number) => ({
                    ...item,
                    id: item.id || `Decking-${item.name}-${index}-${Date.now()}`
                }));
                setDeckingItems(deckingWithIds);
            } catch (err) {
                console.error('Error parsing deckingItems:', err);
            }
        }

        if (storedCladding) {
            try {
                const parsedCladding = JSON.parse(storedCladding);
                // Ensure all items have an id
                const claddingWithIds = parsedCladding.map((item: any, index: number) => ({
                    ...item,
                    id: item.id || `Cladding-${item.name}-${index}-${Date.now()}`
                }));
                setCladdingItems(claddingWithIds);
            } catch (err) {
                console.error('Error parsing claddingItems:', err);
            }
        }
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
    const addToCart = (item: Omit<CartItem, 'id'>, type: 'Decking' | 'Cladding') => {
        const itemWithId = {
            ...item,
            id: `${type}-${item.name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
        };

        if (type === 'Decking') {
            setDeckingItems((items) => [...items, itemWithId]);
        } else {
            setCladdingItems((items) => [...items, itemWithId]);
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