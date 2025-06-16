import React, { useEffect, useRef, useState } from "react";
import "./Carousel.scss";

interface CarouselProps {
    className: string;
    children: React.ReactNode;
    dates: string[];
}

export default function Carousel({ className, children, dates }: CarouselProps) {
    const carouselRef = useRef<HTMLUListElement>(null);
    const cards = React.Children.toArray(children);
    const total = cards.length;
    const [index, setIndex] = useState(0);

    const scrollToIndex = (i: number) => {
        const track = carouselRef.current;

        if (track) {
            const card = track.querySelector('.carousel__card') as HTMLElement;
            const wrapper = track.parentElement as HTMLElement;

            if (card && wrapper) {
                const cardWidth = card.offsetWidth + 16;
                const wrapperWidth = wrapper.offsetWidth;
                const offset = (cardWidth * i) - (wrapperWidth / 2) + (cardWidth / 2);

                track.style.transform = `translateX(-${Math.max(offset, 0)}px)`;
            }
        }
    };

    useEffect(() => {
        scrollToIndex(index);
    }, [index]);

    const handleKey = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
            setIndex((prev) => (prev - 1 + total) % total);
        } else if (event.key === "ArrowRight") {
            setIndex((prev) => (prev + 1) % total);
        }
    };


    return (
        <div
            className={`carousel ${className}`}
            tabIndex={0}
            onKeyDown={handleKey}
            aria-label="Event carousel"
            role="region"
        >

            <div className="carousel__track-wrapper">
                <ul className="carousel__track" ref={carouselRef}>
                    {cards.map((child, i) => (
                        <li key={i} className="carousel__card">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="carousel__controls">
                                    <button
                        className="carousel__arrow carousel__arrow--left"
                        onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
                        aria-label="Previous Date"
                    >
                        <img
                            className="carousel__arrow-icon"
                            src="/assets/icons/arrow-left.svg" 
                            alt="Left arrow" 
                        />
                    </button>


                <div className="carousel__dots">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            className={`carousel__dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            aria-current={i === index}
                        />
                    ))}                    
                </div>

                                    <button
                        className="carousel__arrow carousel__arrow--right"
                        onClick={() => setIndex((prev) => (prev + 1) % total)}
                        aria-label="Next date"
                    >
                        <img
                            className="carousel__arrow-icon"
                            src="/assets/icons/arrow-right.svg" 
                            alt="Right arrow"
                        />
                    </button>
            </div>
        </div>
    );
}
