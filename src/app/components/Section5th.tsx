import React from "react";
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
    fontFamily: "Mansfield",
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
  arrowBtn: {
    position: "absolute" as const,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    padding: "8px",
    background: "#fff",
    borderRadius: "50%",
    boxShadow: "0 2px 8px #0002",
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
    margin: '10px 0',
  },
};

const Section5th: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Heading */}
        <h2 style={styles.heading}>Our trusted supporters</h2>

        {/* Cards Wrapper */}
        <div style={styles.cardsWrapper}>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            style={{ width: "100%", padding: "0 40px" }}
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
        </div>
      </div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #f5c518 !important;
          fill: #f5c518 !important;
        }
      `}</style>
    </section>
  );
};

export default Section5th;
