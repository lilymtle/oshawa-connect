import React, { useRef, useState } from "react";
import "./Carousel.scss"

interface CarouselProps {
    className: string;
    children: React.ReactNode;
}

export default function Carousel({ className, children }: CarouselProps) {
    const carouselRef = useRef<HTMLUListElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenArr = React.Children.toArray(children);
    const totalSlides = childrenArr.length;

    const scrollToIndex = (index: number) => {
        const scrollAmount = 300;
        carouselRef.current?.scrollTo({
            left: index * scrollAmount,
            behavior: "smooth"
        });
    };

    const handleLeft = () => {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    };

    const handleRight = () => {
        const newIndex = (currentIndex + 1) % totalSlides;
        setCurrentIndex(newIndex);
        scrollToIndex(newIndex);
    }

    return (
        <div className={`carousel ${className}`}>
            <button className="carousel__arrow carousel__arrow--left" onClick={handleLeft}>
                <img className="carousel__arrow-icon" src="/assets/icons/arrow-left.svg" alt="Left Arrow" />
            </button>

            <div className="carousel__track-wrapper">
                <ul className="carousel__track" ref={carouselRef}>
                    {children}
                </ul>
            </div>

            <button className="carousel__arrow carousel__arrow--right" onClick={handleRight}>
                <img className="carousel__arrow-icon" src="/assets/icons/arrow-right.svg" alt="Right Arrow" />
            </button>
        </div>
    )
}