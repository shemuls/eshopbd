import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Currency from "../Currency/Currency.js";
import classes from "./OfferBanner.module.css";

const OfferBanner = ({
  bg,
  title,
  subTitle,
  info,
  productImage,
  price,
  link,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className={classes.sOfferBanner + " d-flex align-items-center"}
    >
      <Container>
        <Row className="justify-content-end">
          <Col md={7}>
            <div className="text-center">
              {title && <h2 className={classes.sTitle}>{title}</h2>}
              {subTitle && <h3 className={classes.sSubTitle}>{subTitle}</h3>}
              {productImage && (
                <img
                  className={classes.sProductImage}
                  src={productImage}
                  alt=""
                />
              )}
              {info && <p className={classes.sDesc}>{info}</p>}
              {price && (
                <p className={classes.sOfferPrice}>
                  <Currency />
                  {price}
                </p>
              )}
              {link && (
                <Link
                  to={link}
                  className="btn btn-primary btn-lg rounded rounded-0"
                >
                  Shop Now
                </Link>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OfferBanner;
