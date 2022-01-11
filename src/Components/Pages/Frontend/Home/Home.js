import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { homeSlides } from "../../../../FakeData/FakeData.js";
import CarouselSlide from "../../../CarouselSlide/CarouselSlide.js";
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
        </Container>
      </section>
    </>
  );
};

export default Home;
