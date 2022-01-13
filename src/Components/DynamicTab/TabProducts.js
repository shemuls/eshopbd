import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../Shop/ProductItem/ProductItem.js";

const TabProducts = ({ filterProduts }) => {
  return (
    <div className="sProductGrid_area">
      <Container>
        <Row>
          {filterProduts.length &&
            filterProduts.map((product) => (
              <Col key={product.key} lg={3} md={6} sm={6} xs={12}>
                <ProductItem product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default TabProducts;
