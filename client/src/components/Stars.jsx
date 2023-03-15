import React from "react";

import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Stars = ({ value }) => {
  const fullStars = Math.floor(value);
  const totalStars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center">
      {totalStars.map((star) => (
        <FontAwesomeIcon
          className={`text-yellow-500 dark:text-gray-400 `}
          key={star}
          icon={star <= fullStars ? faStar : star === Math.ceil(value) ? faStarHalfAlt : farStar}
        />
      ))}
    </div>
  );
};

export default Stars;
