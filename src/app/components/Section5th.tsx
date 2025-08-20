import React, { useRef } from "react";
import TestimonialsCard from "../subComponents/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 16px",
    position: "relative" as const,
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "32px",
    position: "relative" as const,
  },
  heading: {
    fontFamily: "Mansfield, sans-serif",
    fontWeight: 500,
    fontSize: "1.8rem",
    color: "#1E1E1E",
    textTransform: "capitalize" as const,
    textAlign: "center" as const,
    marginTop: "20px",
    lineHeight: 1.2,
  },
  cardsWrapper: {
    position: "relative" as const,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    cursor: 'grab',
  },
  customNavButton: {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "20px",
    color: "#333",
  },
  leftButton: {
    left: "-265px",
    transform: "rotate(-90deg)",
    
  },
  rightButton: {
    right: "-265px",
    transform: "rotate(90deg)",
  },
  arrowBtn: {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    padding: "8px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  cardsRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    width: "100%",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    minWidth: "260px",
    background: "#fff",
    borderRadius: "26px",
    boxShadow: "px 4px 10px 0px #00000033",
    border: "2px solid #0000001a",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
};

const Section5th: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Heading */}
        <h2 style={styles.heading}>Our trusted supporters</h2>

        {/* Cards Wrapper */}
        <div style={styles.cardsWrapper}>
          {/* Custom Left Navigation Button */}
          <button
            style={{ ...styles.customNavButton, ...styles.leftButton }}
            onClick={goPrev}
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ width: '80px', height: '80px' }}
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={false}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            style={{ width: "100%" }}
          >
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div style={styles.card}>
                <TestimonialsCard />
              </div>
            </SwiperSlide>
            {/* Add more <SwiperSlide> as needed */}
          </Swiper>

          {/* Custom Right Navigation Button */}
          <button
            style={{ ...styles.customNavButton, ...styles.rightButton }}
            onClick={goNext}
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ width: '80px', height: '80px' }}
            >
              <path
                fillRule="evenodd"
                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }
      `}</style>
    </section>
  );
};

export default Section5th;