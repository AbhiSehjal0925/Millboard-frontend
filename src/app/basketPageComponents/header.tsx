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
                padding: screenSize === 'mobile' ? '80px 20px' : screenSize === 'tablet' ? '50px 30px' : '50px 100px 200px 100px',
                position: 'relative',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: screenSize === 'mobile' ? '22px' : '20px',
                    left: screenSize === 'mobile' ? '22px' :  '87px',
                    color: 'black',
                    fontSize: screenSize === 'mobile' ? '14px' : '18px',
                    marginTop: screenSize === 'mobile' ? '1rem' : '0',

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
                        <button style={{ background: '#C6905B', padding: '10px', borderRadius: '50px', width: '100%', color: '#fff', border: 'none' }} className="coolBeans">Continue shopping</button>
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <div style={{ marginBottom: '35px', background: '#C6905B', padding: '10px 15px', borderRadius: '50px', color: '#fff', cursor: 'pointer', marginTop: '20px' }} className="coolBeans">
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


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="17.072 0 1502.336 170.7168458781362" width="1502.336" height="170.7168458781362"
                style={{
                    width: '100%', height: 'auto', position: 'absolute',
                    bottom: '0',
                    right: '0',
                    zIndex: '1000',
                    maxHeight: '500px'
                }}
            >
                <g filter="url(#filter0_d_145_3)">
                    <path fill="white" d="M4 139.838C4 82.5129 71.1564 51.5006 114.795 88.6739V88.6739C139.68 109.871 176.206 110.091 201.344 89.1947L291.808 13.9942C321.426 -10.6272 366.458 0.944486 380.537 36.7949V36.7949C396.213 76.7106 448.891 85.3083 476.444 52.4484L486.776 40.1276C508.591 14.1114 546.574 8.86635 574.623 27.9967L600.497 45.6429C630.411 66.0451 669.585 66.7326 700.197 47.3926L725.663 31.3033C757.126 11.4258 798.864 22.8417 815.831 55.9649V55.9649C834.153 91.7365 880.738 101.604 911.99 76.3331L953.798 42.5272C989.455 13.6952 1039.52 10.7943 1078.27 35.3155L1161.6 88.052C1194.49 108.862 1237.94 99.8992 1259.91 67.7761V67.7761C1285.81 29.8968 1340 25.4345 1371.75 58.5661L1401.15 89.2478C1419.69 108.585 1450.86 107.714 1468.28 87.3724V87.3724C1495.65 55.4177 1548 74.7728 1548 116.846V174.743V205C1548 326.503 1449.5 425 1328 425H140.064C64.9179 425 4 364.082 4 288.936V139.838Z" />
                </g>
                <defs>
                    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="432.081" width="1552" y="0.918945" x="0" id="filter0_d_145_3">
                        <feFlood result="BackgroundImageFix" floodOpacity="0" />
                        <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite operator="out" in2="hardAlpha" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" type="matrix" />
                        <feBlend result="effect1_dropShadow_145_3" in2="BackgroundImageFix" mode="normal" />
                        <feBlend result="shape" in2="effect1_dropShadow_145_3" in="SourceGraphic" mode="normal" />
                    </filter>
                </defs>
            </svg>


        </header>
    );
};

export default Header;
