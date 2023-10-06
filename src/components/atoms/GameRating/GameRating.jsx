import { useEffect, useState } from "react";
import "./GameRating.css";

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      let stars = [];
      if (rating > 5 || rating < 1) return;
      for (let i = 0; i < rating; i++) {
        stars.push(i);
      }
      return stars;
    };
    setStars(generateStars());
  }, [rating]);

  return (
    <div className="gameRating">
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

import PropTypes from "prop-types";

GameRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default GameRating;
