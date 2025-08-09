import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    onNavigate?: (page: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [deckingItems, setDeckingItems] = useState<CartItem[]>([]);
    const [claddingItems, setCladdingItems] = useState<CartItem[]>([]);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const toggleCartVisibility = () => setIsCartVisible((v) => !v);

    const removeFromCart = (index: number, type: 'Decking' | 'Cladding') => {
        if (type === 'Decking') {
            setDeckingItems((items) => items.filter((_, i) => i !== index));
        } else {
            setCladdingItems((items) => items.filter((_, i) => i !== index));
        }
    };

    // Dummy navigation handler
    const onNavigate = (page: string) => {
        // Implement navigation logic if needed
    };

    return (
        <CartContext.Provider
            value={{
                deckingItems,
                claddingItems,
                isCartVisible,
                toggleCartVisibility,
                removeFromCart,
                onNavigate,
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