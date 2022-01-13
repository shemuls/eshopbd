import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeSlides } from "../../../../FakeData/FakeData.js";
import CarouselSlide from "../../../CarouselSlide/CarouselSlide.js";
import DynamicTab from "../../../DynamicTab/DynamicTab.js";
import FancyHeading from "../../../FancyHeading/FancyHeading.js";

const Home = () => {
  return (
    <>
      <section className="homeTopHeroArea">
        <CarouselSlide slideData={homeSlides} />
      </section>

      <section className="topCollectionArea sSection ">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <FancyHeading
                title="Our Top Collection"
                subTitle="Lorem ipsum dolor sed consequence qolur"
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md={12}>
              <DynamicTab />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Link
                to="/shop"
                className="text-center w-100 d-inline-block textSemiBold font-18 colorSecondary mt-3 hoverColorPrimary"
              >
                Shop All Collection
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
