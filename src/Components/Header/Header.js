import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../Asset/frontend/images/logo.png";
import "./Header.css";
import { Col, Container, Row } from "react-bootstrap";
import SocialMedia from "../SocialMedia/SocialMedia.js";
import SearchBox from "../SearchBox/SearchBox.js";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import MainMenu from "../MainMenu/MainMenu.js";

const Header = () => {
  return (
    <header>
      <div className="sTopBar py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <SocialMedia />
            </Col>
            <Col md={4}>
              <p className="font-13 m-0 text-center textUppercase">
                Free Shipping This Week Order Over - $75
              </p>
            </Col>
            <Col md={4}>
              <div className="sContactInfoWrap d-flex justify-content-end align-items-center">
                <div className="sContactItem">
                  <FontAwesomeIcon
                    className="sContactItemIcon"
                    icon={faEnvelope}
                  />
                  <span className="sContactItemText">info@eshopbd.com</span>
                </div>
                <div className="sContactItem">
                  <FontAwesomeIcon
                    className="sContactItemIcon"
                    icon={faEnvelope}
                  />
                  <span className="sContactItemText">+01723652560</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sHeaderMiddleBar py-3">
        <Container>
          <Row className="align-items-center">
            <Col>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </Col>
            <Col>
              <SearchBox />
            </Col>
            <Col>
              <div className="sHeaderEbtn d-flex justify-content-end align-items-center">
                <div className="sHeaderEbtnItem ">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="sHeaderEbtnItem">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="sHeaderEbtnItem">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="sMenuBar">
        <Container>
          <Row>
            <Col md={12}>
              <MainMenu />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
