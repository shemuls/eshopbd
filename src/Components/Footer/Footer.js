import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../Asset/frontend/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import SocialMedia from "../SocialMedia/SocialMedia.js";
const Footer = () => {
  return (
    <footer>
      <div className="sWinContext py-2 text-center">
        <Container>
          <Row>
            <Col>
              <p className="m-0 font-18 text-white">
                Win a contest! Get this limited-editon
                <Link className="m-2 d-inline-block text-white" to="#">
                  View Details
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sFooterMenuArea py-5">
        <Container>
          <Row>
            <Col sm={12} lg={3}>
              <div className="footerLogoWrap">
                <img className="mb-4" src={logo} alt="" />
                <div className="font-13 colorLight mb-2">
                  71 Pilgrim Avenue Chevy Chase, east california.
                </div>
                <div className="font-13 colorLight mb-2">
                  <strong>Call us: </strong>01723652560
                </div>
                <div className="font-13 colorLight mb-2">
                  <strong>Email: </strong>info@eshopbd.com
                </div>
              </div>
            </Col>
            <Col sm={12} lg={2}>
              <h4 className="footerHeading">Information</h4>
              <ul className="sFooterLinkWrap m-0 p-0">
                <li className="sFooterLink">
                  <a href="about-us.html">About us</a>
                </li>
                <li className="sFooterLink">
                  <Link to="#">FAQ</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Delivery Information</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} lg={2}>
              <h4 className="footerHeading">Accounts</h4>
              <ul className="sFooterLinkWrap m-0 p-0">
                <li className="sFooterLink">
                  <a href="about-us.html">My Account</a>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Order history</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Whish list</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Special</Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} lg={2}>
              <h4 className="footerHeading">Services</h4>
              <ul className="sFooterLinkWrap m-0 p-0">
                <li className="sFooterLink">
                  <a href="about-us.html">Discounts Returns</a>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Privacy & Policy</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Customer Service</Link>
                </li>
                <li className="sFooterLink">
                  <Link to="#">Terms & Condition</Link>
                </li>
              </ul>
            </Col>
            <Col sm={12} lg={3}>
              <h4 className="footerHeading">Newsletter</h4>
              <div className="font-13 colorLight mb-2">
                Get instant updates about our new products and special promos!
              </div>
              <div className="sFooterNewsletterForm mt-4 d-flex align-items-center">
                <input type="text" placeholder="Enter your email here..." />
                <div className="bg-primary text-white px-2 py-1">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerBottom py-3">
        <Container>
          <Row>
            <Col md={3}>
              <SocialMedia />
            </Col>
            <Col md={6}>
              <div className="colorLight text-center">
                Copyright © 2021-2022 eshopBD. All Rights Reserved
              </div>
            </Col>
            <Col md={3}>
              <div className="text-right">
                <img
                  src="https://loopinfosol.in/themeforest/ekka-html-v3/ekka-html/assets/images/icons/payment.png"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
