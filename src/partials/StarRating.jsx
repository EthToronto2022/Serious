import React from "react";
import { ReactComponent as StarIcon } from "../images/icons/star-solid.svg";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        return (
          <div key={index} className={index > rating - 1 && "opacity-50"}>
            <StarIcon className="w-5 h-5" />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
