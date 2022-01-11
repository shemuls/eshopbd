import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./MainMenu.css";

const MainMenu = () => {
  return (
    <Navbar className="sMainMenuNavbar p-0" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="sMainMenu" />
        <Navbar.Collapse id="sMainMenu">
          <Nav className="m-auto">
            <NavLink className="nav-item nav-item nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-item nav-link" to="/products">
              Products
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Home & Decoration
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Art & Books
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink className="nav-item nav-item nav-link" to="/shop">
              Shop
            </NavLink>
            <NavLink className="nav-item nav-item nav-link" to="/shop">
              Blog
            </NavLink>
            <NavLink className="nav-item nav-item nav-link" to="/shop">
              About Us
            </NavLink>
            <NavLink className="nav-item nav-item nav-link" to="/shop">
              Contact Us
            </NavLink>
            <NavLink className="nav-item nav-item nav-link" to="/shop">
              Login
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainMenu;
