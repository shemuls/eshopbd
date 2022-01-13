import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div
      className={
        classes.sSearchBoxwrap +
        " d-felx align-items-center text-center align-content-center"
      }
    >
      <input
        className={classes.sSearchBoxInput}
        type="text"
        placeholder="Enter your product name"
      />
      <FontAwesomeIcon
        className={classes.sSearchBoxIcon + " colorLight"}
        icon={faSearch}
      />
    </div>
  );
};

export default SearchBox;
