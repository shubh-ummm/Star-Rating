import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const Star_Rating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starMessages = [
    // 1 Star Rating
    "Yikes! We'll send this one back to the drawing board. Thanks for your cosmic feedback!",
    // 2 Star Rating
    "Hmm, looks like we're not everyone's cup of rocket fuel. Your honesty fuels our journey!",
    // 3 Star Rating
    "Not quite intergalactic, but hey, we're still exploring the cosmos together!",
    // 4 Star Rating
    "Almost at warp speed! Your feedback lights our rockets as we journey through the stars!",
    // 5 Star Rating
    "Blast off! Thanks for launching us into the stratosphere with your stellar rating!",
  ];

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (rating || hover) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={50}
          />
        );
      })}
      {rating > 0 && <h2>{starMessages[rating - 1]}</h2>}
    </div>
  );
};

export default Star_Rating;
