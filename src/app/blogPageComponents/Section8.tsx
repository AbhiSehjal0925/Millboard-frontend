import React from 'react';

const Section8 = () => {

    const containerStyle: React.CSSProperties = {
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "clamp(300px, 50vw, 600px)",
    };

    const imageStyle: React.CSSProperties = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const overlayStyle: React.CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const playButtonStyle: React.CSSProperties = {
        width: "clamp(50px, 8vw, 80px)",
        height: "clamp(50px, 8vw, 80px)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
    };

    const triangleStyle: React.CSSProperties = {
        width: 0,
        height: 0,
        borderLeft: "clamp(10px, 2vw, 18px) solid #000",
        borderTop: "clamp(7px, 1.4vw, 12px) solid transparent",
        borderBottom: "clamp(7px, 1.4vw, 12px) solid transparent",
        marginLeft: "clamp(3px, 0.5vw, 6px)",
    };

    const handlePlayClick = () => {
        console.log("Play video");
        // You can later replace this with video logic
    };

    return (
        <section style={containerStyle}>
            <img
                src="/imagesForBlogPage/Rectangle 6740.png"
                alt="Video Thumbnail"
                style={imageStyle}
            />
            <div style={overlayStyle} onClick={handlePlayClick}>
                <div style={playButtonStyle}>
                    <div style={triangleStyle}></div>
                </div>
            </div>
        </section>
    );
}

export default Section8;
