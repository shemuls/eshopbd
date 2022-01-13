import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Rating.module.css";

const Rating = () => {
  return (
    <div>
      <div className={classes.ratingStar}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={classes.ratingStar}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={classes.ratingStar}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={classes.ratingStar}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={classes.ratingStar}>
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default Rating;
