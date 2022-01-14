import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./IconBox.module.css";

const IconBox = ({ children, title, description }) => {
  return (
    <div className={classes.sIconBoxWrap}>
      <FontAwesomeIcon className={classes.sIconBox_icon} icon={children} />
      <h2 className={classes.sIconBox_title}>{title}</h2>
      <p className={classes.sIconBox_desc}>{description}</p>
    </div>
  );
};

export default IconBox;
