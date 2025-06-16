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

    return (
        <div className={`carousel ${className}`}>

            <div className="carousel__track-wrapper">
                <ul className="carousel__track" ref={carouselRef}>
                    {cards.map((child, i) => (
                        <li key={i} className="carousel__card">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="carousel__labels">
                {dates.map((date, i) => (
                    <span
                        key={i}
                        className={`carousel__label ${i === index ? "active" : ""}`}
                        onClick={() => setIndex(i)}
                    >
                        {date}
                    </span>
                ))}
            </div>
        </div>
    );
}
