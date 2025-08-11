import Image from 'next/image';
import React from 'react';

const Header = () => {
    const colorOptions = [
        '#573f20', '#b89e7b', '#223037', '#2b2a29', '#9b4f1c', '#5e544c',
        '#e1bb74', '#7b2c1b', '#c1ae8f', '#d3cabb', '#9a865a'
    ];

    return (
        <header style={{
            background: '#efcfac',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            height: '86vh',
            position: 'relative',
            gap: 20,
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // padding: 20
            }}>
                <div style={{
                    // width: '100%',
                    maxWidth: 589,
                    // display: 'flex',
                    alignItems: 'center',
                    // justifyContent: 'space-around',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: '589 / 528',
                        borderRadius: 12.26,
                        borderWidth: 3.77,
                        background: `url('/imagesForProductPage/headerImg1.jpg') center / cover no-repeat`
                    }} />
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        gap: 10
                    }}>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} style={{
                                width: 100,
                                height: 100,
                                borderRadius: 13.2,
                                background: '#fff',
                                overflow: 'hidden',
                                margin: '5px 0'
                            }}>
                                <Image
                                    src="/imagesForProductPage/headerImg1.jpg"
                                    alt={`Product ${i + 1}`}
                                    width={400}
                                    height={300}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '830px',
                    height: '600px',
                    background: `url('/png/productPageHeaderPng.png') center / cover no-repeat`,
                    margin: 10,
                    padding: 20,
                    color: '#000',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-around'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 10
                    }}>
                        <div style={{
                            fontFamily: 'Mansfield',
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: '36px'
                        }}>Decking</div>
                        <div style={{
                            fontFamily: 'Mansfield',
                            fontWeight: 600,
                            fontSize: 32,
                            lineHeight: '36px'
                        }}>Enhanced Grain</div>
                        <div style={{
                            fontFamily: 'Shega',
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: '20px'
                        }}>
                            Moulded from timbers that are selected from oak boards for a textured look and feel, the Enhanced Grain collection&apos;s contemporary design accurately recreates the subtle nuances of natural wood. Each of the shades are slip-resistant and showcase their organic patinas beautifully.
                        </div>
                        <div style={{
                            fontFamily: 'Shega',
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: '18px'
                        }}>This product is part of our composite decking collections.</div>
                    </div>

                    <div style={{
                        width: '100%',
                        maxWidth: '90%',
                        borderRadius: 15.6,
                        boxShadow: '0px 6.42px 26.6px 0px #64646F33',
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div style={{
                                fontFamily: 'Poppins',
                                fontWeight: 300,
                                fontSize: 18,
                                lineHeight: '20px',
                                color: '#333333be'
                            }}>
                                Colour - <b>Antique Oak</b>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                padding: 10,
                                borderRadius: 30,
                                boxShadow: '0px 6.42px 26.6px 0px #64646F33'
                            }}>
                                {colorOptions.map((color, index) => (
                                    <span key={index} style={{
                                        height: 25,
                                        width: 25,
                                        borderRadius: '50%',
                                        backgroundColor: color,
                                        margin: 5,
                                        cursor: 'pointer'
                                    }}></span>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div style={{
                                fontFamily: 'Poppins',
                                fontWeight: 300,
                                fontSize: 18,
                                lineHeight: '20px',
                                color: '#333333be'
                            }}>
                                Board Width
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                <button style={{
                                    borderRadius: 300,
                                    background: '#D3A069',
                                    color: '#fff',
                                    padding: '8px 15px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>180mm</button>
                                <button style={{
                                    borderRadius: 300,
                                    background: '#4C4B4E',
                                    color: '#fff',
                                    padding: '8px 15px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>133mm</button>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                <button style={{
                                    borderRadius: 300,
                                    background: '#D3A069',
                                    color: '#fff',
                                    padding: '8px 15px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>Add Free Sample</button>
                                <button style={{
                                    borderRadius: 300,
                                    background: '#4C4B4E',
                                    color: '#fff',
                                    padding: '8px 15px',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}>Decking Configurator</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SVG background decoration */}
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
