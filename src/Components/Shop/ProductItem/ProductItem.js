import React from "react";
import { Link } from "react-router-dom";
import Currency from "../../Currency/Currency.js";
import ProductActions from "../ProductActions/ProductActions.js";
import Rating from "../Rating/Rating.js";
import classes from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={classes.sProductGrid_item + " sProduct_itemActionsHover"}>
      <div className={classes.sProductGrid_imgWrap}>
        <div className={classes.sProductGrid_image}>
          <img src={product?.img} alt="" />
        </div>
        <div className={classes.sProductGrid_imageContent}>
          <span className={classes.sPercentage}>20%</span>
          <ProductActions />
        </div>
      </div>
      <div className="sProductGrid_content">
        <h3 className={classes.sProductGrid_title}>
          <Link to="#">{product?.name}</Link>
        </h3>
        <Rating />
        <div className="sProductGrid_price">
          {/* <span className={classes.oldPrice}>
                      <Currency />
                      50
                    </span> */}
          <span className={classes.newPrice}>
            <Currency />
            {product?.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
