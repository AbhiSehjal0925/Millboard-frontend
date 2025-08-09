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
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            padding: 20
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 589,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'column'
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
                                <img
                                    src="/imagesForProductPage/headerImg1.jpg"
                                    alt={`Product ${i + 1}`}
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
                    maxWidth: 653,
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
                            Moulded from timbers that are selected from oak boards for a textured look and feel, the Enhanced Grain collection's contemporary design accurately recreates the subtle nuances of natural wood. Each of the shades are slip-resistant and showcase their organic patinas beautifully.
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
                        maxWidth: 543,
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
        </header>
    );
};

export default Header;
