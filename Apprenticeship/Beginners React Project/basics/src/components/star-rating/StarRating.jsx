import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starRating.css";

const StarRating = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleMouseHover = (index) => {
    setHover(index);
  };
  const handlemouseLeave = () => {
    setHover(rating);
  };

  return (
    <div>
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseHover(index)}
            onMouseLeave={() => handlemouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
