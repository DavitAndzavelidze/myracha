import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type RatingProps = {
  rating: number;
  maxStars?: number;
  className?: string;
};

const Rating = ({ rating, maxStars = 5, className = "" }: RatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7; // More precise half-star calculation
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <FaStar
          key={`full-${i}`}
          className="text-yellow-400"
          aria-hidden="true"
        />
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <FaStarHalfAlt
          key="half"
          className="text-yellow-400"
          aria-hidden="true"
        />
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar
          key={`empty-${i}`}
          className="text-yellow-400"
          aria-hidden="true"
        />
      ))}

      {/* Screen reader information */}
      <span className="sr-only">
        Rating: {rating.toFixed(1)} out of {maxStars} stars
      </span>
    </div>
  );
};

export default Rating;
