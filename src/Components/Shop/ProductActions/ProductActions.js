import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductActions.css";

const ProductActions = () => {
  return (
    <ul className="sProduct_itemActions">
      <li title="Add to cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </li>
      <li title="Wish list">
        <FontAwesomeIcon icon={faHeart} />
      </li>
      <li title="View details">
        <FontAwesomeIcon icon={faEye} />
      </li>
    </ul>
  );
};

export default ProductActions;
