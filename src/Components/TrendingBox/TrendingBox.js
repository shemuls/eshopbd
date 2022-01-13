import React from "react";
import { Link } from "react-router-dom";
import classes from "./TrendingBox.module.css";

const TrendingBox = ({ title, subTitle, info, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={classes.trendingBoxWrap + " d-flex align-items-center p-4"}
    >
      <div className="w-100">
        <span className="font-20 colorSecondary textRegular ">{title}</span>
        <h3 className="textUppercase textBold mt-2 mb-3 w-50">{subTitle}</h3>
        <p className="m-0">{info}</p>
      </div>
      <div
        className={
          classes.trendingBoxBtnWrap +
          " d-flex justify-content-center align-items-center"
        }
      >
        <Link to="#" className="btn btn-primary btn-lg textSemiBold rounded-0">
          ORDER NOW
        </Link>
      </div>
    </div>
  );
};

export default TrendingBox;
