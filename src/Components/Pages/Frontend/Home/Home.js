import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeSlides } from "../../../../FakeData/FakeData.js";
import CarouselSlide from "../../../CarouselSlide/CarouselSlide.js";
import DynamicTab from "../../../DynamicTab/DynamicTab.js";
import FancyHeading from "../../../FancyHeading/FancyHeading.js";
import TrendingBox from "../../../TrendingBox/TrendingBox.js";

const Home = () => {
  return (
    <>
      {/* Hero section with carousel slider */}
      <section className="homeTopHeroArea">
        <CarouselSlide slideData={homeSlides} />
      </section>

      {/* Top collection section with tab */}
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

      {/* Tremdomg box*/}
      <section className="sSection">
        <Container>
          <Row>
            <Col md={6}>
              <TrendingBox
                title="New Arrivials s"
                subTitle="Most Coolest Fashion"
                info="30% Discounts"
                bg="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/banner/2.jpg"
              />
            </Col>
            <Col md={6}>
              <TrendingBox
                title="New Trending"
                subTitle="Smart Android Device"
                info="Buy any 3 items & get 20% discounts"
                bg="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/banner/3.jpg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sSection sBgLight">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <FancyHeading
                title="Choose Categories"
                subTitle="Browse The Collection of Top Categories"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
