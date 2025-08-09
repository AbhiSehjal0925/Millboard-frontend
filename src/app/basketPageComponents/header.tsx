'use client';

import React, { useEffect, useState } from 'react';

type CartItem = {
    id: string;
    name: string;
    image: string;
    type: 'Decking' | 'Cladding';
};

const Header = () => {
    const [deckingItems, setDeckingItems] = useState<CartItem[]>([]);
    const [claddingItems, setCladdingItems] = useState<CartItem[]>([]);
    const [screenSize, setScreenSize] = useState<'large' | 'tablet' | 'mobile'>('large');

    useEffect(() => {
        const storedDecking = localStorage.getItem('deckingItems');
        const storedCladding = localStorage.getItem('claddingItems');

        if (storedDecking) {
            try {
                setDeckingItems(JSON.parse(storedDecking));
            } catch (err) {
                console.error("Error parsing deckingItems:", err);
            }
        }

        if (storedCladding) {
            try {
                setCladdingItems(JSON.parse(storedCladding));
            } catch (err) {
                console.error("Error parsing claddingItems:", err);
            }
        }

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 480) setScreenSize('mobile');
            else if (width <= 1024) setScreenSize('tablet');
            else setScreenSize('large');
        };
        handleResize(); // Set initial size
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRemoveItem = (itemToRemove: CartItem) => {
        if (itemToRemove.type === 'Decking') {
            const updatedDecking = deckingItems.filter(item => item.id !== itemToRemove.id);
            setDeckingItems(updatedDecking);
            localStorage.setItem('deckingItems', JSON.stringify(updatedDecking));
        } else {
            const updatedCladding = claddingItems.filter(item => item.id !== itemToRemove.id);
            setCladdingItems(updatedCladding);
            localStorage.setItem('claddingItems', JSON.stringify(updatedCladding));
        }
    };

    return (
        <header
            style={{
                background: '#efcfab',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: screenSize === 'mobile' ? '80px 20px' : screenSize === 'tablet' ? '100px 30px' : '150px 100px',
                position: 'relative',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    color: 'black',
                    fontSize: screenSize === 'mobile' ? '14px' : 'inherit',
                }}
            >
                <a href="" style={{ color: 'black' }}>Home</a> / <a href="" style={{ color: 'black' }}>Order Samples</a>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    flexWrap: 'wrap',
                    flexDirection: screenSize === 'tablet' || screenSize === 'mobile' ? 'column' : 'row',
                    gap: screenSize === 'tablet' || screenSize === 'mobile' ? '30px' : '0',
                }}
            >
                <div
                    style={{
                        width: screenSize === 'tablet' || screenSize === 'mobile' ? '100%' : '50%',
                        height: screenSize === 'mobile' ? 'auto' : screenSize === 'tablet' ? 'auto' : '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            color: 'black',
                            fontSize: screenSize === 'mobile' ? '28px' : screenSize === 'tablet' ? '36px' : '60px',
                            fontWeight: 500,
                            textAlign: screenSize === 'tablet' || screenSize === 'mobile' ? 'center' : 'left',
                        }}
                    >
                        Checkout
                    </div>
                    <div
                        style={{
                            height: '100%',
                            width: screenSize === 'tablet' || screenSize === 'mobile' ? '100%' : '80%',
                            padding: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '20px' : '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <form
                            style={{
                                display: 'flex',
                                gap: screenSize === 'mobile' ? '10px' : '15px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="First Name*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                                <input
                                    type="number"
                                    placeholder="Telephone Number*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Street Address*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="House Name / Number*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Address Line 2*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                                <input
                                    type="text"
                                    placeholder="Postal Code*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="City / Town*"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                        padding: '6px',
                                    }}
                                />
                                <select
                                    name="country"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                    }}
                                >
                                    <option value="">Select Country*</option>
                                    <option value="India">India</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United States">United States</option>
                                </select>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <select
                                    name="who_am_i"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                    }}
                                >
                                    <option value="Homeowner">Homeowner</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Interior Designer">Interior Designer</option>
                                    <option value="Contractor">Contractor</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Other">Other</option>
                                </select>

                                <select
                                    name="project_start_time"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                    }}
                                >
                                    <option value="Immediately">Immediately</option>
                                    <option value="1-3 months">1-3 months</option>
                                    <option value="3-6 months">3-6 months</option>
                                    <option value="6+ months">6+ months</option>
                                    <option value="Not Sure">Not Sure</option>
                                </select>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: screenSize === 'mobile' ? '10px' : '15px',
                                    flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                    width: screenSize === 'mobile' ? '100%' : 'auto',
                                }}
                            >
                                <select
                                    name="project_size"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                    }}
                                >
                                    <option value="Small (<500 sqft)">Small (&lt;500 sqft)</option>
                                    <option value="Medium (500-1500 sqft)">Medium (500-1500 sqft)</option>
                                    <option value="Large (1500-3000 sqft)">Large (1500-3000 sqft)</option>
                                    <option value="Very Large (3000+ sqft)">Very Large (3000+ sqft)</option>
                                </select>

                                <select
                                    name="project_budget"
                                    style={{
                                        background: '#ffffff',
                                        width: screenSize === 'mobile' ? '100%' : '320px',
                                        height: '50px',
                                        borderRadius: 0,
                                        color: '#000',
                                    }}
                                >
                                    <option value="Under $10,000">Under $10,000</option>
                                    <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                                    <option value="Above $100,000">Above $100,000</option>
                                </select>
                            </div>

                            <br />
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    color: '#000',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="checkbox"
                                        id="checkbox1"
                                        style={{ height: '16px', width: '16px', marginRight: '8px' }}
                                    />
                                    <label htmlFor="checkbox1">Would you like a Millboard Lookbook?</label>
                                </div>
                                <br />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="checkbox"
                                        id="checkbox2"
                                        style={{ height: '16px', width: '16px', marginRight: '8px' }}
                                    />
                                    <label htmlFor="checkbox2">
                                        We process your data under legitimate interest to provide relevant content and communications in line with our privacy policy. If you prefer not to receive marketing communications, please tick the box.
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div
                    style={{
                        width: screenSize === 'tablet' || screenSize === 'mobile' ? '100%' : '50%',
                        height: screenSize === 'mobile' ? 'auto' : screenSize === 'tablet' ? 'auto' : '80vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            background: '#f7e7d6',
                            height: screenSize === 'mobile' ? 'auto' : screenSize === 'tablet' ? 'auto' : '550px',
                            width: screenSize === 'mobile' ? '100%' : screenSize === 'tablet' ? '100%' : '400px',
                            padding: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '30px 20px' : '50px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: screenSize === 'mobile' ? '20px' : screenSize === 'tablet' ? '22px' : '24px',
                                fontWeight: 500,
                                color: '#000',
                                marginBottom: '20px',
                            }}
                        >
                            Basket
                        </div>

                        <div>
                            {[...deckingItems, ...claddingItems].map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        display: 'flex',
                                        gap: screenSize === 'mobile' ? '10px' : '15px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: screenSize === 'mobile' ? '50px' : '60px',
                                                height: screenSize === 'mobile' ? '50px' : '60px',
                                                objectFit: 'cover',
                                                border: '1px solid #ccc',
                                            }}
                                        />
                                    </div>
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <div style={{ fontSize: screenSize === 'mobile' ? '12px' : '14px', color: '#666' }}>
                                            {item.type}
                                        </div>
                                        <div
                                            style={{
                                                fontWeight: 600,
                                                color: '#000',
                                                fontSize: screenSize === 'mobile' ? '14px' : '16px',
                                            }}
                                        >
                                            Enhanced Grain
                                        </div>
                                        <div style={{ fontSize: screenSize === 'mobile' ? '12px' : '14px', color: '#444' }}>
                                            {item.name} - 176mm FREE
                                        </div>
                                        <div
                                            onClick={() => handleRemoveItem(item)}
                                            style={{
                                                fontSize: screenSize === 'mobile' ? '12px' : '13px',
                                                color: '#a22',
                                                textDecoration: 'underline',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr
                            style={{
                                border: 'none',
                                borderTop: '1px solid #aaa',
                                margin: '20px 0',
                            }}
                        />
                        <button
                            style={{
                                background: '#C6905B',
                                padding: screenSize === 'mobile' ? '10px' : '10px 15px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                border: '2px solid white',
                                color: 'inherit',
                                width: screenSize === 'mobile' ? '100%' : 'auto',
                                textAlign: screenSize === 'mobile' ? 'center' : 'left',
                                fontSize: screenSize === 'mobile' ? '14px' : '16px',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.background = '#000')}
                            onMouseOut={(e) => (e.currentTarget.style.background = '#C6905B')}
                        >
                            Continue shopping
                        </button>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <div
                style={{
                    background: '#C6905B',
                    padding: screenSize === 'mobile' ? '10px' : '10px 15px',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    border: '2px solid white',
                    color: 'inherit',
                    width: screenSize === 'mobile' ? '100%' : 'auto',
                    textAlign: screenSize === 'mobile' ? 'center' : 'left',
                    fontSize: screenSize === 'mobile' ? '14px' : '16px',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#000')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#C6905B')}
            >
                Submit
            </div>
        </header>
    );
};

export default Header;