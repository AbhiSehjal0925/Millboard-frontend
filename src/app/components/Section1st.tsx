'use client';

import React from 'react';
import Image from 'next/image';

const Section1st = () => {
    return (
        <section className="section">
            <div className="container">
                {[
                    {
                        img: '/images/section1stImg2.png',
                        title: 'Crafted to enhance any outdoor space',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                    {
                        img: '/images/section1stImg1.png',
                        title: 'Designed to go further and last longer',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    },
                ].map((card, i) => (
                    <div key={i} className="card">
                        <div className="imageContainer">
                            <Image
                                src={card.img}
                                alt={card.title}
                                width={900}
                                height={900}
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                priority={i === 0}
                            />
                        </div>
                        <div className="textBox">
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                            <button className="btn">
                                Explore the collection
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .section {
          background: linear-gradient(to bottom, #ffffff, white);
          padding: 2rem 1rem;
          position: relative;
          z-index: 50;
        }

        .container {
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }

        .imageContainer {
          margin-bottom: 1rem;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .textBox {
          text-align: center;
          width: 95%;
          box-shadow: 0px 5px 5px 0px #00000040;
          border-radius: 1.5rem;
          padding: 1.5rem;
          background-color: white;
          position: relative;
          bottom: 70px;
        }

        .textBox h3 {
          font-size: 1.125rem;
          font-weight: 500;
          margin-bottom: 0.6rem;
          color: #000;
          line-height: 1.4;
        }

        .textBox p {
          color: #000;
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .btn {
          display: inline-block;
          background-color: #d3a069;
          color: white;
          font-weight: 500;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          text-decoration: none;
          font-size: 0.95rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: background-color 0.3s ease;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #d9c6a0;
        }

        /* Tablet & up */
        @media (min-width: 768px) {
          .section {
            padding: 80px 70px;
          }
          .container {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .textBox {
            padding: 2.5rem;
          }
          .textBox h3 {
            font-size: 34px;
            line-height: 46px;
          }
          .textBox p {
            font-size: 17px;
          }
          .btn {
            font-size: 18px;
          }
        }
      `}</style>
        </section>
    );
};

export default Section1st;
