import { faEye, faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import allProducts from "../../FakeData/Product/index.js";
import Currency from "../Currency/Currency.js";
import "./ProductsGrid.css";

const ProductsGrid = () => {
  const products12 = allProducts.slice(0, 12);
  console.log(products12);
  return (
    <div className="sProductGrid_area">
      <Container>
        <Row>
          {products12.map((product) => (
            <Col key={product.key} lg={3} md={6} sm={6} xs={12}>
              <div className="sProductGrid_item">
                <div className="sProductGrid_imgWrap">
                  <div className="sProductGrid_image">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="sProductGrid_imageContent">
                    <span className="sPercentage">20%</span>
                    <ul className="sProductGrid_itemActions">
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
                  </div>
                </div>
                <div className="sProductGrid_content">
                  <h3 className="sProductGrid_title">
                    <Link to="#">{product.name}</Link>
                  </h3>
                  <div className="sProductGrid_rating">
                    <div className="ratingStar">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="ratingStar">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="ratingStar">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="ratingStar">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="ratingStar">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                  </div>
                  <div className="sProductGrid_price">
                    {/* <span className="oldPrice">
                      <Currency />
                      50
                    </span> */}
                    <span className="newPrice">
                      <Currency />
                      {product.price}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsGrid;
