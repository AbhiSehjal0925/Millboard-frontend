"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper as SwiperClass } from 'swiper'; // Add this import

const Header = () => {
    const colorOptions = [
        '#573f20', '#b89e7b', '#223037', '#2b2a29', '#9b4f1c', '#5e544c',
        '#e1bb74', '#7b2c1b', '#c1ae8f', '#d3cabb', '#9a865a'
    ];

    const dummyImages = [
        '/imagesForProductPage/product_1.png',
        '/imagesForProductPage/product_2.jpg',
        '/imagesForProductPage/product_3.jpg',
        '/imagesForProductPage/product_4.jpg',
        '/imagesForProductPage/product_5.jpg',
    ];

    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(null);
    const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
    const [selectedWidth, setSelectedWidth] = React.useState<string | null>(null);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    const updateScrollProgress = () => {
        if (thumbsSwiper) {
            const progress = Math.abs(thumbsSwiper.translate) / (thumbsSwiper.maxTranslate() || 1);
            setScrollProgress(Math.min(progress, 1));
        }
    };

    React.useEffect(() => {
        if (thumbsSwiper) {
            thumbsSwiper.on('scroll', updateScrollProgress);
            thumbsSwiper.on('slideChange', updateScrollProgress);
            return () => {
                thumbsSwiper.off('scroll', updateScrollProgress);
                thumbsSwiper.off('slideChange', updateScrollProgress);
            };
        }
    }, [thumbsSwiper]);

    return (
        <header style={{
            background: '#efcfac',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            // height: '86vh',
            position: 'relative',
            gap: 20,
            paddingBottom: '80px',
            paddingTop: '30px',
        }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // width: '100%',
                    minWidth: 0,
                    flexWrap: 'wrap',
                    boxSizing: 'border-box',
                    margin: '20px'
                }}
            >
                <div
                    style={{
                        maxWidth: 589,
                        width: '100%',
                        flexDirection: 'column',
                        minWidth: 0,
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Main Image Carousel */}
                    <Swiper
                        modules={[Navigation, Thumbs]}
                        navigation
                        thumbs={{ swiper: thumbsSwiper }}
                        style={{
                            width: '100%',
                            maxWidth: '100%',
                            aspectRatio: '589 / 528',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            minHeight: '300px',
                        }}
                    >
                        {dummyImages.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image
                                    src={img}
                                    alt={`Main Image ${i + 1}`}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnail Carousel */}
                    <Swiper
                        modules={[Thumbs]}
                        onSwiper={setThumbsSwiper}
                        slidesPerView="auto"
                        spaceBetween={15}
                        watchSlidesProgress
                        freeMode={true}
                        grabCursor={true}
                        style={{
                            marginTop: 15,
                            padding: '5px 0',
                            width: '100%',
                            maxWidth: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        {dummyImages.map((img, i) => (
                            <SwiperSlide
                                key={i}
                                style={{
                                    width: 'clamp(80px, 20vw, 120px)',
                                    height: 'clamp(80px, 20vw, 120px)',
                                    minWidth: '100px',
                                    minHeight: '100px',
                                    maxWidth: '120px',
                                    maxHeight: '120px',
                                    borderRadius: '12px',
                                    background: '#fff',
                                    overflow: 'hidden',
                                    border: '2px solid transparent',
                                    transition: 'border-color 0.3s ease',
                                    flexShrink: 0,
                                }}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${i + 1}`}
                                    width={120}
                                    height={120}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Scrollbar */}
                    {/* <div style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '3px',
                        marginTop: '8px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: `${scrollProgress * 100}%`,
                            height: '100%',
                            backgroundColor: '#d3a069',
                            borderRadius: '3px',
                            transition: 'background-color 0.3s ease',
                            cursor: 'pointer'
                        }} />
                    </div> */}
                </div>
            </div>

            {/* The rest of your RIGHT SIDE UI — unchanged */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '830px',
                    // height: '600px',
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
                        gap: 10,
                        paddingRight: '40px'
                    }}>
                        <div style={{
                            fontFamily: 'Mansfield, sans-serif',
                            fontWeight: 400,
                            fontSize: 24,
                            lineHeight: '36px'
                        }}>Decking</div>
                        <div style={{
                            fontFamily: 'Mansfield, sans-serif',
                            fontWeight: 600,
                            fontSize: 32,
                            lineHeight: '36px'
                        }}>Enhanced Grain</div>
                        <div style={{
                            fontFamily: 'Mansfield, sans-serif',
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: '20px'
                        }}>
                            Moulded from timbers that are selected from oak boards for a textured look and feel, the Enhanced Grain collection&apos;s contemporary design accurately recreates the subtle nuances of natural wood. Each of the shades are slip-resistant and showcase their organic patinas beautifully.
                        </div>
                        <div style={{
                            fontFamily: 'Mansfield, sans-serif',
                            fontWeight: 400,
                            fontSize: 14,
                            lineHeight: '18px'
                        }}>This product is part of our composite decking collections.</div>
                    </div>

                    <div style={{
                        width: '100%',
                        maxWidth: window.innerWidth <= 768 ? '100%' : '90%',
                        borderRadius: 15.6,
                        boxShadow: '0px 6.42px 26.6px 0px #64646F33',
                        padding: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 10,
                        marginTop: '15px'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div style={{
                                fontFamily: 'Mansfield, sans-serif',
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
                                    <span
                                        key={index}
                                        onClick={() => setSelectedColor(color)}
                                        style={{
                                            height: 25,
                                            width: 25,
                                            borderRadius: '50%',
                                            backgroundColor: color,
                                            margin: 5,
                                            cursor: 'pointer',
                                            border: selectedColor === color ? '2px solid #000' : '2px solid transparent',
                                            boxShadow: selectedColor === color ? '0 0 8px #d3a069' : undefined
                                        }}
                                    ></span>
                                ))}
                            </div>
                            {selectedColor ? (
                                <div style={{
                                    marginTop: 10,
                                    fontFamily: 'Mansfield, sans-serif',
                                    fontSize: 16,
                                    color: '#333333be',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10
                                }}>
                                    Selected Color: <span style={{
                                        display: 'inline-block',
                                        width: 18,
                                        height: 18,
                                        borderRadius: '50%',
                                        backgroundColor: selectedColor,
                                        verticalAlign: 'middle',
                                        marginRight: 6,
                                    }}></span>
                                    {selectedColor}
                                    <button
                                        onClick={() => setSelectedColor(null)}
                                        style={{
                                            marginLeft: 8,
                                            border: 'none',
                                            cursor: 'pointer',
                                            fontSize: 16
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <div style={{
                                    marginTop: 10,
                                    fontFamily: 'Mansfield, sans-serif',
                                    fontSize: 16,
                                    color: '#333333be',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10
                                }}>
                                    Select the color
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
                            <div style={{
                                fontFamily: 'Mansfield, sans-serif',
                                fontWeight: 300,
                                fontSize: 18,
                                lineHeight: '20px',
                                color: '#333333be'
                            }}>
                                Board Width
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                <button
                                    style={{
                                        borderRadius: 300,
                                        background: selectedWidth === '180mm' ? '#D3A069' : '#4c4b4e',
                                        color: '#fff',
                                        padding: '8px 15px',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease'
                                    }}
                                    onClick={() => setSelectedWidth('180mm')}
                                >
                                    180mm
                                </button>
                                <button
                                    style={{
                                        borderRadius: 300,
                                        background: selectedWidth === '133mm' ? '#D3A069' : '#4c4b4e',
                                        color: '#fff',
                                        padding: '8px 15px',
                                        cursor: 'pointer',
                                        transition: 'background 0.3s ease'
                                    }}
                                    onClick={() => setSelectedWidth('133mm')}
                                >
                                    133mm
                                </button>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                                <button
                                    style={{
                                        borderRadius: 300,
                                        background: '#D3A069',
                                        color: '#fff',
                                        padding: '8px 15px',
                                        border: 'none',
                                        cursor: 'pointer'
                                    }}
                                    className="coolBeans"
                                >Add Free Sample</button>
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
                    bottom: '0px',
                    zIndex: '121',
                }}
            >
                <path
                    fill="#ffffffff"
                    fillOpacity="1"
                    d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
                />
            </svg>

            <svg
                width="100%"
                height="68"
                viewBox="0 0 1440 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    position: 'absolute',
                    bottom: '0px',
                    filter: 'drop-shadow(0 -18px 10px #d3a069)',
                }}
            >
                <path
                    fill="#d3a069"
                    fillOpacity="1"
                    d="M-335 146.773C-335 68.8162 -253.816 17.4202 -183.352 50.7673C-147.371 67.795 -104.89 63.2748 -73.2979 39.057L-59.0916 28.1667C-19.5786 -2.12337 33.3602 -8.31231 78.7944 12.0468L149.927 43.9211C197.973 65.4505 253.697 60.8743 297.587 31.7952C346.374 -0.528112 409.288 -2.32293 459.838 27.1665L466.836 31.2493C517.125 60.5867 579.08 61.5499 630.257 33.7898L652.169 21.9038C701.062 -4.6178 760.802 -2.61169 808.022 26.7847C858.474 58.1924 922.938 57.8458 972.797 25.5049C1017.36 -3.40269 1073.72 -7.16752 1121.74 15.5555L1160.76 34.0254C1220.03 62.0739 1288.95 61.0634 1347.37 31.2895L1366.9 21.3389C1418.69 -5.05928 1480.34 -3.39306 1530.64 25.7644L1582.05 55.5709C1606.32 69.6382 1636.45 68.8679 1659.98 53.6044C1709.5 21.4833 1775 56.9745 1775 116C1775 220.934 1689.93 306 1585 306H-208.235C-278.245 306 -335 249.245 -335 179.235V146.773Z"
                />
            </svg>

            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #fff !important;
                    fill: #fff !important;
                }
                .product-header-btn {
                    transition: transform 0.15s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1);
                }
                .product-header-btn:active {
                    transform: scale(0.95);
                    box-shadow: 0 2px 12px #d3a06955;
                }
            `}</style>
        </header>
    );
};

export default Header;
