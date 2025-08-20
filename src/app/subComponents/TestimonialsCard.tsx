import Image from 'next/image';
import React from 'react';

// Define the testimonial data structure
interface TestimonialData {
    id: number;
    name: string;
    image: string;
    imageAlt: string;
    quote: string;
    rating: number; // Rating out of 5
    location?: string; // Optional location
    date?: string; // Optional date
}

// Sample testimonials data
const testimonialsData: TestimonialData[] = [
    {
        id: 1,
        name: "John Doe",
        image: "/images/section4thimg1.png",
        imageAlt: "John Doe testimonial",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        rating: 5,
        location: "London, UK",
        date: "2024"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        image: "/images/section4thimg1.png",
        imageAlt: "Sarah Johnson testimonial",
        quote: "Exceptional quality and outstanding service. The decking material exceeded our expectations and transformed our outdoor space completely.",
        rating: 5,
        location: "Manchester, UK",
        date: "2024"
    },
    {
        id: 3,
        name: "Michael Chen",
        image: "/images/section4thimg1.png",
        imageAlt: "Michael Chen testimonial",
        quote: "Professional installation team and premium materials. Our new decking area has become the highlight of our garden.",
        rating: 4,
        location: "Birmingham, UK",
        date: "2024"
    }
];

// Star rating component
const StarRating: React.FC<{ rating: number; maxRating?: number }> = ({ rating, maxRating = 5 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span key={i} style={{ color: i <= rating ? '#f5c518' : '#e5e7eb' }}>
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <div style={{ fontSize: '16px', display: 'flex', gap: '2px' }}>
            {renderStars()}
        </div>
    );
};

// Main TestimonialsCard component
const TestimonialsCard: React.FC<{ testimonial?: TestimonialData }> = ({ testimonial }) => {
    // Use provided testimonial or default to first one
    const data = testimonial || testimonialsData[0];

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '368px',
                borderRadius: '26px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                gap: '1rem',
                position: 'relative',
                backgroundColor: '#ffffff',
            }}
        >
            {/* Quote icon */}
            <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                    <path fill="#D3A069" d="M3.516 7a3.5 3.5 0 1 1-3.5 3.5L0 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.548-.043zm9 0a3.5 3.5 0 1 1-3.5 3.5L9 10a7 7 0 0 1 7-7v2a4.97 4.97 0 0 0-3.536 1.464a5 5 0 0 0-.497.578q.269-.043.549-.043z" />
                </svg>
            </div>

            {/* Profile image */}
            <div style={{
                width: '80px',
                height: '80px',
                marginTop: '10px',
            }}>
                <Image
                    src={data.image}
                    alt={data.imageAlt}
                    width={80}
                    height={80}
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #D3A069',
                    }}
                />
            </div>

            {/* Content */}
            <div style={{
                textAlign: 'center',
                padding: '0 1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
            }}>
                {/* Name */}
                <h3 style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    margin: 0,
                    color: '#1E1E1E',
                }}>
                    {data.name}
                </h3>

                {/* Optional location and date */}
                {(data.location || data.date) && (
                    <div style={{
                        fontSize: '12px',
                        color: '#666',
                        margin: 0,
                        fontStyle: 'italic',
                    }}>
                        {data.location}{data.location && data.date && ' • '}{data.date}
                    </div>
                )}

                {/* Quote */}
                <p style={{
                    fontSize: '14px',
                    color: '#555',
                    margin: 0,
                    lineHeight: '1.5',
                }}>
                    &ldquo;{data.quote}&rdquo;
                </p>

                {/* Star rating */}
                <StarRating rating={data.rating} />
            </div>
        </div>
    );
};

export default TestimonialsCard;