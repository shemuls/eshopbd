import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SearchBox.css";

const SearchBox = () => {
  return (
    <div className="sSearchBoxwrap d-felx align-items-center text-center align-content-center">
      <input
        className="sSearchBoxInput"
        type="text"
        placeholder="Enter your product name"
      />
      <FontAwesomeIcon className="sSearchBoxIcon colorLight" icon={faSearch} />
    </div>
  );
};

export default SearchBox;
