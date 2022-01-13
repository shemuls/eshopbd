import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import allProducts from "../../../FakeData/Products/index.js";
import ProductItem from "../ProductItem/ProductItem.js";

const ProductsGrid = ({ category }) => {
  const products12 = allProducts.slice(0, 12);
  const [products, setProducts] = useState(products12);

  return (
    <div className="sProductGrid_area">
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product.key} lg={3} md={6} sm={6} xs={12}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsGrid;
