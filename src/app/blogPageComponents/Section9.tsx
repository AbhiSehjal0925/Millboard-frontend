import React from 'react';

const Section9 = () => {

    const articles = [
        {
            image: "/imagesForBlogPage/Rectangle 6741.png",
            text: "MDE176H_Enhanced Grain_Ashwood_Golden Oak Mix_Lifestyle Hero.png. Millboard Expands Global Presence with Acquisition of Leading French Distributor",
        },
        {
            image: "/imagesForBlogPage/Rectangle 6741 (1).png",
            text: "MDE176H_Enhanced Grain_Ashwood_Lifestyle Daytime Hero.png. Millboard Enhanced Grain now in Ebony Grey and Ashwood",
        },
    ];

    const containerStyle: React.CSSProperties = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'space-evenly',
        gap: "40px",
        padding: "40px 20px",
        backgroundColor: "#fff",
        color: 'black'
    };

    const headingStyle: React.CSSProperties = {
        width: "100%",
        textAlign: "center",
        fontSize: "clamp(24px, 4vw, 32px)",
        fontWeight: 600,
        marginBottom: "32px",
    };

    const cardStyle: React.CSSProperties = {
        position: "relative",
        // width: "clamp(280px, 40vw, 400px)",
        // height: "clamp(300px, 45vw, 450px)",
        // overflow: "hidden",
        // borderRadius: "16px",
        // clipPath: "path('M0,40 Q100,0 200,40 Q300,80 400,40 Q400,220 400,300 Q300,340 200,300 Q100,260 0,300 Z')",
        // WebkitClipPath: "path('M0,40 Q100,0 200,40 Q300,80 400,40 Q400,220 400,300 Q300,340 200,300 Q100,260 0,300 Z')",
        // boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        // backgroundColor: "#eee",
    };

    const imageStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const textBoxStyle: React.CSSProperties = {
        position: 'absolute',
        bottom: '160px',
        left: '70%',
        transform: 'translateX(-50%)',
        width: '50%',
        backgroundColor: 'rgb(255, 255, 255)',
        padding: '18px',
        fontSize: 'clamp(12px, 2vw, 14px)',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px',
        borderRadius: '15px',
    };

    return (
        <section style={containerStyle}>
            <h2 style={headingStyle}>Related Articles</h2>
            {articles.map((article, index) => (
                <div key={index} style={cardStyle}>
                    <img src={article.image} alt={`Article ${index + 1}`} style={imageStyle} />
                    <div style={textBoxStyle}>{article.text}</div>
                </div>
            ))}
        </section>
    );
}

export default Section9;
