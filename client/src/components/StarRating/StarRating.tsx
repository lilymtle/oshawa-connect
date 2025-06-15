interface StarRatingProps {
    rating: number;
    outOf?: number;
}

export default function StarRating({ rating, outOf = 5 }: StarRatingProps) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const totalStars = fullStars + (hasHalfStar ? 1 : 0);
    const emptyStars = outOf - totalStars;

    return (
        <div className="star-rating">
            {[...Array(fullStars)].map((_, index) => (
                <img key={`full-${index}`} src="/assets/icons/star-filled.svg" alt="Full star" />
            ))}

            { hasHalfStar && <img src="/assets/icons/star-half-filled.svg" alt="Half star" /> }

            {[...Array(emptyStars)].map((_, index) => (
                <img key={`full-${index}`} src="/assets/icons/star-empty.svg" alt="Empty star" />
            ))}
        </div>
    )
}