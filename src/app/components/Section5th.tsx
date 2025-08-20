import React, { useRef } from "react";
import TestimonialsCard from "../subComponents/TestimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Define the section data structure
interface Section5Data {
  heading: string;
  colors: {
    text: string;
    background: string;
    border: string;
    shadow: string;
    button: string;
  };
  layout: {
    maxWidth: string;
    gap: string;
    padding: string;
  };
  navigation: {
    buttonSize: string;
    leftPosition: string;
    rightPosition: string;
    arrowSize: string;
  };
  card: {
    maxWidth: string;
    minWidth: string;
    borderRadius: string;
    padding: string;
    borderWidth: string;
  };
  swiper: {
    spaceBetween: number;
    breakpoints: {
      mobile: { slidesPerView: number };
      tablet: { slidesPerView: number };
      desktop: { slidesPerView: number };
    };
  };
  testimonials: {
    count: number;
  };
}

// Default section data (fallback)
const defaultSection5Data: Section5Data = {
  heading: "Our trusted supporters",
  colors: {
    text: "#1E1E1E",
    background: "#fff",
    border: "#0000001a",
    shadow: "px 4px 10px 0px #00000033",
    button: "#333"
  },
  layout: {
    maxWidth: "1200px",
    gap: "32px",
    padding: "40px 16px"
  },
  navigation: {
    buttonSize: "50px",
    leftPosition: "-150px",
    rightPosition: "-150px",
    arrowSize: "80px"
  },
  card: {
    maxWidth: "400px",
    minWidth: "260px",
    borderRadius: "26px",
    padding: "20px",
    borderWidth: "2px"
  },
  swiper: {
    spaceBetween: 24,
    breakpoints: {
      mobile: { slidesPerView: 1 },
      tablet: { slidesPerView: 2 },
      desktop: { slidesPerView: 3 }
    }
  },
  testimonials: {
    count: 6
  }
};

interface Section5Props {
  sectionData?: Section5Data;
}

const Section5th: React.FC<Section5Props> = ({ sectionData = defaultSection5Data }) => {
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

  const styles = {
    section: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: sectionData.layout.padding,
      position: "relative" as const,
    },
    container: {
      width: "100%",
      maxWidth: sectionData.layout.maxWidth,
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "center",
      alignItems: "center",
      gap: sectionData.layout.gap,
      position: "relative" as const,
    },
    heading: {
      fontFamily: "Mansfield, sans-serif",
      fontWeight: 500,
      fontSize: "1.8rem",
      color: sectionData.colors.text,
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
      width: sectionData.navigation.buttonSize,
      height: sectionData.navigation.buttonSize,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "20px",
      color: sectionData.colors.button,
    },
    leftButton: {
      left: sectionData.navigation.leftPosition,
      transform: "rotate(-90deg)",
    },
    rightButton: {
      right: sectionData.navigation.rightPosition,
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
      maxWidth: sectionData.card.maxWidth,
      minWidth: sectionData.card.minWidth,
      background: sectionData.colors.background,
      borderRadius: sectionData.card.borderRadius,
      boxShadow: sectionData.colors.shadow,
      border: `${sectionData.card.borderWidth} solid ${sectionData.colors.border}`,
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center",
      justifyContent: "center",
      padding: sectionData.card.padding,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Heading */}
        <h2 style={styles.heading}>{sectionData.heading}</h2>

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
              style={{ width: sectionData.navigation.arrowSize, height: sectionData.navigation.arrowSize }}
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
            spaceBetween={sectionData.swiper.spaceBetween}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: sectionData.swiper.breakpoints.mobile.slidesPerView },
              900: { slidesPerView: sectionData.swiper.breakpoints.tablet.slidesPerView },
              1200: { slidesPerView: sectionData.swiper.breakpoints.desktop.slidesPerView },
            }}
            style={{ width: "100%" }}
          >
            {Array.from({ length: sectionData.testimonials.count }, (_, index) => (
              <SwiperSlide key={index}>
                <div style={styles.card}>
                  <TestimonialsCard />
                </div>
              </SwiperSlide>
            ))}
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
              style={{ width: sectionData.navigation.arrowSize, height: sectionData.navigation.arrowSize }}
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