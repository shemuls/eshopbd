import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./IconBox.module.css";

const IconBox = ({ children, title, description }) => {
  return (
    <div className={classes.sIconBoxWrap}>
      {children && (
        <FontAwesomeIcon className={classes.sIconBox_icon} icon={children} />
      )}
      {title && <h2 className={classes.sIconBox_title}>{title}</h2>}

      {description && <p className={classes.sIconBox_desc}>{description}</p>}
    </div>
  );
};

export default IconBox;
