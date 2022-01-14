import React from "react";
import { Nav } from "react-bootstrap";
import classes from "./CategoriesTab.module.css";

const TabMenu = ({ category }) => {
  return (
    <Nav.Item className={classes.sTabItem}>
      <Nav.Link
        className={classes.sTabLink + " d-flex align-items-center"}
        eventKey={category.name.toLowerCase()}
      >
        <img className={classes.catIcon} src={category.icon} alt="" />
        <div>
          <h6 className="font-18 textSemiBold">{category.name}</h6>
          <p className="font-13 m-0">620 products</p>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

export default TabMenu;
