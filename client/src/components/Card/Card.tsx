import { formatPriceLevel } from "../../utils/formatPriceLevel";
import StarRating from "../StarRating/StarRating";
import "./Card.scss"

interface CardProps {
    variant: "default" | "event" | "business" | "resource";
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode; 
    title: string;
    category: string;
    rating: number;
    cuisine?: string;
    distance: number;
    priceLevel?: number;
};

export default function Card({ variant = "default", className, style, children, title, category, rating, cuisine, distance, priceLevel }: CardProps) {    
    return(
        <div className={`card card--${variant} ${className}`} style={style}>
            <div className={`card__description--${variant} ${className}`}>
                <p className="card__title">{title}</p>

                <div className="card__rating"><StarRating rating={rating} /></div>

                <div className="card__meta">
                    {category === "food" && <p className="card__cuisine">{cuisine}</p>}
                    
                    <span className="card__distance-wrapper">
                        <img 
                            className="card__icon card__icon--map-pin"
                            src="/assets/icons/map-pin.svg"
                            alt="Map pin icon"
                        />

                        <p className="card__distance">{distance}km</p>
                    </span>

                    {category === "food" && formatPriceLevel(priceLevel)}

                    <img
                        className="card__icon card__icon--arrow-right"
                        src="/assets/icons/arrow-right.svg"
                        alt="Right arrow icon"
                    />
                </div>
            </div>
        </div>
    );
}