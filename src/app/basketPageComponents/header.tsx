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
        handleResize();
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
                justifyContent: 'space-between',
                flexDirection: 'column',
                padding: screenSize === 'mobile' ? '80px 20px' : screenSize === 'tablet' ? '50px 30px' : '50px 100px',
                position: 'relative',
                // minHeight: '100vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    color: 'black',
                    fontSize: screenSize === 'mobile' ? '14px' : '18px',
                }}
            >
                <a href="" style={{ color: 'black' }}>Home</a> / <a href="" style={{ color: 'black' }}>Order Samples</a>
            </div>

            {/* Main Content */}
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
                className="checkout-main"
            >
                {/* Form */}
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
                            fontSize: screenSize === 'mobile' ? '28px' : screenSize === 'tablet' ? '36px' : '52px',
                            fontWeight: 500,
                            textAlign: screenSize === 'tablet' || screenSize === 'mobile' ? 'center' : 'left',
                            marginBottom: screenSize === 'mobile' ? '20px' : '40px',
                        }}
                    >
                        Checkout
                    </div>
                    <div
                        style={{
                            // height: '100%',
                            width: screenSize === 'tablet' || screenSize === 'mobile' ? '100%' : '80%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Form Fields */}
                        <form
                            style={{
                                display: 'flex',
                                gap: screenSize === 'mobile' ? '10px' : '15px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                width: '100%',
                            }}
                            className="checkout-form"
                        >
                            {/* Each input row */}
                            {[["First Name*", "Last Name*"],
                            ["Email*", "Telephone Number*"],
                            ["Street Address*", "House Name / Number*"],
                            ["Address Line 2*", "Postal Code*"],
                            ["City / Town*", "Select Country*"],
                            ["Who am I", "Project start time"],
                            ["Project size", "Project budget"]
                            ].map((pair, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: screenSize === 'mobile' ? '10px' : '15px',
                                        flexDirection: screenSize === 'mobile' ? 'column' : 'row',
                                        width: '100%',
                                    }}
                                >
                                    {pair.map((placeholder, i) =>
                                        placeholder.includes("Select") || placeholder.includes("Who") || placeholder.includes("Project")
                                            ? <select key={i} style={{ background: '#fff', width: '100%', height: '50px', padding: '6px', color: '#000', borderRadius: 0 }}>
                                                <option value="">Select Country*</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="China">China</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="East Timor">East Timor</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran">Iran</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="North Korea">North Korea</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palestine">Palestine</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Russia">Russia</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="South Korea">South Korea</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Syria">Syria</option>
                                                <option value="Taiwan">Taiwan</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Yemen">Yemen</option>
                                            </select>
                                            : <input key={i} type="text" placeholder={placeholder} style={{ background: '#fff', width: '100%', height: '50px', padding: '6px', color: '#000', borderRadius: 0 }} />
                                    )}
                                </div>
                            ))}

                            {/* Checkboxes */}
                            <div style={{ display: 'flex', flexDirection: 'column', color: '#000', width: '100%', gap: '20px', marginTop: '10px' }}>
                                <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                    <input
                                        type="checkbox"
                                        style={{
                                            width: screenSize === 'mobile' ? 18 : 22,
                                            height: screenSize === 'mobile' ? 18 : 22,
                                            accentColor: '#C6905B',
                                            backgroundColor: '#ccc',
                                            borderRadius: 4,
                                            border: '1.5px solid #bbb',
                                            minWidth: screenSize === 'mobile' ? 18 : 22,
                                            minHeight: screenSize === 'mobile' ? 18 : 22,
                                            appearance: 'checkbox', // Ensures native checkbox
                                            WebkitAppearance: 'checkbox',
                                            MozAppearance: 'checkbox',
                                            marginTop: screenSize === 'mobile' ? '2px' : '0',
                                        }}
                                    />
                                    <span style={{ fontSize: screenSize === 'mobile' ? '14px' : '16px', lineHeight: 1.4 }}>
                                        Would you like a Millboard Lookbook?
                                    </span>
                                </label>
                                <label style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                                    <input
                                        type="checkbox"
                                        style={{
                                            width: screenSize === 'mobile' ? 18 : 22,
                                            height: screenSize === 'mobile' ? 18 : 22,
                                            accentColor: '#C6905B',
                                            backgroundColor: '#ccc',
                                            borderRadius: 4,
                                            border: '1.5px solid #bbb',
                                            minWidth: screenSize === 'mobile' ? 18 : 22,
                                            minHeight: screenSize === 'mobile' ? 18 : 22,
                                            appearance: 'checkbox',
                                            WebkitAppearance: 'checkbox',
                                            MozAppearance: 'checkbox',
                                            marginTop: screenSize === 'mobile' ? '2px' : '0',
                                        }}
                                    />
                                    <span style={{ fontSize: screenSize === 'mobile' ? '14px' : '16px', lineHeight: 1.4 }}>
                                        We process your data under legitimate interest to provide relevant content and communications in line with our privacy policy. If you prefer not to receive marketing communications, please tick the box.
                                    </span>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Basket */}
                <div
                    style={{
                        width: screenSize === 'tablet' || screenSize === 'mobile' ? '100%' : '50%',
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            background: '#f7e7d6',
                            width: '100%',
                            maxWidth: '400px',
                            padding: '20px',
                            color: '#000',
                        }}
                        className="checkout-summary"
                    >
                        <div style={{ fontSize: '20px', fontWeight: 500, marginBottom: '20px' }}>Basket</div>
                        {[...deckingItems, ...claddingItems].map(item => (
                            <div key={item.id} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', border: '1px solid #ccc' }} />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: '12px', color: '#666' }}>{item.type}</div>
                                    <div style={{ fontWeight: 600 }}>{item.name}</div>
                                    <div style={{ fontSize: '12px' }}>{item.name} - 176mm FREE</div>
                                    <span onClick={() => handleRemoveItem(item)} style={{ color: '#a22', cursor: 'pointer', textDecoration: 'underline', fontSize: '12px' }}>Remove</span>
                                </div>
                            </div>
                        ))}
                        <button style={{ background: '#C6905B', padding: '10px', borderRadius: '50px', width: '100%', color: '#fff', border: 'none' }}>Continue shopping</button>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div style={{ marginBottom: '35px', background: '#C6905B', padding: '10px 15px', borderRadius: '50px', color: '#fff', cursor: 'pointer', marginTop: '20px' }}>
                Submit
            </div>

            {/* Extra responsiveness for small & medium */}
            <style jsx>{`
              @media (max-width: 1024px) {
                .checkout-main {
                  flex-direction: column !important;
                  gap: 20px !important;
                }
                .checkout-summary {
                  max-width: 100% !important;
                }
              }
              @media (max-width: 600px) {
                .checkout-main {
                  gap: 15px !important;
                }
                .checkout-form input,
                .checkout-form select {
                  font-size: 14px !important;
                }
                .checkout-summary img {
                  width: 50px !important;
                  height: 50px !important;
                }
                button {
                  font-size: 14px !important;
                  padding: 10px !important;
                }
              }
            `}</style>

            <style>{`
              input[type="checkbox"] {
                width: 22px !important;
                height: 22px !important;
                min-width: 22px !important;
                min-height: 22px !important;
                accent-color: #C6905B;
                background-color: #ccc;
                border-radius: 4px;
                border: 1.5px solid #bbb;
                appearance: checkbox;
                -webkit-appearance: checkbox;
                -moz-appearance: checkbox;
              }

              /* Mobile-specific checkbox sizing */
              @media (max-width: 480px) {
                input[type="checkbox"] {
                  width: 18px !important;
                  height: 18px !important;
                  min-width: 18px !important;
                  min-height: 18px !important;
                }
              }

              /* For Chrome, Edge, Safari */
              input[type="checkbox"]:not(:checked) {
                background-color: #ccc;
              }

              /* For Firefox */
              input[type="checkbox"]:not(:checked) {
                filter: grayscale(1) brightness(1.2);
              }

              /* Focus outline for all inputs and selects */
              input[type="text"]:focus,
              select:focus {
                outline: 2px solid #C6905B !important;
                outline-offset: 2px !important;
              }

              /* For browsers that support focus-visible */
              input[type="text"]:focus-visible,
              select:focus-visible {
                outline: 2px solid #C6905B !important;
                outline-offset: 2px !important;
              }
            `}</style>

            {/* SVG Wave */}
            <svg
                width="100%"
                height="68"
                viewBox="0 0 1440 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    bottom: '-2px',
                    zIndex: '121',
                }}
            >
                <path
                    fill="#ffffffff"
                    fillOpacity="1"
                    d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
                />
            </svg>


        </header>
    );
};

export default Header;
