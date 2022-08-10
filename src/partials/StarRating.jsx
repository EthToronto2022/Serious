import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        return (
          <div key={index}>
            <FontAwesomeIcon
              icon={faStar}
              className={`w-5 h-5 ${
                index > rating - 1 ? "text-gray-500" : "text-yellow-500"
              }`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
