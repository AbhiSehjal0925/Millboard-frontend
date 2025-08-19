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
    fontSize: "50px",
    color: "#333",
  },
  leftButton: {
    left: "-275px",
  },
  rightButton: {
    right: "-275px",
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
    maxWidth: "350px",
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
            ←
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
            →
          </button>
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-prev {
          left: 10px !important;
        }
        
        .swiper-button-next {
          right: 10px !important;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: #000000ff !important;
          fill: #000000ff !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 1000 !important;
          background: rgba(255, 255, 255, 0.9) !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
        }
      `}</style>
    </section>
  );
};

export default Section5th;
