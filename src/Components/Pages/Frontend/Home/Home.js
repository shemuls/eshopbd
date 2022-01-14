import {
  faCheckCircle,
  faFingerprint,
  faHeadphones,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { homeSlides } from "../../../../FakeData/FakeData.js";
import CarouselSlide from "../../../CarouselSlide/CarouselSlide.js";
import CategoriesTab from "../../../CategoriesTab/CategoriesTab.js";
import DynamicTab from "../../../DynamicTab/DynamicTab.js";
import FancyHeading from "../../../FancyHeading/FancyHeading.js";
import IconBox from "../../../IconBox/IconBox.js";
import OfferBanner from "../../../OfferBanner/OfferBanner.js";
import ProductsGrid from "../../../Shop/ProductsGrid/ProductsGrid.js";
import TestimonialsSlider from "../../../TestimonialsSlider/TestimonialsSlider.js";
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

      {/* categories tab */}
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
          <Row className="mt-4">
            <CategoriesTab />
          </Row>
        </Container>
      </section>

      {/* icon box */}
      <section className="sSection">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <IconBox
                title="Free Shipping"
                description="Free shipping on all US order or order above $200"
              >
                {faPlane}
              </IconBox>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <IconBox
                title="24X7 Support"
                description="Contact us 24 hours a day, 7 days a week"
              >
                {faHeadphones}
              </IconBox>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <IconBox
                title="30 Days Return"
                description="Simply return it within 30 days for an exchange"
              >
                {faCheckCircle}
              </IconBox>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <IconBox
                title="Payment Secure"
                description="Contact us 24 hours a day, 7 days a week"
              >
                {faFingerprint}
              </IconBox>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Offer banner */}
      <section>
        <OfferBanner
          bg="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/offer-image/offer_bg.jpg"
          title="Sunglasses"
          subTitle="Super Offer"
          productImage="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/offer-image/1.png"
          info="Acetate Frame Sunglasses"
          price="40.00 Only"
          link="#"
        />
      </section>

      {/* New Arrivals */}
      <section className="sSection">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <FancyHeading
                title="New Arrivals"
                subTitle="Browse The Collection of Top Products"
              />
            </Col>
          </Row>
          <ProductsGrid count={4} />
        </Container>
      </section>

      {/* Client reviews */}
      <section className="sSection sBgLight">
        <Container>
          <Row>
            <Col md={12} className="text-center mb-4">
              <FancyHeading
                title="Client Review"
                subTitle="What say client about us"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <TestimonialsSlider />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
